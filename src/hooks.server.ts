// import { start_mongo } from '$db/mongo';
import type { Handle } from '@sveltejs/kit';
import { User } from '$db/user';
import { SECRET_JWT_ACCESS } from '$env/static/private';
import jwt from 'jsonwebtoken';

export const handle: Handle = async ({ event, resolve }) => {
	const authCookie = event.cookies.get('AuthorizationToken');

	if (authCookie) {
		// Remove Bearer prefix
		const token = authCookie.split(' ')[1];

		try {
			const jwtUser = jwt.verify(token, SECRET_JWT_ACCESS);
			if (typeof jwtUser === 'string') {
				throw new Error('Something went wrong');
			}

			const user = await User.findOne({
				'data.userId': jwtUser.id
			});

			if (!user) {
				throw new Error('User not found');
			}

			const sessionUser = {
				userId: user.data.userId,
				email: user.data.email,
				name: user.data.username
			};
			event.locals.user = {
				name: sessionUser.name
			};
		} catch (error) {
			console.error(error);
		}
	}
	// get cookies from browser
	// const session = event.cookies.get('session');

	// if (!session) {
	// if there is no session load page as normal
	// 	return await resolve(event);
	// }

	// const userExists = await user.findOne({ 'data.userAuthToken': session });

	// if `user` exists set `events.local`
	// if (userExists) {
	// 	event.locals.user = {
	// 		name: userExists.data.username
	// 	};
	// }

	// load page as normal
	return await resolve(event);
};
// start_mongo()
// 	.then(() => {
// 		console.log('Mongo started');
// 	})
// 	.catch((e) => {
// 		console.error(e);
// 	});
