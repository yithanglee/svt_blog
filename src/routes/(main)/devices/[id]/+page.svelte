<script>
	/** @type {import('./$types').PageData} */
	import { Badge } from 'flowbite-svelte';
	import SimpleTable from '$lib/components/SimpleTable.svelte';
	import { goto } from '$app/navigation';
	import { Socket } from 'phoenix';
	import { onMount, onDestroy } from 'svelte';
	import { postData, buildQueryString } from '$lib/index.js';
	import { PHX_HTTP_PROTOCOL, PHX_WS_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	import { isToastOpen } from '$lib/stores/toast';
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;

	export let data;
	let device = data.device,
		channel;
	console.info(device);
	let isOnline = false;

	const toggleOnlineStatus = (status) => {
		isOnline = status;
	
	};

	onMount(() => {
		const socket = new Socket(PHX_WS_PROTOCOL + PHX_ENDPOINT + '/socket');
		console.info(socket);
		socket.connect();
		var topic = 'user:' + device.name;
		// Join the topic
		channel = socket.channel(topic, {});
		channel
			.join()
			.receive('ok', (data) => {
				console.log('Joined topic', topic);
			})
			.receive('error', (resp) => {
				console.log('Unable to join topic', topic);
			});

		channel.on('i_am_online', (payload) => {
			console.info(payload);
			toggleOnlineStatus(true);
		});

		setInterval(() => {
			console.log("set offline")
			isOnline = false;
		}, 11000);
	});
	onDestroy(() => {
		channel.leave();
	});
	function sendCommand(data, checkPage, confirmModal) {
		console.log(data);
		console.log('transfer approved!');

		confirmModal(true, 'Are you sure to send this command?', () => {
			postData(
				{
					scope: 'start_pwm',
					id: data.id,
					name: device.name,
					item_name: data.name,
					value: data.value,
					action: data.action,
					delay: data.delay
				},
				{
					endpoint: url + '/svt_api/webhook',
					successCallback: () => {
						checkPage();
					}
				}
			);
		});
	}
</script>
<Badge style="position: absolute; right: 10vw;" class="text-large" large=true color="{isOnline ? 'green' : 'yellow'}">{isOnline ? 'Online' : '...'}</Badge>
<SimpleTable
	title={'Device - ' + device.name}
	description={'Manual control device with following commands'}
	data={{
		apiData: { id: data.id },
		buttons: [{ name: 'Control', onclickFn: sendCommand }],
		scope: 'get_device_commands',
		columns: [{ label: 'Name', data: 'name' }]
	}}
/>
