import { post } from '$db/post';
import { compile } from 'mdsvex';

export const load = async function ({ params }) {
	const response = await post.find({ title: params.slug }, { projection: { _id: 0 } }).toArray();
	const compileResponse = await compile(response[0].description);
	return {
		slug: compileResponse
	};
};
