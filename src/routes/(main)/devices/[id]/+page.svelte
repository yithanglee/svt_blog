<script>
	/** @type {import('./$types').PageData} */
	import { Badge, Modal, Button } from 'flowbite-svelte';
	import FormInput from '$lib/components/FormInput.svelte';
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
		channel,
		checkPage,
		fdata = { delay: 0.1, value: 1 },
		formModal = false;
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
			console.log('set offline');
			isOnline = false;
		}, 11000);
	});
	onDestroy(() => {
		channel.leave();
	});
	function customCommand(data, zcheckPage) {
		console.log('do mar');
		console.log(data);
		fdata = data;
		checkPage = zcheckPage;
		formModal = true;
	}
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
					value: data.value, // reps
					action: data.action,
					delay: data.delay // delay
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
	function filteredInput(key) {
		return null;
	}
	function tryPost() {
		// postData(
		// 	{ scope: 'mark_do', id: fdata.id, shipping_ref: fdata.shipping_ref, location_id: fdata.pick_up_point_id, status: 'sent' },
		// 	{
		// 		endpoint: url + '/svt_api/webhook',
		// 		successCallback: () => {
		// 			checkPage();
		// 			formModal = false;
		// 		}
		// 	}
		// );
		postData(
				{
					scope: 'start_pwm',
					id: fdata.id,
					name: device.name,
					item_name: data.name,
					value: fdata.value, // reps
					action: fdata.action,
					delay: fdata.delay // delay
				},
				{
					endpoint: url + '/svt_api/webhook',
					successCallback: () => {
						checkPage();
						formModal = false;
					}
				}
			);
	}
</script>

<Badge
	style="position: absolute; right: 10vw;"
	class="text-large"
	large="true"
	color={isOnline ? 'green' : 'yellow'}>{isOnline ? 'Online' : '...'}</Badge
>

<Modal bind:open={formModal} size="lg" autoclose={false} class="w-full" outsideclose>
	<form class="flex flex-col space-y-6" id="currentForm" action="#">
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Confirmation</h3>
		<p class="">Are you sure to send these custom command?</p>
		<div
			class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4"
			role="tabpanel"
			aria-labelledby="id-tab"
		>
			<FormInput
				module={'DeviceAction'}
				key={{
					label: 'delay',
					expose: true
				}}
				data={fdata}
				input={filteredInput({
					label: 'delay',
					expose: true
				})}
			/>
			<FormInput
				module={'DeviceAction'}
				key={{
					label: 'value',
					expose: true
				}}
				data={fdata}
				input={filteredInput({
					label: 'value',
					expose: true
				})}
			/>
		</div>
	</form>
	<svelte:fragment slot="footer">
		<Button on:click={() => tryPost()}>Submit</Button>
	</svelte:fragment>
</Modal>
<SimpleTable
	title={'Device - ' + device.name}
	description={'Manual control device with following commands'}
	data={{
		apiData: { id: data.id },
		buttons: [
			{ name: 'Control', onclickFn: sendCommand },
			{ name: 'Custom', onclickFn: customCommand }
		],
		scope: 'get_device_commands',
		columns: [{ label: 'Name', data: 'name' }]
	}}
/>
