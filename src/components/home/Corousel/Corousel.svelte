<script>
	import { Carousel, Thumbnails, Button, Indicator } from 'flowbite-svelte';
	let index = 0;
	const images = [
		{
			title: "Let's come and celebrate your owl-next-door's birthday🦉🪶✨",
			alt: "Let's come and celebrate your owl-next-door's birthday🦉🪶✨",
			src: '/Overall/AISHARighere.png',
			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: 'https://twitter.com/HokuPLG/status/1743212304219652251'
		},
		{
			title: "Let's come and celebrate your owl-next-door's birthday🦉🪶✨ 2",
			alt: "Let's come and celebrate your owl-next-door's birthday🦉🪶✨ 2",
			src: '/images/imgHoku/HOKUMRTSAMYAN.webp',
			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: 'https://twitter.com/HokuPLG/status/1743212304219652251'
		}
	];
	/**
	 * @type {{ alt: any; }}
	 */
	let image;
</script>

<div class="max-w-4xl space-y-4">
	<div class="max-w-4xl space-y-4 rounded bg-gray-500 py-4">
		<Carousel
			{images}
			imgClass="object-contain h-full w-fit rounded-sm"
			duration={7500}
			let:Indicators
			let:Controls
			on:change={({ detail }) => (image = detail)}
		>
			<a slot="slide" href={images[index]?.link} target="_blank" let:Slide let:index>
				<Slide image={images[index]} class="h-full w-fit rounded-sm object-contain" />
			</a>
			<Controls />
			<div class="-mb-8 pt-10">
				<Indicators />
			</div>
		</Carousel>
		<div
			class=" mx-3 my-2 h-10 rounded-lg bg-aisha p-2 text-center text-white shadow-lg truncate"
		>
			{image?.alt}
		</div>
	</div>
</div>
