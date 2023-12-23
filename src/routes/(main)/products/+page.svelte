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
		preloads: [],
		customCols: [
			{
				title: 'General',
				list: ['id', 'name']
			},
			{
				title: 'Price',
				list: [
					'retail_price',

					'point_value',
					{ label: 'desc', editor2: true },
					{ label: 'img_url', upload: true }
				]
			}
		],
		buttons: [
			{ name: 'Countries', onclickFn: viewCountries },
			{ name: 'Stocks', onclickFn: viewStocks }
		],

		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Name', data: 'name' },
			{ label: 'Retail Price (RP)', data: 'retail_price' },
			{ label: 'Point Value', data: 'point_value' }
			// { label: 'Country', data: 'name', through: ['country'] }
		]
	}}
/>
