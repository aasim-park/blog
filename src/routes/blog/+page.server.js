import { post } from '$db/post';

export const load = async function () {
	const data = await post.find({}).toArray();
	const parseData = await JSON.parse(JSON.stringify(data))
	// console.log(data);
	return {
			posts: parseData
	};
};
