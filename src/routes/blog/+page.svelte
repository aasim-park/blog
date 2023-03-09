<script lang="ts">
	import plusIcon from '$lib/images/plus_icon.svg';
	export let data;
	$: ({ posts } = data);
	const clearLocalStorage = () => {
		window.localStorage.clear();
	};
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="blogs post page" content="blogs" />
</svelte:head>

<div class=" flex flex-col lg:flex lg:flex-row">
	<button on:click={clearLocalStorage} class="self-end p-4">
		<a href="/editblog">
			<img src={plusIcon} alt="plusicon" class="m-auto" /> Add a new blog
		</a>
	</button>
	{#each posts as post}
		<article class="p-4">
			<a href="/blog/{post._id}">
				<h1>{post.title}</h1>
			</a>
			<h2>{post.excerpt}</h2>
		</article>
	{/each}
</div>
