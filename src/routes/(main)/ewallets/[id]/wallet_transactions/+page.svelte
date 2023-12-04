<script>
	import Datatable from '$lib/components/Datatable.svelte';
	import { onMount } from 'svelte';


	/** @type {import('./$types').PageData} */
	export let data;
	onMount(async () => {});

	let module = data.module,
		inputs = data.inputs;
	import { buildQueryString, postData } from '$lib/index.js';
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;

</script>

<Datatable
	data={{
		appendQueries: { ewallet_id: data.id },
		inputs: inputs,
		join_statements: JSON.stringify([
			// { corporate_account: 'corporate_account' },
			{ user: 'user' }
		]),
		search_queries: ['b.username'],
		model: module,
		preloads: ['user'],
		customCols: [{
				title: 'General',
				list: ['id', 'before', 'after', 'amount']
			}],
		buttons: [],
		columns: [
			{ label: 'ID', data: 'id' },

			{ label: 'User', data: 'username', through: ['user'] },
			{ label: 'Before', data: 'before' },
			{ label: 'Amount', data: 'amount' },
			{ label: 'After', data: 'after' },
			{ label: 'Remarks', data: 'remarks' }
		]
	}}
/>
