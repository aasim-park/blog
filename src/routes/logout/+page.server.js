import { signOut } from 'firebase/auth';

export const actions = {
	logout: async ({ request }) => {
        console.log("REACED TO LOGOUT")
		await signOut();
        return {
            sucess: true
        }
	}
};
