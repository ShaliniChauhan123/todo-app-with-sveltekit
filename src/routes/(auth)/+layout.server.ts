import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const sessionid = cookies.get('token');
	if (sessionid) {
		throw redirect(302, '/');
	}
};
