<script lang="ts">
	let name: string;
	let password: string;
	let email: string;
	async function submit() {
		const response = await fetch('https://task-manager-aryankush25.herokuapp.com/users', {
			method: 'POST',
			body: JSON.stringify({
				name: name,
				email: email,
				password: password
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		const data = await response.json();
		console.log(data);
		if (data.token) {
			document.cookie = `token= ${data.token}`;
		}
	}
</script>

<h1>Please Register</h1>

<form on:submit|preventDefault={submit}>
	<!-- {#await response}
	waiting....
	{:then response} -->
	<div>
		<label for="name">Username</label>
		<input id="name" name="name" type="text" bind:value={name} required />
	</div>
	<div>
		<label for="email">Email</label>
		<input id="email" name="email" type="text" bind:value={email} required />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" bind:value={password} required />
	</div>

	<button type="submit">Register</button>
	<a href="/signin">SIGN IN</a>
	<!-- {:catch error}
	error
	{/await} -->
</form>
