<script>
	export let data;
	const description = data.description.code;
	const id = data.id;
	const title = data.title;
	const excerpt = data.excerpt;
	console.log(id, title, excerpt);
	import { browser } from '$app/environment';

	if (browser) {
		const browserStorage = () => {
			window.localStorage.setItem('description', description);
			window.localStorage.setItem('title', title);
			window.localStorage.setItem('excerpt', excerpt);
			window.localStorage.setItem('id', id);
		};
		browserStorage();
	}
</script>

<div>
	<a href="/editblog"> edit Blog </a>
</div>
<article class="prose break-words md:m-auto">
	{@html description}
</article>
