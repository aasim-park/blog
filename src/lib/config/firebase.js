import { apiKey, authDomain, projectId,storageBucket,messagingSenderId,appId,measurementId } from '$env/static/private';

const firebaseConfig = {
	apiKey: apiKey,
	authDomain: authDomain,
	projectId: projectId,
	storageBucket: storageBucket,
	messagingSenderId: messagingSenderId,
	appId: appId,
	measurementId: measurementId
};

export default firebaseConfig;
