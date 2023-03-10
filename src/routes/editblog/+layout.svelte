<script lang='ts'>
	import { page } from '$app/stores';
</script>

<div class="app">
	{#if $page?.data?.user?.displayName}
		<main>
			<slot />
		</main>
	{:else}
		<h1>
			Please
			<a href="/login"> login </a>
			to edit
		</h1>
	{/if}
</div>
