<script>
	import { PHX_ENDPOINT } from '$lib/constants';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
	import { buildQueryString } from '$lib/index.js';
	/** @type {import('./$types').PageData} */
	export let data;
	let items = [{ key: 'id', value: 'int' }],
		module = '', title = '';
	var url = 'http://' + PHX_ENDPOINT;
	function updateApiData(newData) {
		items = [...items, newData]; // Append new data to the existing array
	}
	async function fetchData() {
		title = module
		items = [];
		const apiData = {
			scope: 'gen_inputs',
			module: module
		};
		const queryString = buildQueryString(apiData);
		const response = await fetch(url + '/api/webhook' + `?${queryString}`, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			let dataList = await response.json();
			let keys = Object.keys(dataList);
			keys.sort((a,b) => {
				return a.localeCompare(b)
			})

			keys.forEach((v, i) => {
				updateApiData({ key: v, value: dataList[v] });
			});
			console.log(items);
			module = ''
		} else {
			title = 'Not available'
			console.error('API request failed');
		}
		
	}
</script>

<div class="grid grid-cols-12">
	<div class="col-span-8 mx-4">
		
		<h1 class="my-4 dark:text-white">Model: {title}</h1>
		<Table>
			<TableHead>
				<TableHeadCell>Key</TableHeadCell>

				<TableHeadCell>Value</TableHeadCell>
			</TableHead>
			<TableBody class="divide-y">
				{#if items.length > 0}
					{#each items as item}
						<TableBodyRow>
							<TableBodyCell>{item.key}</TableBodyCell>

							<TableBodyCell>{item.value}</TableBodyCell>
						</TableBodyRow>
					{/each}
				{/if}
			</TableBody>
		</Table>
	</div>
	<div class="col-span-4 mx-4">
		<Card class="w-full max-w-md ">
			<form
				class="flex flex-col space-y-6"
				action="javascript:void(0);"
				on:submit|preventDefault={fetchData}
			>
				<h3 class="text-xl font-medium text-gray-900 dark:text-white">Model Columns Info</h3>
				<Label class="space-y-2">
					<span>Url</span>
					<Input type="text" name="url" placeholder="User" bind:value={url} required />
				</Label>
				<Label class="space-y-2">
					<span>Model</span>
					<Input type="text" name="module" placeholder="User" bind:value={module} required />
				</Label>
	
				<Button type="submit" class="w-full">Check</Button>
			</form>
		</Card>
	</div>

</div>
