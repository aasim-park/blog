import { user } from '$db/user';
import { loginSchema } from '$lib/validation/schema.js';
import { fail, redirect } from '@sveltejs/kit';
import { ZodError } from 'zod';
import bcrypt from 'bcrypt';

export const load = async (event) => {
	if (event.locals.user) {
		throw redirect(302, '/');
	}
};

export const actions = {
	default: async (event) => {
		const data = Object.fromEntries(await event.request.formData());
		const signInData = loginSchema.parse(data);
		const { email, password } = signInData;
		try {
			const userExists = await user.findOne({ 'data.email': email });
			if (!userExists) {
				return fail(400, { credentials: true });
			}
			const userPassword = await bcrypt.compare(password, userExists?.data?.passwordHash);
			if (!userPassword) {
				return fail(400, { credentials: true });
			}
			const udatedToken = await user.updateOne(
				{
					'data.username': userExists.data.username
				},
				{ $set: { 'data.userAuthToken': crypto.randomUUID() } }
			);
			const authenticatedUser = await user.findOne({ 'data.email': email });
			event.cookies.set('session', authenticatedUser!.data.userAuthToken, {
				// send cookie for every page
				path: '/',
				// server side only cookie so you can't use `document.cookie`
				httpOnly: true,
				// only requests from same site can send cookies
				// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
				sameSite: 'strict',
				// only sent over HTTPS in production
				secure: true,
				// set cookie to expire after a month
				maxAge: 60 * 60 * 24 * 30
			});
			event.cookies.set('user', authenticatedUser!.data.userId, {
				// send cookie for every page
				path: '/',
				// server side only cookie so you can't use `document.cookie`
				httpOnly: true,
				// only requests from same site can send cookies
				// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
				sameSite: 'strict',
				// only sent over HTTPS in production
				secure: true,
				// set cookie to expire after a month
				maxAge: 60 * 60 * 24 * 30
			});
			return {
				success: true
			};
		} catch (err) {
			if (err instanceof ZodError) {
				const { fieldErrors: errors } = err.flatten();
				return fail(400, { errors });
			} else {
				return {
					err: 'Something went wrong'
				};
			}
		}
	}
};
