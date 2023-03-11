import db from '$db/mongo';
import type { ObjectId } from 'mongodb';
interface User {
	_id?: ObjectId;
	data: {
		username: String;
		email: String;
		passwordHash: String;
		userAuthToken: String;
	};
}
export const user = db.collection<User>('user');
