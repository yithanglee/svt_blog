<script>
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';

	import Datatable from '$lib/components/Datatable.svelte';
	import { buildQueryString, postData } from '$lib/index.js';
	/** @type {import('./$types').PageData} */
	export let data;

	let inputs = data.inputs;
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
	function showCondition2(data) {
		var bool = false;

		if (data.status == 'pending_payment') {
			bool = true;
		}
		return bool;
	}
	function showCondition(data) {
		var bool = false;
		if (data.payment_webhook == null) {
			return bool;
		}
		if (data.payment_ref != null) {
			if (data.status != 'pending_payment') {
				return false;
			}
			bool = true;
		}

		return bool;
	}

	function approveTransfer(data, checkPage, confirmModal) {
		console.log(data);
		console.log('transfer approved!');

		confirmModal(true, 'Are you sure to manually approve this sale?', () => {
			postData(
				{ scope: 'manual_approve_fpx', id: data.payment_ref },
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
		canDelete: true,
		appendQueries: { organization_id: data.organization_id },

		inputs: inputs,
		join_statements: JSON.stringify([
			// { corporate_account: 'corporate_account' },
			{ device: 'device' }
		]),
		search_queries: ['a.id|b.name'],
		model: 'Sale',
		preloads: ['device', 'outlet'],
		buttons: [
			{ name: 'Manual Approve (R M)', onclickFn: approveTransfer, showCondition: showCondition }
			// { name: 'Manual Approve', onclickFn: approveTransfer2, showCondition: showCondition2 }
		],
		customCols: [
			{
				title: 'Order',
				list: [
					'id',
					{
						label: 'status',
						selection: ['processing', 'sent', 'pending_delivery', 'complete', 'cancelled']
					},
					'remarks'
				]
			},
			{
				title: 'Others',
				list: ['total_point_value', { label: 'payment_webhook', editor2: true }]
			}
		],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Outlet', data: 'name', through: ['outlet'] },
			{ label: 'Timestamp', data: 'inserted_at', formatDateTime: true, offset: 8 },
			{ label: 'Sale Date', data: 'inserted_at', formatDate: true, offset: 8 },
			// {
			// 	label: 'Delivery Ref',
			// 	data: 'delivery_ref',
			// 	subtitle: { label: 'Courier', data: 'delivery_method' }
			// },
			// { label: 'Sale Date', data: 'sales_date' },
			{ label: 'Ref', data: 'payment_ref' },
			{ label: 'Amount', data: 'amount' },
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
			}
			// { label: 'User', data: 'username', through: ['user'] },
			// { label: 'Sales Person', data: 'username', through: ['sales_person'] }
			// {
			// 	label: 'Receiver',
			// 	data: 'receiver_name',
			// 	subtitle: { label: 'Phone', data: 'receiver_phone' }
			// }
		]
	}}
/>
