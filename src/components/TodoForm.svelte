<script lang="ts">
	import { addTodo, deleteTodo, getTodo, todos } from '../stores/todoStore';
	// import {pageData} from './$ty';
	let todo = '';
	$: todosArray = $todos;
	let loadingState = 'initial';
	async function handleSubmit() {
		loadingState = 'progressing';
		await addTodo(todo);
		loadingState = 'success';
		todo = '';
	}
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
		>{loadingState === 'progressing' ? 'Adding...' : 'Add'}
	</button>
</form>

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
</style>
