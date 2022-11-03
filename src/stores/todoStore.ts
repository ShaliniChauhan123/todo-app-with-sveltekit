import type { ITodo } from 'src/types/todo';
import { writable } from 'svelte/store';

export const todos = writable([
	{ id: '1e4a59703af84', todo: 'Todo 1', completed: true },
	{ id: '9e09bcd7b9349', todo: 'Todo 2', completed: false },
	{ id: '9e4273a51a37c', todo: 'Todo 3', completed: false },
	{ id: '53ae48bf605cc', todo: 'Todo 4', completed: false }
]);
function generateRandomId(): string {
	return Math.random().toString(16).slice(2);
}

export const addTodo = async (todo: string) => {
	const response = await fetch('https://task-manager-aryankush25.herokuapp.com/tasks', {
		method: 'POST',
		body: JSON.stringify({
			description: todo,
			completed: false
		}),
		headers: {
			'content-type': 'application/json',
			authorization: `${document.cookie.substring(6)}`
		}
	});

	const users = await response.json();
	console.log('check', response);

	let newTodo: ITodo = {
		id: generateRandomId(),
		todo: todo,
		completed: false
	};
	todos.update((c): Array<ITodo> => [...c, newTodo]);
};
export const deleteTodo = async (todo: ITodo) => {
	todos.update((prev) => {
		return prev.filter((t) => t !== todo);
	});
};
export const getTodo = async () => {
	// todos.update((prev) => {
	// 	return prev.filter((t) => t !== todo);
	// });
	const response = await fetch('https://task-manager-aryankush25.herokuapp.com/tasks', {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			authorization: `${document.cookie.substring(6)}`
		}
	});
	console.log('GET', response);
	//   todos.update((c): Array<ITodo> => [...c, ]);
};
