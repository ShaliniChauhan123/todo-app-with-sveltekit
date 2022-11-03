<script context="module" lang="ts">
	import { goto } from '$app/navigation';

	let password: string;
	let email: string;
	async function submit() {
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
		const data = await response.json();
		console.log('SIGNIN DATA', data);
		// if(response.ok){

		// }

		if (data.token) {
			document.cookie = `token= ${data.token}`;
			goto('/');
		}
	}
</script>

<h1>Please Signin</h1>

<form on:submit|preventDefault={submit}>
	<div>
		<label for="email">Email</label>
		<input id="email" name="email" type="text" bind:value={email} required />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" bind:value={password} required />
	</div>

	<button type="submit">Signin</button>
	<a href="/signup">SIGN UP</a>
</form>
