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

	function doMarkSent(data, checkPage, confirmModal) {
		console.log(data);
		console.log('transfer approved!');

		confirmModal(
			true,
			`
        <label class="my-4 text-sm font-medium block 
        text-gray-900 dark:text-gray-300 space-y-2">
        <span>Shipping Ref</span>  <input name="shipping_ref" 
        placeholder="" type="text" class="block w-75 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-500 text-sm rounded-lg"> </label>
        <span class="">Are you sure to mark this order as sent?</span>`,
			() => {
				var dom = document.querySelector("input[name='shipping_ref']");
				postData(
					{ scope: 'mark_do', shipping_ref: dom.value, id: data.id, status: 'sent' },
					{
						endpoint: url + '/svt_api/webhook',
						successCallback: () => {
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
		buttons: [{ name: 'Control', onclickFn: controlDevice }],
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
