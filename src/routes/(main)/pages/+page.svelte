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
					'route_name',
					'subtitle',
					{ label: 'content', editor2: true },
					{ label: 'img_url', upload: true }
				]
			}
		],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Title', data: 'name' },
			{ label: 'Route', data: 'route_name' }
		]
	}}
/>

<style>
	.cl-content div {
		border: dashed 0.5px gray;
		padding: 1px 4px;
	}
	.cl-content h2,
	.cl-content h3 {
		border: solid 1px blue;
		font-size: larger;
		font-weight: 600;
	}
</style>
