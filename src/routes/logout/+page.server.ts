import { redirect } from '@sveltejs/kit';

export const load = async () => {
	throw redirect(302, '/');
};

export const actions = {
	async default(event) {
		try {
			event.cookies.set('session', '', {
				path: '/',
				expires: new Date(0),
			  })
		} catch (err) {
			console.log(err);
		}
	}
};
