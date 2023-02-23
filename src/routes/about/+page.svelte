<script>
	import resume from '$lib/resume/Rezume.pdf';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this Website" />
</svelte:head>

<div class="text-column">
	<h1>About</h1>
	<div class="hello">Hello !</div>
	<div class="name">I am Aasim Shaikh.</div>
	<div>
		I am a Software Developer living in Mumbai, India. Pursuing to be a cloud engineer. I have
		experience in
		<ul>
			<li>Setup cloud VMs in <b>GCP, AWS, and digital ocean</b> cloud environments.</li>

			<li>Make a <b>Dockerfile</b> and orchestrate it using <b>docker-compose</b>.</li>
			<li>Hands-on exprience on <b>Kubernetes cluster</b> in GCP and AWS.</li>
			<li><b>S3</b> for hosting static pages.</li>
			<li><b>Cloud Run</b> for running container-based workload.</li>
			<li><b>ECS</b> for Kubernetes-like experience on AWS.</li>
			<li>
				Database management in the cloud handled workload for DocumentDB (MongoDB on AWS), MYSQL
				instances in AWS and DigitalOcean.
			</li>
			<li>
				Setup pipeline in GCP to setup CI/CD using <b>code build</b> and Cloud Run.
			</li>
		</ul>
	</div>
	<div class="name">Contact.</div>
	<div>
		<a href={resume}> Resume </a>
		<a href="mailto: asimshaikh1993@gmail.com?subject = Contact"> Send email </a>
	</div>
</div>

<style>
	h1 {
		font-size: 60px;
	}
	.hello {
		font-size: 40px;
	}
	.name {
		font-size: 30px;
	}
</style>
