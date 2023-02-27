<script>
	export let data;
	$: ({ posts } = data);
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="blogs post page" content="blogs" />
</svelte:head>

<section class=" lg:flex lg:flex-row">
	{#each posts as post}
		<article class="p-10">
			<a href="/blog/{post._id}">
				<h1>{post.title}</h1>
			</a>
			<h2>{post.excerpt}</h2>
		</article>
	{/each}
</section>

<style lang="postcss">
	/* section {
		display: flex;
		flex-direction: row;
		gap: 30px;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	} */
	/* .posts {
		padding: 20px;
	} */

	/* @media (min-width: 480px) {
		section {
			display: flex;
			flex-direction: column;
			gap: 30px;
			justify-content: center;
			align-items: center;
			flex: 0.6;
		}
	} */
</style>
