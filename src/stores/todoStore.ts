import { getCookie } from '../helper/cookie';
import { writable } from 'svelte/store';

export const todos = writable([{ _id: '', description: '', completed: false }]);
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
			authorization: `${getCookie('token')}`
		}
	});
	let newTodo = {
		_id: generateRandomId(),
		description: todo,
		completed: false
	};
	todos.update((c) => [...c, newTodo]);
};
export const deleteTodo = async (id: string) => {
	const response = await fetch(`https://task-manager-aryankush25.herokuapp.com/tasks/${id}`, {
		method: 'DELETE',
		headers: {
			'content-type': 'application/json',
			authorization: `${getCookie('token')}`
		}
	});
	todos.update((prev) => {
		return prev.filter((t) => t._id !== id);
	});
};
export const getTodo = async () => {
	const response = await fetch('https://task-manager-aryankush25.herokuapp.com/tasks', {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			authorization: `${getCookie('token')}`
		}
	});
	const tasks = await response.json();
	console.log('get', response);
	return tasks;
};
