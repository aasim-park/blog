import { MongoClient } from 'mongodb';
import { SECRET_DB_URL } from '$env/static/private';

const client = new MongoClient(SECRET_DB_URL);

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export default client.db('posts');
