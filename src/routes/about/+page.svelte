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
		Hello! My name is <span class="underline-about">Aasim Shaikh </span>and I am a software
		developer based in Mumbai. My area of expertise is cloud engineering, and I have experience
		setting up cloud virtual machines (VMs) in <span class="underline-about"> GCP, AWS,</span> and
		<span class="underline-about">Digital Ocean</span>
		environments. I am also skilled in creating Docker files and orchestrating them using Docker Compose.
		For container workloads, I have experience using AWS services such as
		<span class="underline-about">EKS </span>and <span class="underline-about">ECS</span> , and in
		GCP, I have deployed container workloads on GKE standard,
		<span class="underline-about"> Cloud Run </span>, and
		<span class="underline-about"> App Engine </span>
		. In terms of CI/CD, I have used AWS Pipeline and
		<span class="underline-about">Cloud Build</span>
		in GCP. For database management, I have set up cloud-specific databases such as Amazon RDS and DocumentDB.
		For basic setups, I create VMs for websites, set up networking with private and public routing options,
		and create shell scripts to unify workloads. With respect to source code management (SCM), I have
		experience using
		<span class="underline-about">Git, GitHub, Bitbucket </span>, and
		<span class="underline-about">GitLab</span>, as well as cloud-specific SCMs. Other cloud tools I
		have used include S3, Secret Manager, Elastic Beanstalk, Cloud Functions, Lambda, and various
		microservices and serverless tools.
	</div>
	<div class="title">Contact.</div>
	<div>
		<a href={resume}> Resume </a>
		<a href="mailto: asimshaikh1993@gmail.com?subject = Contact"> Send email </a>
	</div>
</div>

<style lang="postcss">
	.title {
		font-size: 50px;
		text-align: center;
	}
</style>
