<script>
	// firebaseConfig
	import firebaseConfig from '$lib/config/firebase.js';
	import { initializeApp } from 'firebase/app';
	import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
	const app = initializeApp(firebaseConfig);

	// svelte normal
	import user from '$lib/store/user.js';
	let email = '';
	let password = '';
	let currentError = null;
	const auth = getAuth();
	const signIn = () => {
		console.log(email, password);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				user.update((val) => (val = { ...userCredential.user }));
			})
			.catch((error) => {
				currentError = error.message;
				console.log(error);
			});
	};
</script>

<h1>Sign Up!</h1>

<form on:submit|preventDefault={signIn}>
	<div>
		<label for="email">Email</label>
		<input type="email" id="email" bind:value={email} />
	</div>
	<div>
		<label for="password">Password</label>
		<input type="password" id="password" bind:value={password} />
	</div>
	<p>
		{#if currentError !== null}
			{currentError}
		{/if}
	</p>
	<button type="submit">Submit</button>
</form>
