<script>
	// firebaseConfig
	import {auth} from '$lib/config/firebase.js'; 
	import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';

	// svelte normal
	import user from '$lib/store/user.js';
	let email = '';
	let password = '';
	let currentError = null;
	// onAuthStateChanged(auth, (users) => {
	// 	if (users) user.update((val) => (val = { ...users }));
	// });
	const SignIn = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			onAuthStateChanged(auth, (users) => {
				user.update((val) => (val = { ...users }));
			});
			goto('/')
		} catch (error) {
			currentError = error.message;
		}
	};
</script>

<h1>Sign In</h1>

<form on:submit|preventDefault={SignIn}>
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
	<button type="submit">Sign In</button>
</form>

<div>
	<a href="/signup"> Sign Up </a>
</div>
