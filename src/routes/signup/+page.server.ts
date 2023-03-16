import { singupSchema } from '$lib/validation/schema.js';
import { redirect } from '@sveltejs/kit';
import { ZodError } from 'zod';
import { createUser } from '$lib/helper/user.model';

export const load = async (event) => {
	if (event.locals.user) {
		throw redirect(302, '/');
	}
};

export const actions = {
	default: async (event) => {
		const data = Object.fromEntries(await event.request.formData());
		try {
			const singupData = singupSchema.parse(data);
			const { name, email, password, passwordConfirm } = singupData;
			if (password === passwordConfirm) {
				const { error } = await createUser(name, email, password);
				if (error) {
					return { error };
				}
				// const userExists = await User.findOne({ 'data.email': email });
				// if (userExists?.data) {
				// 	return fail(400, { user: true });
				// }
				// await User.insertOne({
				// 	data: {
				// 		username: name,
				// 		email,
				// 		passwordHash: await bcrypt.hash(password, 10),
				// 		userAuthToken: crypto.randomUUID(),
				// 		userId: crypto.randomUUID()
				// 	}
				// });
				return { message: 'sucessfully created acoount' };
			}
			return { err: 'Password didn`t match' };
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
