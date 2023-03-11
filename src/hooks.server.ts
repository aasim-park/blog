// import { start_mongo } from '$db/mongo';
import type { Handle } from '@sveltejs/kit'
import { user } from '$db/user'

export const handle: Handle = async ({ event, resolve }) => {
  // get cookies from browser
  const session = event.cookies.get('session')

  if (!session) {
    // if there is no session load page as normal
    return await resolve(event)
  }

  const userExists = await user.findOne({ 'data.userAuthToken': session });

  // if `user` exists set `events.local`
  if (userExists) {
    event.locals.user = {
      name: userExists.data.username,
    }
  }

  // load page as normal
  return await resolve(event)
}
// start_mongo()
// 	.then(() => {
// 		console.log('Mongo started');
// 	})
// 	.catch((e) => {
// 		console.error(e);
// 	});
