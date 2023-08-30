<script>
	import { Textarea, Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
	// import Editor from '@tinymce/tinymce-svelte';
	import Editor from 'cl-editor/src/Editor.svelte';

	import { afterUpdate, onMount } from 'svelte';
	export let input, key;
	export let data;
	console.log(key);
	console.log(input);

	console.log(data);

	let editor;
	if (input == null) {
		input = { key: key.label, value: 'id' };
		console.log(input);
	}
	onMount(() => {



	});

	afterUpdate(() => {
		
	})
</script>

{#if input != null}
	{#if key.expose != null}
		<div class="w-full sm:w-1/3 mx-4 my-2">
			<Label class="space-y-2">
				<span class="capitalize">{input.key.replace('_', ' ')}</span>
				<Input type="text" bind:value={data[input.key]} />
			</Label>
		</div>
	{:else if key.editor == true}
		<div class="w-full mx-4 my-2">
			<Label class="space-y-2">
				<span class="capitalize">{input.key.replace('_', ' ')}</span>
				<Input type="hidden" bind:value={data[input.key]} />
			</Label>

			<Editor html={data[input.key]} on:change={(evt) => (data[input.key] = evt.detail)} />
		</div>
	{:else if input.value == 'id'}
		<Input type="hidden" bind:value={data[input.key]} />
	{:else if input.value == 'binary'}
		<div class="w-full mx-4 my-2">
			<Label class="mb-2 capitalize">{input.key.replace('_', ' ')}</Label>
			<Textarea placeholder="Content" class="editable" rows="4" bind:value={data[input.key]} />
		</div>
	{:else}
		<div class="w-full sm:w-1/3 mx-4 my-2">
			<Label class="space-y-2">
				<span class="capitalize">{input.key.replace('_', ' ')}</span>
				<Input type="text" bind:value={data[input.key]} />
			</Label>
		</div>
	{/if}
{/if}
