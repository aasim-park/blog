import { post } from '$db/post';
import { ObjectId } from 'mongodb';

export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		const { title, excerpt, description, id } = formData;
		// console.log(id)
		const objectid = new ObjectId(id);
		try {
			const data = await post.updateOne(
				{ _id: objectid },
				{ $set: { title, excerpt, description } }
			);
			await JSON.parse(JSON.stringify(data));
			return {success:true}
		} catch (err) {
			console.log(err);
		}
	}
};
