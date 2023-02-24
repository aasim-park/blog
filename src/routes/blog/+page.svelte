<script>
	export let data;
	$: ({ posts } = data);
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="blogs post page" content="blogs" />
</svelte:head>

<section>
	{#each posts as post}
		<article>
			<h1>{post.title}</h1>
			<h2>{post.description}</h2>
		</article>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
