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
	function approveTransfer(data, checkPage) {
		console.log(data);
		console.log('transfer approved!');
		postData(
			{ scope: 'approve_topup', id: data.id },
			{
				endpoint: url + '/svt_api/webhook',
				successCallback: () => {
					checkPage();
				}
			}
		);
	}
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

					{ label: 'img_url', upload: true },

					'user_id',
					'amount',
					'remarks',

					// { label: 'is_approved', boolean: true }
				]
			}
		],
		buttons: [{ name: 'Approve', onclickFn: approveTransfer }],
		columns: [
			{ label: 'ID', data: 'id' },
			{
				label: 'Approved?',
				data: 'is_approved',
				isBadge: true,
				color: [
					{
						key: false,
						value: 'yellow'
					},

					{
						key: true,
						value: 'green'
					}
				]
			},

			{ label: 'From', data: 'username', through: ['user'] },
			{ label: 'Amount', data: 'amount' },
			{ label: 'Remarks', data: 'remarks' }
		]
	}}
/>
