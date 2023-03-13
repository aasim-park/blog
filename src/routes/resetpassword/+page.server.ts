import { redirect } from '@sveltejs/kit';
import { restSchema } from '$lib/validation/schema.js';
import { ZodError } from 'zod';

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
		} catch (err) {
			if (err instanceof ZodError) {
				const { fieldErrors: errors } = err.flatten();
				return { errors };
			} else {
				return {
					message: 'Something went wrong'
				};
			}
		}
	}
};
