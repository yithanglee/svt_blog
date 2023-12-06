<script>
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';

	import Datatable from '$lib/components/Datatable.svelte';
	import { buildQueryString, postData } from '$lib/index.js';
	/** @type {import('./$types').PageData} */
	export let data;

	let inputs = data.inputs;
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
	function approveTransfer(data, checkPage, confirmModal) {
		console.log(data);
		console.log('transfer approved!');

		confirmModal(true, 'Are you sure to manually approve this sale?', () => {
			postData(
				{ scope: 'manual_approve_fpx', id: data.payment.billplz_code },
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
		search_queries: ['b.username|b.fullname'],
		model: 'Sale',
		preloads: ['user', 'sales_person', 'payment'],
		buttons: [{ name: 'Manual Approve', onclickFn: approveTransfer }],
		customCols: [
			{
				title: 'Order',
				list: ['id', { label: 'status', selection: ['processing', 'sent', 'pending_delivery', 'complete', 'cancelled'] }, 'remarks']
			},
			{
				title: 'Others',
				list: [
					'total_point_value',
					{ label: 'registration_details', editor2: true },

					{ label: 'user_id', expose: true }
				]
			}
		],
		columns: [
			{ label: 'ID', data: 'id' },
			// {
			// 	label: 'Delivery Ref',
			// 	data: 'delivery_ref',
			// 	subtitle: { label: 'Courier', data: 'delivery_method' }
			// },
			{ label: 'Sale Date', data: 'sale_date' },
			{ label: 'Code', data: 'billplz_code', through: ['payment'] },
			{ label: 'Point Value', data: 'total_point_value' },
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
			// {
			// 	label: 'Receiver',
			// 	data: 'receiver_name',
			// 	subtitle: { label: 'Phone', data: 'receiver_phone' }
			// }
		]
	}}
/>
