import { loginSchema } from '$lib/validation/schema.js';
import { auth } from '$lib/config/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { redirect } from '@sveltejs/kit';
import { ZodError } from 'zod';

export const load = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/');
	}
};

export const actions = {
	default: async (event) => {
		const data = await event.request.formData()
		try {
			loginSchema.safeParse(data);
			const email = String(data.get("email"))
			const password = String(data.get("password"))
			await signInWithEmailAndPassword(auth, email, password);
			onAuthStateChanged(auth, (users) => {
				if (users) {
					event.locals.user = {
						displayName: users.displayName
					};
				}
			});
		} catch (err) {
			if (err instanceof ZodError) {
				const { fieldErrors: errors } = err.flatten();
				return { errors };
			} else {
				return {
					err
				};
			}
		}
	}
};
