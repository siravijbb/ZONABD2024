<script>
	import '../app.pcss';
	import Navbar from '$components/navbar.svelte';
	import Footer from '$components/footer.svelte';
	import Credit from "$components/wishes/Credit/Credit.svelte";
</script>

<body class="bg-zona/35">
	<Navbar />
	<slot />
	<Footer />
	<Credit />
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600&family=Itim&display=swap');

	@font-face {
		font-family: 'itim';
		src: url('https://fonts.googleapis.com/css2?family=Itim&display=swap')
		format('truetype');
	}
	@font-face {
		font-family: 'IBM Plex Sans Thai';
		src: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap')
		format('truetype');
	}

	body {
		font-family: 'IBM Plex Sans Thai', sans-serif;
	}
</style>
