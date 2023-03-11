import { post } from '$db/post';
import { ObjectId } from 'mongodb';
import { newPostSchema } from '$lib/validation/schema.js';
import { ZodError } from 'zod';

export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		const { title, excerpt, description, id } = formData;
		const numberId = Number(id);
		if (numberId) {
			const objectid = new ObjectId(numberId);
			try {
				await post.updateOne({ _id: objectid }, { $set: { title, excerpt, description } });
				return { message: 'sucessfully updated ' };
			} catch (err) {
				return { err: 'something went wrong' };
			}
		}
		try {
			newPostSchema.parse(formData);
			await post.insertOne({ title, excerpt, description });
			return { message: 'sucessfully Created new Post' };
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
