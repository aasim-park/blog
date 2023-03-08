<script>
	// firebaseConfig
	import { auth } from '$lib/config/firebase.js';
	import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';

	// svelte normal
	let name = '';
	let email = '';
	let password = '';
	let currentError = null;
	const singUp = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(auth.currentUser, { displayName: name });
			onAuthStateChanged(auth, (users) => {
				user.update((val) => (val = { ...users }));
			});
			goto('/');
		} catch (error) {
			currentError = error.message;
		}
	};
</script>

<h1>Sign Up!</h1>

<form class="mt-10 flex flex-col items-center" on:submit|preventDefault={singUp}>
	<div class="mb-4">
		<label for="Name" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="text"
			id="name"
			placeholder="Name"
			bind:value={name}
		/>
	</div>
	<div class="mb-4">
		<label for="email" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="email"
			id="email"
			placeholder="Email"
			bind:value={email}
		/>
	</div>
	<div>
		<label for="password" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="password"
			id="password"
			placeholder="Password"
			bind:value={password}
		/>
	</div>
	<p>
		{#if currentError}
			{currentError}
		{/if}
	</p>
	<button
		class="m-10 bg-colorTheme_1 hover:bg-colorTheme_1_light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		type="submit">Sign In</button
	>
</form>
