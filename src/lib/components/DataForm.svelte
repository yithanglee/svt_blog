<script>
	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
	import { isModalOpen } from '../stores/modal';
	import { onMount, onDestroy, afterUpdate, beforeUpdate } from 'svelte';
	import FormInput from '$lib/components/FormInput.svelte';
	import { PHX_ENDPOINT } from '$lib/constants';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import { postData } from '$lib/index.js';

	export let data, inputs, customCols, module, postFn;

	console.log('customCols');
	console.log(customCols);
	let formModal = false,
		keys = [];

	let unsub = isModalOpen.subscribe((v) => {
		formModal = v;
	});
	function refreshData() {
		postFn()
	}

	async function tryPost() {
		let map = {},
			primary_key;

		primary_key = data['id'].toString();
		delete data.password;
		map[module] = { ...data, id: primary_key };

		console.log(map);
		await postData(map, { endpoint: 'http://'+ PHX_ENDPOINT +'/api/' + module });
		refreshData();
		formModal = false
		isModalOpen.set(false);
	}

	function filteredInput(key) {
		let res = inputs.filter((v, i) => {
			return v.key == key;
		});

		if (res) {
			return res[0];
		} else {
			return null;
		}
	}

	onDestroy(() => {
		unsub();
	});

	beforeUpdate(() => {
		console.log('before update');
		console.log(data);
		// need another customCols to define the keys
		keys = Object.keys(data).sort((a, b) => {
			return a.localeCompare(b);
		});

		console.log(inputs);
	});

	afterUpdate(() => {
		if (formModal == false) {
			isModalOpen.set(false);
		}
	});
</script>

<Button
	on:click={() => {
		formModal = true;
		data = { id: 0 };
	}}
	class="">New</Button
>

<Modal bind:open={formModal} size="lg" autoclose={false} class="w-full" outsideclose>
	<form class="flex flex-col space-y-6" action="#">
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">{module} Form</h3>

		{#if customCols.length > 0}
			<Tabs style="underline">
				{#each customCols as customCol}
					{#if customCols[0].title == customCol.title}
						<TabItem open>
							<div slot="title" class="flex items-center gap-2">
								<Icon name="grid-solid" size="sm" />
								{customCol.title}
							</div>
							<div class="flex flex-wrap w-full gap-2">
								{#each customCol.list as key}
									<FormInput {key} {data} input={filteredInput(key)} />
								{/each}
							</div>
						</TabItem>
					{:else}
						<TabItem>
							<div slot="title" class="flex items-center gap-2">
								<Icon name="grid-solid" size="sm" />
								{customCol.title}
							</div>
							<div class="flex flex-wrap w-full gap-2">
								{#each customCol.list as key}
									<FormInput {key} {data} input={filteredInput(key)} />
								{/each}
							</div>
						</TabItem>
					{/if}
				{/each}
			</Tabs>
		{:else}
			<div class="flex flex-wrap w-full gap-2">
				<!-- this keys need to be customized -->
				{#each keys as key}
					<FormInput {key} {data} input={filteredInput(key)} />
				{/each}
			</div>
		{/if}
	</form>
	<svelte:fragment slot="footer">
		<Button on:click={() => tryPost()}>Submit</Button>
	</svelte:fragment>
</Modal>
