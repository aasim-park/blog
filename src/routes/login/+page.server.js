import { loginSchema } from '$lib/validation/schema.js';
import { auth } from '$lib/config/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/');
	}
};


export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		try {
			loginSchema.parse(formData);
			const { email, password } = formData;
			await signInWithEmailAndPassword(auth, email, password);
			onAuthStateChanged(auth, (users) => {
				if (users) {
					event.locals.user = {
						displayName: users.displayName
					};
				}
			});
		} catch (err) {
			if (err.issues) {
				const { fieldErrors: errors } = err.flatten();
				return { errors };
			} else {
				return {
					err: err.code
				};
			}
		}
	}
};
