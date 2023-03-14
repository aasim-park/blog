import db from '$db/mongo';
import type { ObjectId } from 'mongodb';

interface Post {
	_id?: ObjectId;
	title: string;
	excerpt: string;
	description: string;
	access: string;
	userId: string;
}
export const post = db.collection<Post>('post');
