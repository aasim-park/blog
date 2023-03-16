import { client } from '$db/redis';
import { Entity, Schema } from 'redis-om';
class User extends Entity {}
class Post extends Entity {}

export const userSchema = new Schema(
	User,
	{
		username: { type: 'string' },
		email: { type: 'string' },
		passwordHash: { type: 'string' },
		userId: { type: 'string' }
	},
	{
		dataStructure: 'JSON'
	}
);

export const userRepository = client.fetchRepository(userSchema);
await userRepository.createIndex();

export const postSchema = new Schema(
	Post,
	{
		title: { type: 'string' },
		excerpt: { type: 'string' },
		description: { type: 'string' },
		access: { type: 'string' },
		userId: { type: 'string' }
	},
	{
		dataStructure: 'JSON'
	}
);

export const postRepository = client.fetchRepository(postSchema);
await postRepository.createIndex();
