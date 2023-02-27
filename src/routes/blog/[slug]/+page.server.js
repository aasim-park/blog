import { post } from '$db/post';
import { compile } from 'mdsvex';
import { ObjectId } from "mongodb"

export const load = async function ({ params }) {
	const id = new ObjectId(params.slug)
	const response = await post.find({"_id":id}).toArray();
	const compileResponse = await compile(response[0].description);
	return {
		slug: compileResponse
	};
};
