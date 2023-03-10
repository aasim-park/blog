<script lang="ts">
	import github from '$lib/images/github.svg';
</script>

<footer>
	<p class="text-m">Copyright &#169 2023</p>
	<a href="https://github.com/aasim-park?tab=repositories">
		<img class="w-6" src={github} alt="GitHub" />
	</a>
</footer>

<style lang="postcss">
	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 12px;
		gap: 10px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
