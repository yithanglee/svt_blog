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
					'class_list',
					'content1_class_list',
					'plain_content1',
					{ label: 'content1', editor2: true }
				]
			},
			{
				title: '2nd Column',
				list: ['content2_class_list', 'plain_content2', { label: 'content2', editor2: true }]
			},
			{
				title: '3rd Column',
				list: ['content3_class_list', 'plain_content3', { label: 'content3', editor2: true }]
			},
			{
				title: '4th Column',
				list: ['content4_class_list', 'plain_content4', { label: 'content4', editor2: true }]
			}
		],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Title', data: 'name' }
		]
	}}
/>

<style>
	.cl-content div {
		border: dashed 1px gray;
		padding: 10px;
		margin: 10px;
	}
</style>
