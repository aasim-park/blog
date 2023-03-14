import { post } from '$db/post';
import { ObjectId } from 'mongodb';
import { postSchema } from '$lib/validation/schema.js';
import { ZodError } from 'zod';

export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		const postData = postSchema.parse(formData);
		const title = postData.title;
		const excerpt = postData.excerpt;
		const description = postData.description;
		const access = postData.access;
		const id = postData.id;
		if (id) {
			const objectid = new ObjectId(id);
			try {
				await post.updateOne({ _id: objectid }, { $set: { title, excerpt, description, access } });
				return { message: 'sucessfully updated ' };
			} catch (err) {
				return { err: 'something went wrong' };
			}
		}
		try {
			await post.insertOne({ title, excerpt, description, access });
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
