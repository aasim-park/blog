import { post } from '$db/post';

export const load = async function () {
	// const data = await post.aggregate([{ $project: { _id: 0 } }]).toArray();
	const data = await post.find({}, { projection: { _id: 0 } }).toArray();
	return {
		posts: data
	};
};
