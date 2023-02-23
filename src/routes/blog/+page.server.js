import {post} from "$db/post";

export const load = async function() {
	const data = await post.find({}, {limit: 50, projection: {
		title: 1
	}}).toArray();

	return {
		post: data
	}
}