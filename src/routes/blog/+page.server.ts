import { post } from '$db/post';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function (event) {
	const userCookie = event.cookies.get('user');
	if (userCookie) {
		const data = await post.find({ $or: [{ userId: userCookie }, { access: 'Public' }] }).toArray();
		const parseData = await JSON.parse(JSON.stringify(data));
		return {
			posts: parseData,
			user: event.locals.user
		};
	}
	const data = await post.find({ access: 'Public' }).toArray();
	const parseData = await JSON.parse(JSON.stringify(data));
	return {
		posts: parseData,
		user: event.locals.user
	};
};
