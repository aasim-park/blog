import { post } from '$db/post';
import type { PageServerLoad } from './$types';
interface Post {
	_id?: string;
	title: string;
	excerpt: string;
	description: string;
	access: string;
	userId: string;
}
export const load: PageServerLoad = async function (event) {
	const userCookie = event.cookies.get('user');
	if (userCookie) {
		const data = await post.find({ $or: [{ userId: userCookie }, { access: 'Public' }] }).toArray();
		const parseData: Post[] = await JSON.parse(JSON.stringify(data));
		return {
			posts: parseData,
			user: event.locals.user
		};
	}
	const data = await post.find({ access: 'Public' }).toArray();
	const parseData: Post[] = await JSON.parse(JSON.stringify(data));
	return {
		posts: parseData,
		user: event.locals.user
	};
};
