<script>
	import { enhance } from '$app/forms';
	import { applyAction } from '$app/forms';
	import { browser } from '$app/environment';
	export let form;
	let title = '';
	let excerpt = '';
	let description = '';
	let id = '';
	if (browser) {
		let description1 = window.localStorage.getItem('description');
		let excerpt1 = window.localStorage.getItem('excerpt');
		let title1 = window.localStorage.getItem('title');
		let id1 = window.localStorage.getItem('id');
		if (id1 !== null) {
			description = description1;
			excerpt = excerpt1;
			title = title1;
			id = id1;
		}
	}
</script>

<form
	class="mt-10 flex flex-col items-center"
	method="POST"
	use:enhance={({ form, data, action, cancel }) => {
		// console.log();
		return async ({ result, update }) => {
			applyAction(result);
		};
	}}
>
	<div class="mb-1">
		<label for="id" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="text"
			id="id"
			placeholder="Id"
			bind:value={id}
			name="id"
		/>
	</div>
	<div class="mb-1">
		<label for="title" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="text"
			id="title"
			placeholder="Title"
			bind:value={title}
			name="title"
		/>
	</div>
	{#if form?.errors?.title}
		<span class="py-2 px-1 text-red-400">{form?.errors?.title[0]}</span>
	{/if}

	<div class="mb-1">
		<label for="except" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="text"
			id="except"
			placeholder="Except"
			bind:value={excerpt}
			name="excerpt"
		/>
	</div>
	{#if form?.errors?.excerpt}
		<span class="py-2 px-1 text-red-400">{form?.errors?.excerpt[0]}</span>
	{/if}
	<div>
		<label for="description" />
		<textarea
			rows="10"
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="text"
			id="description"
			placeholder="Description"
			bind:value={description}
			name="description"
		/>
	</div>
	{#if form?.errors?.description}
		<span class="py-2 px-1 text-red-400">{form?.errors?.description[0]}</span>
	{/if}
	<button
		class="m-10 bg-colorTheme_1 hover:bg-colorTheme_1_light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		type="submit">Submit</button
	>
</form>
