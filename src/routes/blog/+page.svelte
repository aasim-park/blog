<script>
	import plusIcon from '$lib/images/plus_icon.svg';
	import user from '$lib/store/user.js';
	export let data;
	$: ({ posts } = data);
	$: isLogedIn = $user === null ? false : true;
	const clearLocalStorage = () => {
		window.localStorage.clear();
	};
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="blogs post page" content="blogs" />
</svelte:head>

<section class=" lg:flex lg:flex-row">
	<button on:click={clearLocalStorage} class="">
		<a href="/editblog">
			{#if isLogedIn}
				<img src={plusIcon} alt="Home" />
			{/if}
		</a>
	</button>

	{#each posts as post}
		<article class="p-6">
			<a href="/blog/{post._id}">
				<h1>{post.title}</h1>
			</a>
			<h2>{post.excerpt}</h2>
		</article>
	{/each}
</section>
