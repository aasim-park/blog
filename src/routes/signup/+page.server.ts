import { singupSchema } from '$lib/validation/schema.js';
import { fail, redirect } from '@sveltejs/kit';
import { ZodError } from 'zod';
import { user } from '$db/user';
import bcrypt from 'bcrypt';

export const load = async (event) => {
	if (event.locals.user) {
		throw redirect(302, '/');
	}
};

export const actions = {
	default: async (event) => {
		const data = Object.fromEntries(await event.request.formData());
		const singupData = singupSchema.parse(data);
		const { name, email, password } = singupData;
		try {
			const userExists = await user.findOne({ 'data.email': email });
			if (userExists?.data) {
				return fail(400, { user: true });
			}

			await user.insertOne({
				data: {
					username: name,
					email,
					passwordHash: await bcrypt.hash(password, 10),
					userAuthToken: crypto.randomUUID(),
					userId: crypto.randomUUID()
				}
			});
			return { message: 'sucessfully created acoount' };
		} catch (err) {
			if (err instanceof ZodError) {
				const { fieldErrors: errors } = err.flatten();
				return { errors };
			} else {
				return { err: 'something went wrong' };
			}
		}
	}
};
