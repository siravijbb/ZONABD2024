<script>
	import '../app.pcss';
	import Navbar from '$components/navbar.svelte';
	import Footer from '$components/footer.svelte';
</script>

<body>
	<Navbar />
	<slot />
	<Footer />
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap');
	@font-face {
		font-family: 'Barlow Condensed';
		src: url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap')
			format('truetype');
	}
	@font-face {
		font-family: 'Noto Sans Thai Looped';
		src: url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap')
			format('truetype');
	}
	@font-face {
		font-family: 'itim';
		src: url('https://fonts.googleapis.com/css2?family=Itim:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap')
		format('truetype');
	}
	@font-face {
		font-family: 'IBM Plex Sans Thai';
		src: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap')
		format('truetype');
	}
	.HEADER {
		font-family: 'Barlow Condensed', 'Noto Sans Thai Looped', sans-serif;
	}

	body {
		font-family: 'IBM Plex Sans Thai', sans-serif;

		color: #333;
		background-color: #ecfee6;
	}
</style>
