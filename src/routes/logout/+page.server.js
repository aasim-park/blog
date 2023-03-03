import { auth } from '$lib/config/firebase.js';
import { signOut } from 'firebase/auth';
import { redirect } from '@sveltejs/kit'

export const actions = {
	default: async ({ request }) => {
		console.log('REACED TO LOGOUT');
		try {
			await signOut(auth);
            redirect(301, '/login')
		} catch (err) {
			console.log(err);
		}
	}
};
