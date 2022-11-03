// /** @type {import('./$types').LayoutServerLoad} */
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const sessionid = cookies.get('token');
	console.log('sessionid main', sessionid);
	if (!sessionid) {
		throw redirect(302, '/signin');
	}
};
