<script lang="ts">
	import { addTodo, deleteTodo, getTodo, todos } from '../stores/todoStore';
	let todo = '';
	$: todosArray = $todos;

	async function handleSubmit() {
		addTodo(todo);
		todo = '';
	}

	// async function getUsers() {
	// 	const res = await fetch('https://task-manager-aryankush25.herokuapp.com/tasks', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			description: todo,
	// 			completed: false
	// 		}),
	// 		headers: {
	// 			'content-type': 'application/json'
	// 		}
	// 	});
	// 	const users = await res.json();

	// 	if (res.ok) {
	// 		return users;
	// 	} else {
	// 		throw new Error(users);
	// 	}
	// }

	// $: allUsersPromise = getUsers();
</script>

<form class="form my-6" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col text-sm mb-2">
		<label for="todo" class="font-bold mb-2 text-gray-800 ">
			Please Save your Todos Here 👇:)
		</label>
		<input
			type="text"
			name="todo"
			bind:value={todo}
			placeholder="TO DO"
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
		/>
	</div>
	<button
		type="submit"
		class="bg-blue-500 w-full shadow-sm rounded hover:bg-blue-600 text-white py-2 px-4"
		>Submit
	</button>
	{console.log('todos', todosArray)}
</form>
<section class="main w-1/2 m-auto border border-gray-400 p-8 rounded grid grid-col-1">
	<!-- {#each todosArray as user}
		<div class="m-4 cursor-pointer">
			<div class="flex">
				<p class="my-auto font-semibold ml-2">{user.todo}</p>
			</div>
		</div>
	{/each} -->
	<div class="left">
		<h2>todo</h2>
		{#each todosArray.filter((t) => !t.completed) as todo (todo.id)}
			<label>
				<input type="checkbox" />
				{todo.todo}
				<button on:click={() => deleteTodo(todo)}>X</button>
			</label>
		{/each}
	</div>

	<div class="right">
		<h2>done</h2>
		{#each todosArray.filter((t) => t.completed) as todo (todo.id)}
			<label class="done">
				<input type="checkbox" />
				{todo.todo}
				<button on:click={() => deleteTodo(todo)}>X</button>
			</label>
		{/each}
	</div>
</section>
<button on:click={() => getTodo()}>GET</button>

<style>
	.main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1em;
		max-width: 36em;
		margin: 0 auto;
	}
	label {
		position: relative;
		line-height: 1.2;
		padding: 0.5em 2.5em 0.5em 2em;
		margin: 0 0 0.5em 0;
		border-radius: 2px;
		user-select: none;
		border: 1px solid hsl(240, 8%, 70%);
		background-color: hsl(240, 8%, 93%);
		color: #333;
	}

	input[type='checkbox'] {
		position: absolute;
		left: 0.5em;
		top: 0.6em;
		margin: 0;
	}

	/* .done {
		border: 1px solid hsl(240, 8%, 90%);
		background-color: hsl(240, 8%, 98%);
	} */

	/* button {
		position: absolute;
		top: 0;
		right: 0.2em;
		width: 2em;
		height: 100%;
		background: no-repeat 50% 50%
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
		background-size: 1.4em 1.4em;
		border: none;
		opacity: 0;
		transition: opacity 0.2s;
		text-indent: -9999px;
		cursor: pointer;
	} */

	/* label:hover button {
		opacity: 1;
	} */
</style>
