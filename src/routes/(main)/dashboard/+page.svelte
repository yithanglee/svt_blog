<script>
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	import Cookies from 'js-cookie';
	import { session } from '$lib/stores/session';
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
	import DataForm from '$lib/components/DataForm.svelte';

	let chartData = data.chartData;

	let items = [{ key: 'id', value: 'int' }],
		module = '',
		title = '';
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;

	onMount(() => {});
	function refreshPage() {}
	let staff;
	session.subscribe((value) => {
		console.log('subscribed session!');
		console.log(value);
		if (value && value.loggedIn) {
			staff = value.user;
		}
	});

	let showNew = false,
		customCols = [
			{
				title: 'General',
				list: ['id', { label: 'username', expose: true }, { label: 'password', expose: true }]
			}
		],
		selectedData = staff,
		inputs = data.inputs,
		cac_url = url,
		model = 'Staff';

	let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
	let newTodo = '';

	$: {
		if (todos) {
			localStorage.setItem('todos', JSON.stringify(todos));
		}
	}

	function addTodo() {
		if (newTodo.trim() === '') return;
		todos = [...todos, { id: Date.now(), text: newTodo, done: false }]; // Updated to trigger reactivity
		newTodo = ''; // Reset the input field
	}

	function removeTodo(todoId) {
		todos = todos.filter((todo) => todo.id !== todoId); // Updated to trigger reactivity
	}

	function toggleDone(todoId) {
		todos = todos.map((todo) => (todo.id === todoId ? { ...todo, done: !todo.done } : todo)); // Updated to trigger reactivity
	}
</script>

<div class="flex sm:grid grid-cols-12 flex-col-reverse">
	<div class="col-span-8 mx-4">
		<canvas id="myChart" />

		<h1>Todo List</h1>
		<input type="text" bind:value={newTodo} placeholder="Add new todo" />
		<button on:click={addTodo}>Add</button>

		<ul>
			{#each todos as todo}
				<li class:done={todo.done}>
					<input type="checkbox" checked={todo.done} on:change={() => toggleDone(todo.id)} />
					{todo.text}
					<button on:click={() => removeTodo(todo.id)}>Remove</button>
				</li>
			{/each}
		</ul>
	</div>
	<div class="col-span-4 p-4 mx-4">
		<DataForm
			style={'show'}
			{showNew}
			{customCols}
			data={selectedData}
			{inputs}
			url={cac_url}
			module={model}
			postFn={refreshPage}
		/>
	</div>
</div>
