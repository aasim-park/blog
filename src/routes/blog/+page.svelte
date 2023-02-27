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
		<article class="posts">
			<a href="/blog/{post.title}">
				<h1>{post.title}</h1>
			</a>
			<h2>{post.excerpt}</h2>
		</article>
	{/each}
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: row;
		gap: 30px;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	.posts {
		padding: 20px;
	}
</style>
