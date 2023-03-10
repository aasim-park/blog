import { post } from '$db/post';
import { compile } from 'mdsvex';
import { ObjectId } from 'mongodb';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async function ({ params }) {
	const checkId = ObjectId.isValid(params.slug);
	if (checkId === true) {
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
	throw redirect(302, '/blog');
};

export const actions: Actions = {
	deletepost: async (event) => {
		const formData = await event.request.formData();
		const id = String(formData.get('id'));
		const objectid = new ObjectId(id);
		const deleteResult = await post.deleteOne({ _id: objectid });
		if (deleteResult.deletedCount === 0) {
			return  { message: `no document found` }
		}
		return { message: `sucessfully deleted ${deleteResult.deletedCount}` };
	}
};
