// import { start_mongo } from '$db/mongo';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '$lib/config/firebase.js';

// start_mongo()
// 	.then(() => {
// 		console.log('Mongo started');
// 	})
// 	.catch((e) => {
// 		console.error(e);
// 	});

export const handle = async ({ event, resolve }) => {
	onAuthStateChanged(auth, (users) => {
		if (users) {
			event.locals.user = {
				displayName: users.displayName
			};
		}
	});
	// load page as normal
	return await resolve(event);
};
