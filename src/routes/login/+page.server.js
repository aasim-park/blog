import { loginSchema } from '$lib/validation/loginSchema.js';
import { auth } from '$lib/config/firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import user from '$lib/store/user.js';

export const actions = {
	login: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		try {
			loginSchema.parse(formData);
			const { email, password } = formData;
			await signInWithEmailAndPassword(auth, email, password);
			onAuthStateChanged(auth, (users) => {
				user.update((val) => users.displayName);
			});
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
	}
};
