<script>
	/** @type {import('./$types').PageData} */

	import SimpleTable from '$lib/components/SimpleTable.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { postData, buildQueryString } from '$lib/index.js';
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	import { isToastOpen } from '$lib/stores/toast';
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;

	export let data;
	let device = data.device;
	console.info(device);
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
