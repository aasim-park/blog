import { post } from '$db/post';

export const load = async function () {
	// const data = await post.aggregate([{ $project: { _id: 0 } }]).toArray();
	const data = await post.find({}, { projection: { _id: 0 } }).toArray();
	// TODO: need to fix this _id error
	// const data = await post.find().toArray();
	// const result = data.map(())
	console.log(data);
	return {
		posts: data
	};
};
