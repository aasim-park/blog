import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	if (event.locals.user) {
		throw redirect(302, '/');
	}
	return {
		user: event.locals.user
	};
};

export const actions = {
	async default(event) {
		try {
			event.cookies.delete('AuthorizationToken');
			// event.cookies.delete('user');
			event.locals.user = null;
			return {
				success: true
			};
		} catch (err) {
			return {
				err: 'Something went wrong'
			};
		}
	}
};
