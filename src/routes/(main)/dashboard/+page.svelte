<script>
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	import Cookies from 'js-cookie';
	import { isToastOpen } from '$lib/stores/toast';
	import { onMount } from 'svelte';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
	import { buildQueryString, postData } from '$lib/index.js';
	/** @type {import('./$types').PageData} */
	import Chart from 'chart.js/auto';
	export let data;
	let chart;

	let chartData = data.chartData;

	let items = [{ key: 'id', value: 'int' }],
		module = '',
		title = '';
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
	function updateApiData(newData) {
		items = [...items, newData]; // Append new data to the existing array
	}

	async function postDat() {
		Cookies.remove('token');
		var res = await postData(
			{
				scope: 'sign_in',
				username: 'damien'
			},
			{
				endpoint: url + '/svt_api/webhook'
			}
		);
		console.log(res);
		Cookies.set('token', JSON.stringify(res.res));
	}
	async function fetchData() {
		title = module;
		items = [];
		const apiData = {
			scope: 'gen_inputs',
			module: module
		};
		const queryString = buildQueryString(apiData);
		const response = await fetch(url + '/svt_api/webhook' + `?${queryString}`, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			let dataList = await response.json();
			let keys = Object.keys(dataList);
			keys.sort((a, b) => {
				return a.localeCompare(b);
			});

			keys.forEach((v, i) => {
				updateApiData({ key: v, value: dataList[v] });
			});
			console.log(items);
			module = '';
		} else {
			title = 'Not available';
			console.error('API request failed');
		}
	}
	var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
	var values = [];
	onMount(() => {
		// const labels = Object.keys(chartData[0]).filter((key) => key !== 'year');
		// const values = labels.map((label) => chartData[0][label]);
		// console.log(labels);
		// console.log(values);

		months.forEach((v, i) => {
			console.log(chartData[0][v]);
			var vsales = 0;

			if (chartData[0][v] != null) {
				vsales = chartData[0][v];
			}

			// values = [vsales,  ...values];
			values.push(vsales);
		});

		console.log(values);

		const ctx = document.getElementById('myChart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: [
					'jan',
					'feb',
					'mar',
					'apr',
					'may',
					'jun',
					'jul',
					'aug',
					'sep',
					'oct',
					'nov',
					'dec'
				],
				datasets: [
					{
						label: 'Monthly Values',
						data: values,
						backgroundColor: 'rgba(75, 192, 192, 0.2)',
						borderColor: 'rgba(75, 192, 192, 1)',
						borderWidth: 1
					}
				]
			}
		});
	});
</script>

<div class="flex sm:grid grid-cols-12 flex-col-reverse">
	<div class="col-span-8 mx-4">
		<canvas id="myChart" />
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
	<div class="col-span-12 sm:col-span-4 mx-4">
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
				<Button color="blue" class="hidden" on:click={postDat}>Test</Button>
				<Button
					color="blue"
					on:click={() => {
						isToastOpen.notify('notify dashboard');
					}}>Notify</Button
				>
			</form>
		</Card>
	</div>
</div>
