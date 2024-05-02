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
	@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Noto+Sans+Thai+Looped:wght@400;600;700&display=swap');
	@font-face {
		font-family: 'Barlow Condensed';
		src: url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Noto+Sans+Thai+Looped:wght@400;600;700&display=swap')
			format('truetype');
	}
	@font-face {
		font-family: 'Noto Sans Thai Looped';
		src: url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Noto+Sans+Thai+Looped:wght@400;600;700&display=swap')
			format('truetype');
		unicode-range: U+0E00, U+0E7F; /* Latin glyphs */
	}

	body {
		font-family: 'Barlow Condensed', 'Noto Sans Thai Looped', sans-serif;

		color: #333;
		background-color: #f8f9fa;
	}
</style>
