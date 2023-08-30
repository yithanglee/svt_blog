<script>
	import {
		Dropdown,

		DropdownItem,
		DropdownDivider,
		Breadcrumb,
		BreadcrumbItem,
		GroupItem
	} from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	import { session } from '$lib/stores/session';
	import '../app.postcss';
	import { goto } from '$app/navigation';
	import { Alert, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { onDestroy, onMount } from 'svelte';
	import jsCookie from 'js-cookie';
	import { MENUS } from '$lib/constants';
	/** @type {import('./$types').LayoutData} */
	export let data;
	var nav_class = 'hidden',
		loggedIn = 'false';

	function logOut() {
		session.logout();
		loggedIn = 'false';
		jsCookie.remove('user');
		goto('/');
	}
	function appendClass(existing_class) {
		return 'cursor-pointer ' + existing_class
	}

	onMount(() => {
		session.subscribe((value) => {
			console.log(value);
			if (value && value.loggedIn) {
				nav_class = '';
			}
			if (value.loggedIn == false) {
				nav_class = 'hidden';
			}
		});
	});
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src="/images/2damienslab.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Svelte Admin</span
		>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi class={nav_class} href="/dashboard">Dashboard</NavLi>
		{#each MENUS as menu}
			{#if !menu.hidden}
				{#if menu.children}
					<NavLi class={appendClass(nav_class)} id={menu.title}
						>{menu.title}

					
					</NavLi>
					<Dropdown triggeredBy="#{menu.title}" class="w-44 z-20">
						{#each menu.children as child}
						<DropdownItem href="{child.path}">{child.title}</DropdownItem>
						{/each}
					</Dropdown>
				{:else}
					<NavLi class={nav_class} id={menu.title} href={menu.path}>{menu.title}</NavLi>
				{/if}
			{/if}
		{/each}

		<NavLi class={nav_class} on:click={logOut} href="javascript:void(0);">Logout</NavLi>
	
	</NavUl>
	<DarkMode />
</Navbar>

<div id="alert" class="p-8 hidden">
	<Alert>
		<span class="font-medium">Info alert!</span>
		Change a few things up and try submitting again.
	</Alert>
</div>
<section class="mx-4 p-4">
	<div class="my-4">
		<slot />
	</div>
</section>
