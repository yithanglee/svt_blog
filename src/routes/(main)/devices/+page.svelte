<script>
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	import { goto } from '$app/navigation';
	import Datatable from '$lib/components/Datatable.svelte';
	import SimpleTable from '$lib/components/SimpleTable.svelte';
	import { buildQueryString, postData } from '$lib/index.js';
	/** @type {import('./$types').PageData} */
	export let data;
	import { onMount } from 'svelte';
	let inputs = data.inputs;
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;

	function controlDevice(data, checkPage, confirmModal) {
		goto('/devices/' + data.id);
	}

	function regenQr(data, checkPage, confirmModal) {
		console.log(data);
		console.log('transfer approved!');

		confirmModal(
			true,
			`

        <span class="">Are you sure to regenerate QR?</span>`,
			() => {
				postData(
					{ scope: 'gen_static_qr', id: data.id, name: data.name },
					{
						endpoint: url + '/svt_api/webhook',
						successCallback: (e) => {
							console.log(e);
							checkPage();
						}
					}
				);
			}
		);
	}

	
	onMount(() => {

		console.log(data.columns)
	});
</script>

<Datatable
	data={{
		appendQueries: { organization_id: data.organization_id },

		showNew: true,
		canDelete: true,
		inputs: inputs,
		search_queries: ['a.name'],
		model: 'Device',
		preloads: ['outlet', 'executor_board', 'organization'],
		buttons: [
			{ name: 'Control', onclickFn: controlDevice },
			{ name: 'Regen QR', onclickFn: regenQr }
		],
		customCols: [
			{
				title: 'General',
				list: [
					'id',
					'name',
					'short_name',
					'default_io_pin',
					'format',
					'cloridge_device_uid',
					{ label: 'organization_id', hidden: true, value: data.organization_id },

					{
						label: 'executor_board_id',
						selection: 'Device',
						customCols: null,
						search_queries: ['a.name'],
						newData: 'name',
						title_key: 'name'
					},
					{
						label: 'outlet_id',
						selection: 'Outlet',
						customCols: null,
						search_queries: ['a.name|a.organization_id=' + data.organization_id],
						newData: 'name',
						title_key: 'name'
					},

					{
						label: 'organization_id',
						selection: 'Organization',
						customCols: null,
						search_queries: ['a.name'],
						newData: 'name',
						title_key: 'name'
					},
					{ label: 'is_cloridge', boolean: true },
					{ label: 'record_wifi_time', boolean: true },
					{ label: 'skip_first', boolean: true },
					{ label: 'is_active', boolean: true }
				]
			}
		],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Name', data: 'name' },
			{ label: 'Timestamp', data: 'inserted_at', formatDateTime: true, offset: 8 },

			{
				label: 'Status',
				data: 'is_active',
				isBadge: true,
				color: [
					{
						key: 'false',
						value: 'pink'
					},

					{
						key: 'true',
						value: 'green'
					}
				]
			},
			// { label: 'User', data: 'username', through: ['user'] },
			{ label: 'Outlet', data: 'name', through: ['outlet'] }
		]
	}}
/>

<div class="mt-4">
	<SimpleTable
		title="Monthly Outlet Transactions (RM)"
		description={''}
		data={{
			apiData: { id: data.id, organization_id: data.organization_id, year_month: data.yearMonth },
			buttons: [],
			scope: 'current_month_outlet_trx_only_days',
			columns: data.columns
		}}
	/>
</div>
<div class="mt-4">
	<SimpleTable
		title="Monthly Outlet Transactions (RM) Prev 1 Month"
		description={''}
		data={{
			apiData: { id: data.id, organization_id: data.organization_id, year_month: data.prevYearMonth },
			buttons: [],
			scope: 'current_month_outlet_trx_only_days',
			columns: data.columns
		}}
	/>
</div>
<div class="mt-4">
	<SimpleTable
		title="Monthly Outlet Transactions (RM) Prev 2 Month"
		description={''}
		data={{
			apiData: { id: data.id, organization_id: data.organization_id, year_month: data.prevYear2Month },
			buttons: [],
			scope: 'current_month_outlet_trx_only_days',
			columns: data.columns
		}}
	/>
</div>
