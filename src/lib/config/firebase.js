import { PUBLIC_apiKey, PUBLIC_authDomain, PUBLIC_projectId,PUBLIC_storageBucket,PUBLIC_messagingSenderId,PUBLIC_appId,PUBLIC_measurementId } from '$env/static/public';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: PUBLIC_apiKey,
	authDomain: PUBLIC_authDomain,
	projectId: PUBLIC_projectId,
	storageBucket: PUBLIC_storageBucket,
	messagingSenderId: PUBLIC_messagingSenderId,
	appId: PUBLIC_appId,
	measurementId: PUBLIC_measurementId
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export default firebaseConfig;
