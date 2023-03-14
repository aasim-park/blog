<script lang="ts">
	import { enhance } from '$app/forms';
	import { applyAction } from '$app/forms';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	export let form;
	let title = '';
	let excerpt = '';
	let description = '';
	let id = '';
	if (browser) {
		let description1 = window.localStorage.getItem('description') as string;
		let excerpt1 = window.localStorage.getItem('excerpt') as string;
		let title1 = window.localStorage.getItem('title') as string;
		let id1 = window.localStorage.getItem('id');
		if (id1) {
			description = description1;
			excerpt = excerpt1;
			title = title1;
			id = id1;
		}
	}
</script>

<form
	class="mt-10 flex flex-col gap-4 items-center"
	method="POST"
	use:enhance={({ form, data, action, cancel }) => {
		return async ({ result, update }) => {
			if (result.type === 'success') {
				if (result?.data?.message) {
					alert(result?.data?.message);
					goto('/blog');
				}
			}
			applyAction(result);
		};
	}}
>
	<div>
		<label for="id" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="hidden"
			id="id"
			placeholder="Id"
			bind:value={id}
			name="id"
		/>
	</div>

	<div>
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="title">
			Title
		</label>
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
	<div>
		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="excerpt">
			Excerpt
		</label>
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
		<label
			class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
			for="description"
		>
			description
		</label>
		<textarea
			rows="10"
			cols="33"
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="description"
			placeholder="Description"
			bind:value={description}
			name="description"
		/>
	</div>
	{#if form?.errors?.description}
		<span class="py-2 px-1 text-red-400">{form?.errors?.description[0]}</span>
	{/if}
	<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
		<label
			class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
			for="User Access"
		>
			User Access
		</label>
		<div class="relative">
			<select
				class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="User Access"
				name="access"
			>
				<option>Public</option>
				<option>Private</option>
			</select>
			<div
				class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
			>
				<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
					><path
						d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
					/></svg
				>
			</div>
		</div>
	</div>

	<button
		class="m-10 bg-colorTheme_1 hover:bg-colorTheme_1_light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		type="submit">Submit</button
	>
</form>
