<script>
	import Datatable from '$lib/components/Datatable.svelte';
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	onMount(async () => {});

	let module = data.module, bonus = data.bonus, date_data = data.date.split("-"),
		inputs = data.inputs;

</script>

<Datatable
	data={{
     	appendQueries: { name: bonus, is_paid: false, day: date_data[0], month: date_data[1], year: date_data[2] },
		inputs: inputs,
		join_statements: JSON.stringify([
			// { corporate_account: 'corporate_account' },
			{ user: 'user' }
		]),
		search_queries: [ 'b.username'],
		model: module,
		preloads: ['user'],
		customCols: [
			{
				title: 'General',
				list: ['id']
			}
		],
		columns: [
			{ label: 'ID', data: 'id' },

			{
				label: 'Paid?',
				data: 'is_paid',
				isBadge: true,
				color: [
					{
						key: false,
						value: 'yellow'
					},

					{
						key: true,
						value: 'green'
					}
				]
			},
			{ label: 'day', data: 'day' },
			{ label: 'month', data: 'month' },
			{ label: 'year', data: 'year' },
			{ label: 'User', data: 'username', through: ['user'] },

			{ label: 'Bonus', data: 'name' },
			{ label: 'Amount', data: 'amount' },
			{ label: 'Remarks', data: 'remarks' }
		]
	}}
/>
