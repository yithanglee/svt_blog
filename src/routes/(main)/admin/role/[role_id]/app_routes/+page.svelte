<script>
	import Datatable from '$lib/components/Datatable.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	let inputs = data.inputs;
</script>

<Datatable
	data={{
		appendQueries: { role_id: data.role_id },
		inputs: inputs,
		search_queries: null,
		model: 'RoleAppRoute',
		preloads: ['role', 'app_route'],
		customCols: [
			{
				title: 'General',
				list: [
					'id',
					{
						label: 'AppRoute',
						selection: 'AppRoute',
						multiSelection: true,
						module: 'AppRoute',
						parentId: data.role_id,
						parent_module: 'RoleAppRoute'
					}
				]
			}
		],
		columns: [
			{ label: 'ID', data: 'id' },
			{ label: 'Role', data: 'name', through: ['role'] },
			{ label: 'Scope', data: 'name', through: ['app_route'] },
			{ label: 'URL', data: 'route', through: ['app_route'] }
		]
	}}
/>
