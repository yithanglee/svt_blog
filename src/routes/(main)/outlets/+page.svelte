<script>
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	import { goto } from '$app/navigation';
	import Datatable from '$lib/components/Datatable.svelte';
	import { buildQueryString, postData } from '$lib/index.js';
	/** @type {import('./$types').PageData} */
	export let data;

	let inputs = data.inputs;
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;

	function downloadDO(data, checkPage, confirmModal) {
		window.open(url + '/pdf?type=do&id=' + data.id, '_blank').focus();
	}
	function viewDO(data, checkPage, confirmModal) {
		goto('/deliveries/' + data.id);
	}
	function showCondition(data) {
		var bool = false;
		if (data.status == 'processing') {
			bool = true;
		}
		return bool;
	}
	function showCondition2(data) {
		var bool = false;
		if (data.status == 'pending_delivery') {
			bool = true;
		}
		return bool;
	}
	function doMarkPendingDelivery(data, checkPage, confirmModal) {
		console.log(data);
		console.log('transfer approved!');

		confirmModal(true, 'Are you sure to mark this order as pending delivery?', () => {
			postData(
				{ scope: 'mark_do', id: data.id, status: 'pending_delivery' },
				{
					endpoint: url + '/svt_api/webhook',
					successCallback: () => {
						checkPage();
					}
				}
			);
		});
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
		// join_statements: JSON.stringify([{ user: 'user' }]),
		search_queries: ['a.id'],
		model: 'Outlet',
		preloads: [],
		buttons: [],
		customCols: [
			{
				title: 'General',
				list: [
					'id',
					'name',
					
					{ label: 'price_per_minutes', alt_name: "Price/Minute", expose: true },
					{ label: 'subdomain', expose: true },
					{ label: 'uid', expose: true },
					{ label: 'mcode', expose: true },
					{ label: 'mkey', expose: true },
					{ label: 'payment_gateway', selection: ['RM', 'ipay88', 'billplz'] },
					{ label: 'address', editor2: true },
					'block_reason',
					{ label: 'is_blocked', boolean: true }
				]
			}
		],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Name', data: 'name', subtitle: {label: 'address', data: 'address'} },
			{ label: 'Subdomain', data: 'subdomain' },
			{ label: 'Ref', data: 'uid' },
		
			{ label: 'Timestamp', data: 'inserted_at', formatDateTime: true, offset: 8 },

			{
				label: 'Blocked?',
				data: 'is_blocked',
				isBadge: true,
				color: [
					{
						key: true,
						value: 'red'
					},
					{
						key: false,
						value: 'green'
					}
				]
			}
		]
	}}
/>
