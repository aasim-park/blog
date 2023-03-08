import { redirect } from '@sveltejs/kit';
import { signOut } from 'firebase/auth';
import { auth } from '$lib/config/firebase.js';

export const load = async () => {
	throw redirect(302, '/');
};

export const actions = {
	async default(event) {
		try {
			await signOut(auth);
			event.locals.user = null;
			return { sucess: true };
		} catch (err) {
			console.log(err);
		}

		// redirect the user
		throw redirect(302, '/');
	}
};
