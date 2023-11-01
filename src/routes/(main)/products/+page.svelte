<script>
	import Datatable from '$lib/components/Datatable.svelte';
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageData} */
	export let data;
    onMount(async () => {
    
    
    })


	let module = data.module,
		inputs = data.inputs;
</script>

<Datatable
	data={{
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
					'desc',
			
				]
			},
			{
				title: 'Price',
				list: [
                    'retail_price',
             
                    'point_value',
					{ label: 'desc', binary: true },
					{ label: 'img_url', upload: true }
				]
			}
		],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Name', data: 'name' },
			{ label: 'Retail Price (USD)', data: 'retail_price' },
			{ label: 'Point Value', data: 'point_value' }
		]
	}}
/>
