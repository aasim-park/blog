import { post } from '$db/post';

export const load = async function ({ params }) {
	// const data = await post.aggregate([{ $project: { _id: 0 } }]).toArray();
	const data = await post.find({ title: params.slug }, { projection: { _id: 0 } }).toArray();
	return {
		slug: data
	};
};
