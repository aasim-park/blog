import { post } from '$db/post';
import { ObjectId } from 'mongodb';

export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		const { title, excerpt, description, id } = formData;
		// console.log(id)
		const objectid = new ObjectId(id);
		try {
			const data = await post
				.update({ objectid }, { $set: { title, excerpt, description } })
				.toArray();
			const parseData = await JSON.parse(JSON.stringify(data));
			console.log(parseData);
		} catch (err) {
			console.log(err);
		}
	}
};
