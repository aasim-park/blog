import { redirect } from '@sveltejs/kit';

export const load = async () => {
	throw redirect(302, '/');
};

export const actions = {
	async default(event) {
		try {
			event.cookies.set('session', '', {
				path: '/',
				expires: new Date(0)
			});
			event.locals.user = null
			return {
				success: true
			};
		} catch (err) {
			return {
				err: "Something went wrong"
			};
		}
	}
};
