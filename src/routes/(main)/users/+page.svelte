<script>
	import Datatable from '$lib/components/Datatable.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	let inputs = data.inputs;
</script>

<Datatable
	data={{
		inputs: inputs,
		search_queries: null,
		model: 'User',
		preloads: ['rank'],
		customCols: [{title: 'General', list: ['id', 'fullname', {label: 'is_stockist', boolean: true}]}],
		columns: [
			{ label: 'ID', data: 'id' },
			{
				label: 'Stockist?',
				data: 'is_stockist',
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
			{ label: 'Rank', data: 'rank_name' },
			{ label: 'Full', data: 'fullname' },
			{ label: 'Username', data: 'username' },
			{ label: 'Phone', data: 'phone' },
			{ label: 'Email', data: 'email' },
			// { label: 'Code', data: 'member_code', isBadge: true },
			{ label: 'Rank', data: 'name', through: ['rank']  },
		]
	}}
/>
