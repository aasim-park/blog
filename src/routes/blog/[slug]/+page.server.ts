import { post } from '$db/post';
import { compile } from 'mdsvex';
import { ObjectId } from 'mongodb';
import { redirect } from '@sveltejs/kit';

export const load = async function ({ params }) {
	const checkId = ObjectId.isValid(params.slug)
	if (checkId === true) {
		console.log("inside cehck")
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
	}
	throw redirect(302, '/');
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
