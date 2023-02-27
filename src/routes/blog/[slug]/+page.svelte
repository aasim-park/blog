<script>
	export let data;
	const post = data.slug.code;
	// console.log(data.description)
</script>

<!-- 
<h1>{post[0].title}</h1>
<h2>{post[0].excerpt}</h2> -->
<article class="prose lg:prose-xl">
	{@html post}
</article>
