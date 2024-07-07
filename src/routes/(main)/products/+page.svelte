<script>
	import Datatable from '$lib/components/Datatable.svelte';
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageData} */
	export let data;

	import { goto } from '$app/navigation';
	import { buildQueryString, postData } from '$lib/index.js';
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
	function viewStocks(data) {
		goto('/products/' + data.id + '/stocks');
	}
	function viewCountries(data) {
		goto('/products/' + data.id + '/countries');
	}

	onMount(async () => {});

	let module = data.module,
		inputs = data.inputs;
</script>

<Datatable
	data={{
		canDelete: true,
		showNew: true,
		inputs: inputs,
		search_queries: null,
		model: module,
		preloads: ['brand', 'category'],
		customCols: [
			{
				title: 'General',
				list: [
					'id',
					'name',
					{ label: 'short_desc', editor2: true },
					{ label: 'desc', editor2: true },
					{
						label: 'brand_id',
						selection: 'Brand',
						customCols: null,
						search_queries: ['a.name'],
						newData: 'name',
						title_key: 'name'
					},
					{
						label: 'category_id',
						selection: 'Category',
						customCols: null,
						search_queries: ['a.name'],
						newData: 'name',
						title_key: 'name'
					},

					{ label: 'img_url', upload: true },
					{ label: 'img_url2', upload: true },
					{ label: 'img_url3', upload: true },
					{ label: 'img_url4', upload: true },
					{ label: 'img_url5', upload: true },
					{ label: 'img_url6', upload: true }
				]
			}
		],
		buttons: [],

		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Name', data: 'name' },
			{ label: 'Images', data: 'img_url', showImg: true },
			{ label: '1', data: 'img_url2', showImg: true },
			{ label: '2', data: 'img_url3', showImg: true },
			{ label: '3', data: 'img_url4', showImg: true },
			{ label: '4', data: 'img_url5', showImg: true },
			{ label: '5', data: 'img_url6', showImg: true },
			{ label: 'Brand', data: 'name', through: ['brand'] },
			{ label: 'Category', data: 'name', through: ['category'] }
		]
	}}
/>
