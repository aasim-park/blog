import { post } from '$db/post';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async function (event) {
	const data = await post.find({}).toArray();
	const parseData = await JSON.parse(JSON.stringify(data));
	return {
		posts: parseData,
		user: event.locals.user
	};
};
