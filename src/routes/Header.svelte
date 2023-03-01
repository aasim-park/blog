<script>
	import { signOut, onAuthStateChanged } from 'firebase/auth';
	import { auth } from '$lib/config/firebase.js';
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import user from '$lib/store/user.js';

	// $: isLogedIn = $user === null ? false : true;
	let loading = true;
	onAuthStateChanged(auth, (users) => {
		loading = false;
		if (users) user.update((val) => (val = { ...users }));
	});
	// $: userName = $user === null ? null : user.subscribe(v => v);
	let userName;
	user.subscribe((val) => {
		if (!val) return;
		userName = val.displayName;
	});
	let currentError;
	const logout = async () => {
		try {
			await signOut(auth);
			user.update((val) => (val = null));
		} catch (error) {
			currentError = error.message;
		}
	};
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="Home" />
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
	<div class="p-2 flex flex-col">
		{#if loading}
			<div class="flex items-center justify-center">
				<div
					class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
					role="status"
				>
					<span
						class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
						>Loading...</span
					>
				</div>
			</div>
		{:else if userName}
			<button class="lg:pt-2" type="button" value="Logout!" on:click={logout}>logout </button>
			<p class="hidden md:block">
				{userName}
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
		justify-content: space-around;
		align-items: center;
	}

	@media (min-width: 480px) {
		header {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
