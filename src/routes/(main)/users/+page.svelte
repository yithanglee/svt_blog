<script>
	import { Card, Button, Label, Input, Checkbox, Select } from 'flowbite-svelte';

	let positions = [
		{ value: 'left', name: 'Left' },
		{ value: 'right', name: 'Right' }
	];
	import { postData } from '$lib/index.js';
	import Datatable from '$lib/components/Datatable.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	import { isTableReloaded } from '$lib/stores/reloadTable';
	let fullname,
		password,
		phone,
		email,
		sponsor,
		position,
		username,
		inputs = data.inputs;
	async function fetchData() {
		var form = document.getElementById('currentForm');
		var formData = new FormData(form);
		await postData(formData, {
			isFormData: true,
			endpoint: PHX_HTTP_PROTOCOL + PHX_ENDPOINT + '/svt_api/webhook?scope=admin_register_member',
			successCallback: () => {
				isToastOpen.notify('Member recorded!');
				isTableReloaded.activate();
			}
		});
	}
</script>

<div class="flex sm:grid grid-cols-12 flex-col-reverse">
	<div class="col-span-12 sm:col-span-9 mx-4 p-4">
		<Datatable
			data={{
				inputs: inputs,
				search_queries: null,
				model: 'User',
				preloads: ['rank'],
				customCols: [
					{
						title: 'General',
						list: [
							'id',
							'fullname',
							'rank_name',
							{
								label: 'rank_id',
								selection: 'Rank',
								customCols: null,
								search_queries: ['a.name'],
								newData: 'name',
								title_key: 'name'
							},
							{ label: 'is_stockist', boolean: true }
						]
					}
				],
				columns: [
					{ label: 'ID', data: 'id' },
					{
						label: 'Stockist?',
						data: 'is_stockist',
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
					{ label: 'Rank', data: 'rank_name' },
					{ label: 'Full', data: 'fullname' },
					{ label: 'Username', data: 'username' },
					{ label: 'Phone', data: 'phone' },
					{ label: 'Email', data: 'email' },
					{ label: 'Rank', data: 'name', through: ['rank'] }
				]
			}}
		/>
	</div>
	<div class="col-span-12 sm:col-span-3 mr-4 py-4">
		<Card class="w-full max-w-md ">
			<form
				id="currentForm"
				class="flex flex-col space-y-6"
				action="javascript:void(0);"
				on:submit|preventDefault={fetchData}
			>
				<h3 class="text-xl font-medium text-gray-900 dark:text-white">
					Register Member Without Products
				</h3>
				<Label class="space-y-2">
					<span>Sponsor</span>
					<Input type="text" name="user[sponsor]" placeholder="" bind:value={sponsor} />
				</Label>

				<Label class="space-y-2">
					<span>Username</span>
					<Input type="text" name="user[username]" placeholder="" bind:value={username} />
				</Label>
				<Label class="space-y-2">
					<span>IC Name</span>
					<Input type="text" name="user[fullname]" placeholder="" bind:value={fullname} />
				</Label>
				<Label class="space-y-2">
					<span>Position</span>
				
					<Select class="mt-2" 	name="user[placement][position]" items={positions} bind:value={position} />
				</Label>
				<Label class="space-y-2">
					<span>Password</span>
					<Input type="text" name="user[password]" placeholder="" bind:value={password} />
				</Label>
				<Label class="space-y-2">
					<span>Phone</span>
					<Input type="text" name="user[phone]" placeholder="" bind:value={phone} />
				</Label>
				<Label class="space-y-2">
					<span>Email</span>
					<Input type="text" name="user[email]" placeholder="" bind:value={email} />
				</Label>
				<Button type="submit" class="w-full">Create</Button>
			</form>
		</Card>
	</div>
</div>
