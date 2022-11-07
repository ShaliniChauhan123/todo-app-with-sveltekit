// /** @type {import('./$types').LayoutServerLoad} */
import { redirect } from '@sveltejs/kit';
import { todos } from '../stores/todoStore';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const sessionid = cookies.get('token');

	console.log('sessionid main', sessionid);
	//if (sessionid) return getUsers();
	if (!sessionid) {
		throw redirect(302, '/signin');
	}

	const response = await fetch('https://task-manager-aryankush25.herokuapp.com/tasks', {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			authorization: `${sessionid}`
		}
	});
	const users = await response.json();
	if (!response.ok) {
		throw new Error(users);
	}

	todos.set(users);
	// todos.update()
	console.log('ME TODOS', users);
	return { tasks: users };
};
