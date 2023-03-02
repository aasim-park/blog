<script>
	let title = '';
	let excerpt = '';
	let description = '';
	let currentError = '';

	const posts = window.localStorage.getItem('post');
	console.log('localStorage===>', posts);
	if (posts !== null) {
		description = posts;
	}

	const savePost = async () => {
		description = 'hiiii new description';
	};
</script>

<form class="mt-10 flex flex-col items-center" on:submit|preventDefault={savePost}>
	<div class="mb-4">
		<label for="title" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="text"
			id="title"
			placeholder="Title"
			bind:value={title}
		/>
	</div>
	<div class="mb-4">
		<label for="except" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="text"
			id="except"
			placeholder="Except"
			bind:value={excerpt}
		/>
	</div>
	<div>
		<label for="description" />
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="textarea"
			id="description"
			placeholder="Description"
			bind:value={description}
		/>
	</div>
	<p>
		{#if currentError}
			{currentError}
		{/if}
	</p>
	<button
		class="m-10 bg-colorTheme_1 hover:bg-colorTheme_1_light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		type="submit">Submit</button
	>
</form>
