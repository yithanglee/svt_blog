<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
	import { session } from '$lib/stores/session';

	// import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	let loggedIn = false,
		spanClass = 'flex-1 ml-3 whitespace-nowrap';
	$: activeUrl = $page.url.pathname;
	import jsCookie from 'js-cookie';
	import { onDestroy, onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let menus = [
		{ path: '/plate', title: 'Car Plate', icon: 'camera-foto-solid' },
		{ path: '/camera', title: 'Camera', icon: 'camera-foto-solid' },
		{ path: '/users', title: 'Users', icon: null },
		{ path: '/customers', title: 'Customers', icon: null },
		{ path: '/customer_orders', title: 'Orders', icon: 'receipt-solid' }
	];

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

	onMount(() => {
		let cookieUser = jsCookie.get('user');

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
		<div class="col-span-12 sm:col-span-3">
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
							<SidebarItem label={menu.title} {spanClass} href={menu.path}>
								<svelte:fragment slot="icon">
									<Icon
										name={menu.icon == null ? 'users-solid' : menu.icon}
										class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									/>
								</svelte:fragment>
							</SidebarItem>
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
