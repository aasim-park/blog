import { post } from '$db/post';
import { ObjectId } from 'mongodb';
import { postSchema } from '$lib/validation/schema.js';
import { ZodError } from 'zod';

export const actions = {
	default: async (event) => {
		try {
			const formData = Object.fromEntries(await event.request.formData());
			const postData = postSchema.parse(formData);
			const { title, excerpt, description, access, id } = postData;
			const userId = String(event.cookies.get('user'));
			if (id) {
				const objectid = new ObjectId(id);
				const userExits = await post.findOne({ _id: objectid });
				const userCheck = userExits?.userId === userId;
				if (userCheck) {
					await post.updateOne(
						{ _id: objectid },
						{ $set: { title, excerpt, description, access } }
					);
					return { message: 'sucessfully updated ' };
				}
				return { message: 'not an owner of post' };
			}
			await post.insertOne({ title, excerpt, description, access, userId });
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
