<script>
	import { signOut,onAuthStateChanged } from 'firebase/auth';
	import { auth } from '$lib/config/firebase.js';
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import user from '$lib/store/user.js';

	$: isLogedIn = $user === null ? false : true;

	// $: userName = $user === null ? null : user.subscribe(v => v);
	let userName;
	user.subscribe((val) => {
		console.log(val)
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
	onAuthStateChanged(auth, (users) => {
		if (users) user.update((val) => (val = { ...users }));
	});
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

	<div>
		<div class="flex p-2 gap-2">
			{#if isLogedIn}
				<input type="button" value="Logout!" on:click={logout} />
				{userName}
			{:else}
				<a href="/login">Sign in</a>
			{/if}
			<a href="https://github.com/aasim-park?tab=repositories">
				<img class="w-6" src={github} alt="GitHub" />
			</a>
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
