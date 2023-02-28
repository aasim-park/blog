<script>
	// firebaseConfig
	import { auth } from '$lib/config/firebase.js';
	import { 
		createUserWithEmailAndPassword,
		updateProfile,
		onAuthStateChanged
	} from 'firebase/auth';
	import { goto } from '$app/navigation';

	// svelte normal
	import user from '$lib/store/user.js';
	let name = '';
	let email = '';
	let password = '';
	let currentError = null;
	// onAuthStateChanged(auth, (users) => {
	// 	if (users) user.update((val) => (val = { ...users }));
	// });
	const singUp = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(auth.currentUser, { displayName: name });
			onAuthStateChanged(auth, (users) => {
				user.update((val) => (val = { ...users }));
			});
			goto('/')
		} catch (error) {
			currentError = error.message;
		}
	};
</script>

<h1>Sign Up!</h1>

<form on:submit|preventDefault={singUp}>
	<div>
		<label for="name">Name</label>
		<input type="text" id="name" bind:value={name} />
	</div>
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
	<button type="submit">SignUp!!</button>
</form>
