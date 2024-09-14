<script>
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	import { goto } from '$app/navigation';
	import Datatable from '$lib/components/Datatable.svelte';
	import { buildQueryString, postData } from '$lib/index.js';
	/** @type {import('./$types').PageData} */
	export let data;

	let inputs = data.inputs;
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;

	function controlDevice(data, checkPage, confirmModal) {
		goto('/devices/' + data.id);
	}

	function regenQr(data, checkPage, confirmModal) {
		console.log(data);
		console.log('transfer approved!');

		confirmModal(
			true,
			`

        <span class="">Are you sure to regenerate QR?</span>`,
			() => {
				
				postData(
					{ scope: 'gen_static_qr',  id: data.id , name: data.name},
					{
						endpoint: url + '/svt_api/webhook',
						successCallback: (e) => {
							console.log(e)
							checkPage();
						}
					}
				);
			}
		);
	}
</script>

<Datatable
	data={{
		showNew: true,
		canDelete: true,
		inputs: inputs,
		search_queries: ['a.name'],
		model: 'Device',
		preloads: ['outlet', 'executor_board'],
		buttons: [{ name: 'Control', onclickFn: controlDevice }, { name: 'Regen QR', onclickFn: regenQr }],
		customCols: [
			{
				title: 'General',
				list: [
					'id',
					'name',

					'default_io_pin',
					'format',
					'cloridge_device_uid',
					{
						label: 'executor_board_id',
						selection: 'Device',
						customCols: null,
						search_queries: ['a.name'],
						newData: 'name',
						title_key: 'name'
					},
					{
						label: 'outlet_id',
						selection: 'Outlet',
						customCols: null,
						search_queries: ['a.name'],
						newData: 'name',
						title_key: 'name'
					},
					{ label: 'is_cloridge', boolean: true },
					{ label: 'record_wifi_time', boolean: true },
					{ label: 'skip_first', boolean: true },
					{ label: 'is_active', boolean: true },
				
					
				]
			}
		],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Name', data: 'name' },
			{ label: 'Timestamp', data: 'inserted_at', formatDateTime: true, offset: 8 },

			{
				label: 'Status',
				data: 'is_active',
				isBadge: true,
				color: [
					{
						key: 'false',
						value: 'pink'
					},

					{
						key: 'true',
						value: 'green'
					}
				]
			},
			// { label: 'User', data: 'username', through: ['user'] },
			{ label: 'Outlet', data: 'name', through: ['outlet'] }
		]
	}}
/>
