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
		search_queries: null,
		model: 'User',
		// preloads: ['corporate_account'],
		customCols: [{title: 'General', list: ['id', 'full_name']}],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Full', data: 'full_name' },
			{ label: 'Username', data: 'username' },
			// { label: 'Code', data: 'member_code', isBadge: true },
			// { label: 'Account', data: 'name', through: ['corporate_account']  },
		]
	}}
/>
