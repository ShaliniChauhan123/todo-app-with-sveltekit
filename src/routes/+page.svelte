<script lang="ts">
	import TodoForm from '../components/TodoForm.svelte';
	import { addTodo, deleteTodo, getTodo, todos } from '../stores/todoStore';
	import { page } from '$app/stores';
	import type { ITodo } from 'src/types/todo';
	import { getCookie } from '../helper/cookie';
	$: console.log($page.data.tasks);

	async function getTasksFunction() {
		const response = await fetch('https://task-manager-aryankush25.herokuapp.com/tasks', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				authorization: `${getCookie('token')}`
			}
		});
		const tasks = await response.json();
		console.log('get', response);
		$todos = tasks;
		console.log('todos', todos);
	}
	$: getTasks = getTasksFunction();
</script>

<main>
	<TodoForm />
	{#each $todos as task}
		<section class="main w-1/2 m-auto border border-gray-400 p-8 rounded grid grid-col-1">
			<label>
				<input type="checkbox" />
				{task.description}
				<button on:click={() => deleteTodo(task._id)}>X</button>
			</label>
		</section>
	{/each}
</main>
