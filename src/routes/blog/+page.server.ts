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
	const userEsxits = event?.locals?.user?.id;
	if (userEsxits) {
		const data = await post.find({ $or: [{ userId: userEsxits }, { access: 'Public' }] }).toArray();
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
