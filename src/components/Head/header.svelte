<script>
	export let title = 'Aisha Birthday 2024';
	export let description = 'Love you Aisha, From Guppiens';
	export let image = "/Wish/Guppiens/1.png"
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="view-transition" content="same-origin" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />

	<meta name="description" content={description} />
	<meta name="viewport" content="width=device-width" />
	<link rel="icon" type="image/svg+xml" href={image} />
	<title>{title}</title>

	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />

	<meta property="og:image" content={image} />
	<meta property="twitter:image" content={image} />
</svelte:head>
