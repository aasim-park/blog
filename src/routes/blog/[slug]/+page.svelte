<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance, applyAction } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	export let data: PageData;
	let id = data.id;
	const title = data.title;
	const excerpt = data.excerpt;
	const description = data?.descriptionHtml?.code;

	if (browser) {
		const browserStorage = () => {
			window.localStorage.setItem('description', data.description);
			window.localStorage.setItem('title', title);
			window.localStorage.setItem('excerpt', excerpt);
			window.localStorage.setItem('id', id);
		};
		browserStorage();
	}
</script>

<div>
	<a href="/editblog"> edit Blog </a>
</div>

<article class="prose break-words md:m-auto">
	{@html description}
</article>


<form
action="?/deletepost"
use:enhance={() => {
	return async ({ result }) => {
		if (result.type === 'success') {
			if (result?.data?.message) {
					alert(result?.data?.message); 
					goto('/blog')
				}
		}
			await applyAction(result);
		};
	}}
	method="POST"
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
	<button
		class="p-1 bg-colorTheme_1 hover:bg-colorTheme_1_light text-white font-bold lg:py-2 lg:px-4 rounded focus:outline-none focus:shadow-outline"
		type="submit"
		value="deletepost"
		>deletepost
	</button>
</form>
