<script>
	import { goto } from '$app/navigation';
	import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
	import { session } from '$lib/stores/session';
    import Cookies from 'js-cookie';
	let username = '';
	let password = '';

	async function handleLogin() {
	    const user = { id: 1, username: 'example_user' };
		await new Promise((resolve) => setTimeout(resolve, 1000));
		// Set user session/token/cookie
		localStorage.setItem('userToken', 'exampleToken');
        Cookies.set('user', JSON.stringify(user));
		// Redirect to dashboard

		session.login(user)
		goto('/dashboard');
	}
</script>

<main>
	<form on:submit|preventDefault={handleLogin} class="flex justify-center">

		<Card class="w-full max-w-md">
			<div class="flex flex-col space-y-6" >
				<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
				<Label class="space-y-2">
					<span>Email</span>
					<Input type="email" value="d@1.com" name="email" placeholder="name@company.com" required />
				</Label>
				<Label class="space-y-2">
					<span>Your password</span>
					<Input type="password" value="123"  name="password" placeholder="•••••" required />
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
