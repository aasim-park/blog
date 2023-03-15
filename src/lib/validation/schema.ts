import { z } from 'zod';

export const loginSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.trim()
		.max(64, { message: 'Name must be less than 64 characters' })
		.email({ message: 'Email must be a valid email address' }),
	password: z
		.string({ required_error: 'Password is required' })
		.min(6, { message: 'Password must be at least 6 characters' })
		.trim()
});

export const postSchema = z.object({
	id: z.string({ required_error: 'id is required' }).optional(),
	title: z
		.string({ required_error: 'Title is required' })
		.min(4, { message: 'Title must be at least 4 characters' })
		.max(64, { message: 'Title must be less than 64 characters' })
		.trim(),
	excerpt: z
		.string({ required_error: 'Excerpt is required' })
		.min(4, { message: 'Excerpt must be at least 4 characters' })
		.trim(),
	description: z
		.string({ required_error: 'Description is required' })
		.min(6, { message: 'Description must be at least 6 characters' })
		.trim(),
	access: z.string({ required_error: 'access is required' })
});

export const singupSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(4, { message: 'Name must be at least 4 characters' })
		.trim(),
	email: z
		.string({ required_error: 'Email is required' })
		.trim()
		.max(64, { message: 'Email must be less than 64 characters' })
		.email({ message: 'Email must be a valid email address' }),
	password: z
		.string({ required_error: 'Password is required' })
		.min(6, { message: 'Password must be at least 6 characters' })
		.trim(),
	passwordConfirm: z
		.string({ required_error: 'Please confirm your password' })
		.min(6, { message: 'Password must be at least 6 characters' })
		.trim()
});

export const restSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.trim()
		.max(64, { message: 'Name must be less than 64 characters' })
		.email({ message: 'Email must be a valid email address' })
});
