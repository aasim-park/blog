<script>
	export let data;
	const post = data.slug;
	console.log(post);
</script>

<h1>{post[0].title}</h1>
<h2>{post[0].excerpt}</h2>
<h3>{post[0].description}</h3>
