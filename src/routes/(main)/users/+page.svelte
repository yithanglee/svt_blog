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
		customCols: [{title: 'General', list: ['id', 'full_name']}],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Rank', data: 'rank_name' },
			{ label: 'Full', data: 'full_name' },
			{ label: 'Username', data: 'username' },
			{ label: 'Phone', data: 'phone' },
			{ label: 'Email', data: 'email' },
			// { label: 'Code', data: 'member_code', isBadge: true },
			{ label: 'Rank', data: 'name', through: ['rank']  },
		]
	}}
/>
