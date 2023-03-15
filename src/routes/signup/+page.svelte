<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	export let form;
	let name = '';
	let email = '';
	let password = '';
	let confirmpassword = '';
</script>

<h1>Sign Up!</h1>

<form
	class="mt-10 flex flex-col items-center"
	method="POST"
	use:enhance={({ data }) => {
		return async ({ result }) => {
			if (result.type == 'success') {
				if (result?.data?.message) {
					alert(result?.data?.message);
					goto('/login');
				}
			}
			await applyAction(result);
		};
	}}
>
	{#if form?.user}
		<p class="py-2 px-1 text-red-400">Email Is is Registed already.</p>
	{/if}

	{#if form?.err}
		<span class="py-2 px-1 text-red-400">{form?.err}</span>
	{/if}
	<div class="m-2">
		<label for="Name" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="text"
			id="name"
			name="name"
			placeholder="Name"
			bind:value={name}
		/>
	</div>
	{#if form?.errors?.name}
		<span class="py-2 px-1 text-red-400">{form?.errors?.name[0]}</span>
	{/if}
	<div class="m-2">
		<label for="email" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="email"
			name="email"
			id="email"
			placeholder="Email"
			bind:value={email}
		/>
	</div>
	{#if form?.errors?.email}
		<span class="py-2 px-1 text-red-400">{form?.errors?.email[0]}</span>
	{/if}
	<div class="m-2">
		<label for="password" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="password"
			id="password"
			name="password"
			placeholder="Password"
			bind:value={password}
		/>
	</div>
	{#if form?.errors?.password}
		<span class="py-2 px-1 text-red-400">{form?.errors?.password[0]}</span>
	{/if}

	<div class="m-2">
		<label for="confirmpassword" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="password"
			id="confirmpassword"
			name="passwordConfirm"
			placeholder="confirm password"
			bind:value={confirmpassword}
		/>
	</div>
	{#if form?.errors?.passwordConfirm}
		<span class="py-2 px-1 text-red-400">{form?.errors?.passwordConfirm[0]}</span>
	{/if}
	<button
		class="m-10 bg-colorTheme_1 hover:bg-colorTheme_1_light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		type="submit">Sign Up</button
	>
</form>
