<script>
	import plusIcon from '$lib/images/plus_icon.svg';
	import { page } from '$app/stores';
	// console.log('blogPage', $page?.data?.user?.displayName);
	export let data;
	$: ({ posts } = data);
	$: user = $page?.data?.user?.displayName;
	const clearLocalStorage = () => {
		window.localStorage.clear();
	};
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="blogs post page" content="blogs" />
</svelte:head>

<section class=" lg:flex lg:flex-row">
	{#if user}
		<button on:click={clearLocalStorage} class="">
			<a href="/editblog">
				<img src={plusIcon} alt="plusicon" />
			</a>
		</button>
	{/if}
	{#each posts as post}
		<article class="p-6">
			<a href="/blog/{post._id}">
				<h1>{post.title}</h1>
			</a>
			<h2>{post.excerpt}</h2>
		</article>
	{/each}
</section>
