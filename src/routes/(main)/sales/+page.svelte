<script>
	import Datatable from '$lib/components/Datatable.svelte';
	import { buildQueryString } from '$lib/index.js';
	/** @type {import('./$types').PageData} */
	export let data;

	let inputs = data.inputs;
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
		preloads: ['user', 'sales_person'],
		customCols: [
			{
				title: 'Order',
				list: ['id', 'remarks', { label: 'user_id', expose: true }]
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
            { label: 'Point Value', data: 'total_point_value' },
			{
				label: 'Status',
				data: 'status',
				isBadge: true,
				color: [
					{
						key: 'pending_confirmation',
						value: 'yellow'
					},
					{
						key: 'processing',
						value: 'blue'
					},
					{
						key: 'pending_delivery',
						value: 'green'
					}
				]
			},
			{ label: 'User', data: 'username', through: ['user'] },
			{ label: 'Sales Person', data: 'username', through: ['sales_person'] },
			// {
			// 	label: 'Receiver',
			// 	data: 'receiver_name',
			// 	subtitle: { label: 'Phone', data: 'receiver_phone' }
			// }
		]
	}}
/>
