import { redirect } from '@sveltejs/kit';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '$lib/config/firebase.js';
import { restSchema } from '$lib/validation/schema.js';

export const load = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/');
	}
};

export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		const { email } = formData;
		try {
			restSchema.parse(formData);
			await sendPasswordResetEmail(auth, email);
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
