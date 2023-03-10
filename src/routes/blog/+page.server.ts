import { post } from '$db/post';
import type { PageServerLoad } from './$types';

type OutputProps = {
	posts: string,
}

export const load: PageServerLoad<OutputProps> = async function (event) {
	const data = await post.find({}).toArray();
	const parseData = await JSON.parse(JSON.stringify(data));
	return {
		posts: parseData,
		user: event.locals.user
	};
};
