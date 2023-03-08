<script>
	export let form;
	let email = '';
	let password = '';
</script>

<p class="text-center text-4xl mt-10">Sign In</p>

{#if form?.err}
	<span class="py-2 px-1 text-red-400">{form?.err}</span>
{/if}

<form class="mt-10 flex flex-col items-center" method="POST">
	<div class="m-2">
		<label for="email" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="email"
			id="email"
			placeholder="Email"
			name="email"
			bind:value={email}
		/>
	</div>
	{#if form?.errors?.email}
		<span class="py-2 px-1 text-red-400">{form?.errors?.email[0]}</span>
	{/if}
	<div>
		<label for="password" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="password"
			id="password"
			placeholder="Password"
			name="password"
			bind:value={password}
		/>
	</div>
	{#if form?.errors?.password}
		<span class="py-2 px-1 text-red-400">{form?.errors?.password[0]}</span>
	{/if}
	<div class="m-2">
		<a href="/resetpassword">Forgot password</a>
	</div>
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
