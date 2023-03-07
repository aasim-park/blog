import { loginSchema } from '$lib/validation/loginSchema.js';
import { auth } from '$lib/config/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';

const authChangePromise = () =>
	new Promise((res, rej) => {
		onAuthStateChanged(auth, (users) => {
			if (!users) rej('User Not Found');
			res({
				displayName: users.displayName
			});
		});
	});

export const actions = {
	login: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		try {
			loginSchema.parse(formData);
			const { email, password } = formData;
			await signInWithEmailAndPassword(auth, email, password);
			return await authChangePromise();
		} catch (err) {
			if (err.issues) {
				const { fieldErrors: errors } = err.flatten();
				return { errors };
			} else {
				return {
					err: err.code
				};
			}
		}
	},
	logout: async () => {
		console.log('REACED TO LOGOUT');
		try {
			await signOut(auth);
			return { sucess: true };
		} catch (err) {
			console.log(err);
		}
	}
};
