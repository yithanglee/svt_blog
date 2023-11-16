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
        join_statements: JSON.stringify([
			// { corporate_account: 'corporate_account' },
			{ user: 'user' }
		]),
		search_queries: ['b.username'],
		model: module,
		preloads: ['user'],
		customCols: [
			{
				title: 'General',
				list: [
					'id',
					
			
				]
			},
			
		],
		columns: [
			{ label: 'ID', data: 'id' },
     
            { label: 'User', data: 'username', through: ['user'] },
            { label: 'Type', data: 'wallet_type' },
            { label: 'Total', data: 'total' },
	

		]
	}}
/>
