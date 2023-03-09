import { post } from '$db/post';
import type { PageServerLoad, Locals } from './$types';

export const load = async function (event: Locals) {
	const data = await post.find({}).toArray();
	const parseData = await JSON.parse(JSON.stringify(data));
	return {
		posts: parseData,
		user: event.locals.user
	};
} satisfies PageServerLoad<{
	posts: string;
	user: string;
}>;
