<script>
    let email=''
	export let form;
</script>
<h1>Reset page</h1>
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
    <button
		class="m-10 bg-colorTheme_1 hover:bg-colorTheme_1_light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		type="submit"
	>
		Reset Password
	</button>
</form>