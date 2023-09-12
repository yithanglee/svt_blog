<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { Socket } from 'phoenix';
	import { ngrok_get } from '$lib/index.js';
	import { onDestroy, onMount } from 'svelte';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch,
		Button,
		ButtonGroup
	} from 'flowbite-svelte';
	let searchTerm = '',
		channel,
		isJoined = false;
	import { PHX_HTTP_PROTOCOL, PHX_WS_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';

	console.log('curent list');
	console.log(data.device_list);

	let list = Object.keys(data.device_list);

	let items = [];
	list.forEach((v, i) => {
		items.push(data.device_list[v]);
	});

	$: filteredItems = items.filter(
		(item) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
	let url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
	let Device = {
		startPwm: (uuid) => {
			ngrok_get(url, {
				receiver: uuid,
				url: 'http://localhost:5120/api?scope=pwm_start',
				params: ''
			});
		},
		stopPwm: (uuid) => {
			ngrok_get(url, {
				receiver: uuid,
				url: 'http://localhost:5120/api?scope=pwm_stop',
				params: ''
			});
		},
		initiateDevice: async (uuid) => {
			console.log('initiating uuid');
			if (channel.state == 'joined') {
				channel.push('ask_initiate', { uuid: uuid });
			}
		}
	};

	onMount(async () => {
		console.log('mounting');
		// how to know if its a production env?
		const socket = new Socket(PHX_WS_PROTOCOL + PHX_ENDPOINT + '/socket');
		socket.connect();
		var topic = 'user:' + 'lobby';
		// Join the topic
		channel = socket.channel(topic, { name: 'svt_admin' });

		channel
			.join()
			.receive('ok', (data) => {
				isJoined = true;
				console.log('Joined topic', topic);
			})
			.receive('error', (resp) => {
				console.log('Unable to join topic', topic);
			});

		channel.on('plate_results', (payload) => {
			console.log(payload);
			// var results = JSON.parse(payload.body);
			// updateChannelData(payload);
			// console.log(results)
		});
	});

	onDestroy(() => {
		if (channel) {
			channel
				.leave()
				.receive('ok', (resp) => {
					console.log('Left the channel', resp);
				})
				.receive('error', (resp) => {
					console.log('Error leaving the channel', resp);
				});
		}
	});
</script>

<h2 class="dark:text-white">IOTs</h2>

<TableSearch
	placeholder="Search by device name"
	class="hidden md:block "
	hoverable={true}
	bind:inputValue={searchTerm}
>
	<TableHead>
		<TableHeadCell>Name</TableHeadCell>
		<TableHeadCell>UUID</TableHeadCell>
		<TableHeadCell>Last Updated</TableHeadCell>
		<TableBodyCell>Actions</TableBodyCell>
	</TableHead>
	<TableBody class="divide-y">
		{#each filteredItems as item}
			<TableBodyRow>
				<TableBodyCell>
					{item.name}
				</TableBodyCell>
				<TableBodyCell>{item.uuid}</TableBodyCell>
				<TableBodyCell>{item.last_updated}</TableBodyCell>
				<TableBodyCell>
					<ButtonGroup>
						<Button color="primary" on:click={Device.initiateDevice(item.uuid)}>Initiate</Button>

						<Button color="blue" on:click={Device.startPwm(item.uuid)}>Start</Button>

						<Button color="purple" on:click={Device.stopPwm(item.uuid)}>Stop</Button>
					</ButtonGroup>
				</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</TableSearch>

<section class="block md:hidden">
	{#each filteredItems as item}
		<div class="rounded-lg border border-gray-600 border-1 flex flex-col gap-4 dark:text-white m-4 p-4">
			<di>
				{item.name}
			</di>
			<small>{item.uuid}</small>
			<p>{item.last_updated}</p>
			<ButtonGroup>
				<Button color="primary" on:click={Device.initiateDevice(item.uuid)}>Initiate</Button>

				<Button color="blue" on:click={Device.startPwm(item.uuid)}>Start</Button>

				<Button color="purple" on:click={Device.stopPwm(item.uuid)}>Stop</Button>
			</ButtonGroup>
		</div>
	{/each}
</section>
