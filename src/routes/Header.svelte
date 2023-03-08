<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	$: user = $page?.data?.user?.displayName;
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="Home" />
			<!-- {$page?.data?.user?.displayName} -->
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
				<a href="/blog">blog</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>
	<div class="flex flex-col lg:flex-row lg:gap-3 m-2 p-1">
		{#if user}
			<form
				action="/logout"
				use:enhance={() => {
					return async ({ result }) => {
						invalidateAll();
						await applyAction(result);
					};
				}}
				method="POST"
			>
				<button
					class="p-1 bg-colorTheme_1 hover:bg-colorTheme_1_light text-white font-bold lg:py-2 lg:px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
					value="Logout!"
					>logout
				</button>
			</form>
			<p class="hidden md:text-center md:inline">
				{user}
			</p>
		{:else}
			<button>
				<a
					class="p-1 bg-colorTheme_1 hover:bg-colorTheme_1_light text-white font-bold lg:py-2 lg:px-4 rounded focus:outline-none focus:shadow-outline"
					href="/login">Sign in</a
				>
			</button>
		{/if}
	</div>
</header>

<style lang="postcss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	@media (min-width: 480px) {
		header {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
		}
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
