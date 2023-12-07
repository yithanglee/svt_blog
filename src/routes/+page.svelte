<script>
	import { goto } from '$app/navigation';
	import { postData } from '$lib/index.js';
	import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
	import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
	import { session } from '$lib/stores/session';
	import Cookies from 'js-cookie';
	let username = 'summer',
		email = '',
		password = 'abc123';
	async function handleLogin() {
		var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
		const map = { id: 0, username: username, password: password, scope: 'sign_in' };
		var res = await postData(map, {
			endpoint: url + '/svt_api/webhook'
		});
		console.log(res);
		if (res.status == 'ok') {
			// Set user session/token/cookie
		
			Cookies.set('_commerce_front_key', res.res);

			// Redirect to dashboard
			console.log('login user');
			session.login({
				username: username,
				token: JSON.stringify(res.res),
				role_app_routes: res.role_app_routes
			});

			goto('/dashboard');
		} else if (res.status == 'error') {
			session.logout();
			// loggedIn = 'false';
			jsCookie.remove('user');
			jsCookie.remove('_commerce_front_key');
			goto('/');
		}
	}
</script>

<main>
	<form on:submit|preventDefault={handleLogin} class="flex justify-center">
		<Card class="w-full max-w-md">
			<div class="flex flex-col space-y-6">
				<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
				<Label class="space-y-2">
					<span>Username</span>
					<Input
						type="text"
						bind:value={username}
						name="username"
						placeholder="administrator"
						required
					/>
				</Label>
				<Label class="space-y-2">
					<span>Email</span>
					<Input type="email" bind:value={email} name="email" placeholder="name@company.com" />
				</Label>
				<Label class="space-y-2">
					<span>Your password</span>
					<Input
						type="password"
						bind:value={password}
						name="password"
						placeholder="•••••"
						required
					/>
				</Label>
				<div class="flex items-start">
					<Checkbox>Remember me</Checkbox>
					<a
						href="/"
						class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500"
					>
						Lost password?
					</a>
				</div>
				<Button type="submit" class="w-full">Login to your account</Button>
				<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
					Not registered? <a
						href="/"
						class="text-primary-700 hover:underline dark:text-primary-500"
					>
						Create account
					</a>
				</div>
			</div>
		</Card>
	</form>
</main>
