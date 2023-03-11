export const load = async function ({ data }) {
	return {
		posts: data.posts,
		user: data.user
	};
};
