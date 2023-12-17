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
        goto("/deliveries/" + data.id)
	}
	function showCondition(data) {
		var bool = false;
		if (data.status == "processing") {
			bool = true;
		}
		return bool;
	}
	function showCondition2(data) {
		var bool = false;
		if (data.status == "pending_delivery") {
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

		confirmModal(true, 'Are you sure to mark this order as sent?', () => {
			postData(
				{ scope: 'mark_do', id: data.id, status: 'sent' },
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

<Datatable
	data={{
		inputs: inputs,
		join_statements: JSON.stringify([
			// { corporate_account: 'corporate_account' },
			{ user: 'user' }
		]),
		search_queries: ['a.id|b.username|b.fullname'],
		model: 'Sale',
		preloads: ['user', 'sales_person', 'payment'],
		buttons: [
            
            { name: 'Preview', onclickFn: viewDO },
			{ name: 'Download DO (PDF)', onclickFn: downloadDO },
			{ name: 'Mark Pending Delivery', onclickFn: doMarkPendingDelivery, showCondition: showCondition },
			{ name: 'Mark Sent', onclickFn: doMarkSent , showCondition: showCondition2}
		],
		customCols: [
			{
				title: 'Order',
				list: [
					'id',
					
                    { label: 'remarks', editor2: true },
				]
			},
			
		],
		columns: [
			{ label: 'ID', data: 'id' },

			{ label: 'Sale Date', data: 'sale_date' },
	
			{
				label: 'Status',
				data: 'status',
				isBadge: true,
				color: [
					{
						key: 'pending_payment',
						value: 'yellow'
					},
					{
						key: 'pending_confirmation',
						value: 'yellow'
					},
					{
						key: 'processing',
						value: 'blue'
					},
					{
						key: 'sent',
						value: 'pink'
					},
					{
						key: 'pending_delivery',
						value: 'purple'
					},
					{
						key: 'complete',
						value: 'green'
					}
				]
			},
			{ label: 'User', data: 'username', through: ['user'] },
			{ label: 'Sales Person', data: 'username', through: ['sales_person'] }
		]
	}}
/>
