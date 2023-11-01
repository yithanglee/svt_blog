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
			{ to_user: 'to_user' }
		]),
		search_queries: ['b.username|b.fullname'],
		model: module,
		preloads: ['to_user', 'from_user'],
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
            { label: 'From', data: 'username', through: ['from_user'] },
            { label: 'User', data: 'username', through: ['to_user'] },
	
			{ label: 'position', data: 'position' },
			{ label: 'before', data: 'before' },
			{ label: 'after', data: 'after' },
			{ label: 'amount', data: 'amount' },
		]
	}}
/>
