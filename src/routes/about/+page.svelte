<script>
	import resume from '$lib/resume/Rezume.pdf';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this Website" />
</svelte:head>

<div class="text-column">
	<div class="title">About</div>
	<div class="text-justify p-3">
		<p>
			Welcome to my blog! My name is Aasim Shaikh, and I'm the writer and creator behind this blog.
			I started this blog as a way to share my thoughts and experiences on Cloud and DevOps and to
			connect with others who share my passion.
		</p>
		<p>
			As someone who has always loved DevOps and the cloud, I wanted to create a space where I could
			explore this interest in more depth and share my insights with others. Whether you're a fellow
			I hope you'll find something valuable on my blog for IT and DevOps enthusiast or simply
			curious about learning more.
		</p>
		<p>
			In my posts, I cover a wide range of topics related to the cloud, from DevOps to programming
			languages. It's never too late and I strive to communicate this message in a clear and
			engaging way.
		</p>
		<p>
			When I'm not blogging, you can usually find me playing video games, listening to audiobooks,
			meditating, or spending time with my family, pets, or friends.
		</p>
		<p>
			Thank you for visiting my blog, and I hope you enjoy your time here. If you have any questions
			or comments, feel free to reach out to me at the contact details below. I love hearing from my
			readers and welcome your feedback.
		</p>
	</div>
	<div class="title">Contact</div>
	<div class="flex m-2 justify-around">
		<button type="submit">
			<a
				class=" bg-colorTheme_1 hover:bg-colorTheme_1_light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				href={resume}
			>
				Resume
			</a>
		</button>
		<button type="submit">
			<a
				class=" bg-colorTheme_1 hover:bg-colorTheme_1_light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				href="mailto: asimshaikh1993@gmail.com?subject = Contact"
			>
				Send email
			</a>
		</button>
	</div>
</div>

<style lang="postcss">
	.title {
		font-size: 50px;
		text-align: center;
	}
</style>
