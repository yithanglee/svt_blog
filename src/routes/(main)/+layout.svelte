<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
	import { session } from '$lib/stores/session';
	import { MENUS } from '$lib/constants';
	// import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import {
		SidebarDropdownWrapper,
		SidebarDropdownItem,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	let loggedIn = false,
		spanClass = 'flex-1 ml-3 whitespace-nowrap';
	$: activeUrl = $page.url.pathname;
	import jsCookie from 'js-cookie';
	import { onDestroy, onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let menus = MENUS;

	function login(user) {
		session.login(user);
	}
	function logout() {
		session.logout();
		jsCookie.remove('user');
		setTimeout(() => {
			goto('/');
		}, 200);
	}

	function relogin() {
		goto('/');
	}

	let user = { username: 'Guest' };

	onMount(async () => {
		let cookieUser = jsCookie.get('user');
		console.log(cookieUser);
		if (cookieUser) {
			let cUser = JSON.parse(cookieUser);
			user = cUser;
			loggedIn = true;
			user != null ? login(cUser) : relogin();
		} else {
			relogin();
		}
	});
	onDestroy(() => {});
</script>

<div class="mx-auto flex flex-wrap justify-between items-center container">
	<div class="w-full grid grid-cols-12">
		<div class="col-span-12 sm:col-span-3 hidden sm:grid">
			<Sidebar>
				<SidebarWrapper>
					<SidebarGroup>
						<SidebarItem label="Good day, {user.username}">
							<svelte:fragment slot="icon">
								<Icon
									name="user-solid"
									class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								/>
							</svelte:fragment>
						</SidebarItem>
						<SidebarItem label="Dashboard" href="/dashboard">
							<svelte:fragment slot="icon">
								<Icon
									name="chart-pie-solid"
									class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								/>
							</svelte:fragment>
						</SidebarItem>

						{#each menus as menu}
							{#if !menu.hidden}
								{#if menu.children}
									<SidebarDropdownWrapper label={menu.title}>
										<svelte:fragment slot="icon">
											<Icon
												name="clipboard-solid"
												class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
											/>
										</svelte:fragment>
										{#each menu.children as child}
											<SidebarDropdownItem label={child.title} href={child.path} />
												
										
										{/each}
									</SidebarDropdownWrapper>
								{:else}
									<SidebarItem label={menu.title} {spanClass} href={menu.path}>
										<svelte:fragment slot="icon">
											<Icon
												name={menu.icon == null ? 'users-solid' : menu.icon}
												class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
											/>
										</svelte:fragment>
									</SidebarItem>
								{/if}
							{/if}
						{/each}

						<SidebarItem label={loggedIn ? 'Sign Out' : 'Sign In'} on:click={logout} href="#">
							<svelte:fragment slot="icon">
								<Icon
									name="arrow-right-to-bracket-solid"
									class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								/>
							</svelte:fragment>
						</SidebarItem>
					</SidebarGroup>
				</SidebarWrapper>
			</Sidebar>
		</div>
		<div class="col-span-12 sm:col-span-8 py-4 sm:py-0"><slot /></div>
	</div>
</div>
