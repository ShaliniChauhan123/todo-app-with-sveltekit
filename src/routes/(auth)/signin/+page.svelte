<script lang="ts">
	import { goto } from '$app/navigation';
	import { signIn } from '../../../helper/signIn';

	let password = '1234567';
	let email = 'shalinic@gluelabs.com';
	let loadingState = 'initial';
	async function submit() {
		loadingState = 'progressing';
		console.log('STATE', loadingState);
		const response = await fetch('https://task-manager-aryankush25.herokuapp.com/users/login', {
			method: 'POST',
			body: JSON.stringify({
				email: email,
				password: password
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		loadingState = 'success';
		const data = await response.json();
		console.log('SIGNIN DATA', data);

		if (data.token) {
			document.cookie = `token= ${data.token}`;
			goto('/');
		}
	}
</script>

<h1>Please Signin by entering your details-></h1>

<form on:submit|preventDefault={submit}>
	<div>
		<label for="email">Email</label>
		<input id="email" name="email" type="text" bind:value={email} required />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" bind:value={password} required />
	</div>

	<button
		type="submit"
		class="bg-blue-500 w-full shadow-sm rounded hover:bg-blue-600 text-white py-2 px-4"
		>{loadingState === 'progressing'
			? 'Signing In...'
			: loadingState === 'success'
			? 'Please wait...'
			: 'Signin'}</button
	>
	<a href="/signup">SIGN UP</a>
</form>
