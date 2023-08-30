<script>
	import Datatable from '$lib/components/Datatable.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	let module = data.module,
		inputs = data.inputs;
</script>

<Datatable
	data={{
		inputs: inputs,
		search_queries: null,
		model: module,
		// preloads: ['corporate_account'],
		customCols: [{ title: 'General', list: ['id', 'title', { label: 'content', editor: true }] }],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Title', data: 'title' }
		]
	}}
/>
