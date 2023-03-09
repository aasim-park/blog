import { post } from '$db/post';
import { compile } from 'mdsvex';
import { ObjectId } from 'mongodb';

export const load = async function ({ params }) {
	const id = new ObjectId(params.slug);
	const response = await post.find({ _id: id }).toArray();
	const compileResponse = await compile(response[0].description);
	const parseData = await JSON.parse(JSON.stringify(response));
	return {
		id: parseData[0]._id,
		title: parseData[0].title,
		excerpt: parseData[0].excerpt,
		descriptionHtml: compileResponse,
		description: response[0].description
	};
};

export const actions = {
	deletepost: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		const { id } = formData;
		const objectid = new ObjectId(id);
		const deleteResult = await post.deleteOne({ _id:objectid });
		if (deleteResult.deletedCount === 0) {
		return {message: `no document found`};
		}
		return {message: `sucessfully deleted ${deleteResult.deletedCount}`};
	}
};
