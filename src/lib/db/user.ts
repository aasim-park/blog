import db from '$db/mongo';
import type { ObjectId } from 'mongodb';
interface User {
	_id?: ObjectId;
	data: {
		username: string;
		email: string;
		passwordHash: string;
		userAuthToken?: string;
		userId: string;
	};
}
export const User = db.collection<User>('user');
