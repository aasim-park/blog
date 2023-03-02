<script>
	export let data;
	const post = data.slug.code;
</script>

<!-- 
<h1>{post[0].title}</h1>
<h2>{post[0].excerpt}</h2> -->
<article class="prose break-words md:m-auto">
	{@html post}
</article>
