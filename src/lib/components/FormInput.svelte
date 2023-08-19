<script>
	import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
	export let input, key;
	export let data;
	console.log(key);
	console.log(input);

	console.log(data);

	if (input == null) {
		input = { key: key.label, value: 'id' };
		console.log(input);
	}
</script>

{#if input != null}
	{#if key.expose != null}
    <div class="w-full sm:w-1/3 mx-4 my-2">
        <Label class="space-y-2">
            <span class="capitalize">{input.key.replace('_', ' ')}</span>
            <Input type="text" bind:value={data[input.key]} />
        </Label>
    </div>
	
	{:else if input.value == 'id'}
		<Input type="hidden" bind:value={data[input.key]} />
	{:else}
		<div class="w-full sm:w-1/3 mx-4 my-2">
			<Label class="space-y-2">
				<span class="capitalize">{input.key.replace('_', ' ')}</span>
				<Input type="text" bind:value={data[input.key]} />
			</Label>
		</div>
	{/if}
{/if}
