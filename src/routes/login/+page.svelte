<script>
	// firebaseConfig
	import { auth } from '$lib/config/firebase.js';
	import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';

	// svelte normal
	import user from '$lib/store/user.js';
	let email = '';
	let password = '';
	let currentError = null;

	const SignIn = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			onAuthStateChanged(auth, (users) => {
				user.update((val) => users.displayName);
			});
			goto('/blog');
		} catch (error) {
			currentError = error.message;
		}
	};
</script>

<p class="text-center text-4xl mt-10">Sign In</p>

<form class="mt-10 flex flex-col items-center" on:submit|preventDefault={SignIn}>
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
		type="submit"
	>
		Sign In
	</button>
</form>

<div class="text-center mt-9">
	New User ? <a href="/signup"> Sign Up </a>
</div>
