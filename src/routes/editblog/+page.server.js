import { post } from '$db/post';
import { ObjectId } from 'mongodb';
import { newPostSchema } from '$lib/validation/schema.js';

export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		const { title, excerpt, description, id } = formData;
		if (id) {
			const objectid = new ObjectId(id);
			try {
				await post.updateOne({ _id: objectid }, { $set: { title, excerpt, description } });
				return { message: "sucessfully updated " };
			} catch (err) {
				console.log(err);
			}
		}
		try {
			newPostSchema.parse(formData);
			await post.insertOne({ title, excerpt, description });
			return {message: "sucessfully Created new Post" };
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
