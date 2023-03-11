import { singupSchema } from '$lib/validation/schema.js';
import { auth } from '$lib/config/firebase.js';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { redirect } from '@sveltejs/kit';
import { ZodError } from "zod";

export const load = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/');
	}
};

export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		try {
			singupSchema.parse(formData);
			const { email, password, name } = formData;
			await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(auth.currentUser, { displayName: name });
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
