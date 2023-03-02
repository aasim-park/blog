<script>
	import user from '$lib/store/user.js';
	$: isLogedIn = $user === null ? false : true;
</script>

<div class="app">
	<main>
		{#if isLogedIn}
			<slot />
		{:else}
			<h1>
				Please login to edit post Blog
				<a href="/login">Sing in</a>
			</h1>
		{/if}
	</main>
</div>
