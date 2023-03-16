// import { createClient } from 'redis';
import { Client } from 'redis-om';
// import { SECRET_REDIS_PASSWORD, SECRET_REDIS_HOST, SECRET_REDIS_PORT } from '$env/static/private';
import { SECRET_REDIS_URL } from '$env/static/private';

// export const client = createClient({
// 	password: SECRET_REDIS_PASSWORD,
// 	socket: {
// 		host: SECRET_REDIS_URL,
// 		port: Number(SECRET_REDIS_PORT)
// 	}
// });
// client.on('error', (err) => console.log('Redis Client Error', err));
export const client = await new Client().open(SECRET_REDIS_URL);
