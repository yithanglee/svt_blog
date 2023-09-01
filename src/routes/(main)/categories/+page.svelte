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
		search_queries: ['a.name'],
		model: module,
		// preloads: ['stored_medias'],

		customCols: [
			{
				title: 'General',
				list: [
					'id',
					'name',
					'alias',
					'desc',

					{ label: 'content', binary: true }
					// { label: 'img_url', upload: true }
				]
			}
		],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Name', data: 'name' }
		]
	}}
/>
