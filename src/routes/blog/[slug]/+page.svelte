<script>
	export let data;
	const post = data.slug.code;
	import { browser } from '$app/environment';

	if (browser) {
		const browserStorage = () => {
			window.localStorage.setItem('post', post);
		};
		browserStorage()
	}
</script>

<!-- 
<h1>{post[0].title}</h1>
<h2>{post[0].excerpt}</h2> -->
<!-- {goto('/editblog') post=post} -->
<div>
	<a href="/editblog">
		edit Blog
	</a>
</div>
<article class="prose break-words md:m-auto">
	{@html post}
</article>
