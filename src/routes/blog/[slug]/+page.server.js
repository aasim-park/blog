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
		description: compileResponse
	};
};
