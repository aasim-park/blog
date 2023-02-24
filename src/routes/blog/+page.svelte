<script>
	export let data;
	console.log('data===>', data);
	$: ({ posts } = data);
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="blogs post page" content="blogs" />
</svelte:head>

<section>
	{#each posts as post}
		<article>
			<h2>{post.title}</h2>
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
