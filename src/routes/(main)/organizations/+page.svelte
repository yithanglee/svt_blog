<script>
	import Datatable from '$lib/components/Datatable.svelte';
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	onMount(async () => {});

	let module = data.module,
		inputs = data.inputs;
</script>

<Datatable
	data={{
		showNew: true,
		canDelete: true,
		inputs: inputs,
		search_queries: null,
		model: module,
		preloads: [],
		customCols: [
			{
				title: 'General',
				list: [
					'id',
					'name',
			
				]
			}
		],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Title', data: 'name' }
		]
	}}
/>

