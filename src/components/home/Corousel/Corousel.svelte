<script>
	import { Carousel, Thumbnails, Button, Indicator } from 'flowbite-svelte';
	let index = 0;
	const images = [
		{
			title:
				'ระดมทุนทำป้ายโฆษณา LED Happy Birthday Aisha Project ที่ Cross Shinjuku Vision, Happy\n' +
				'\t\tbirthday cake และร้านน้ำ Chatime เนื่องจากฉลองวันเกิดของ Virtual Idol Aisha',
			alt:
				'ระดมทุนทำป้ายโฆษณา LED Happy Birthday Aisha Project ที่ Cross Shinjuku Vision',
			src: '/Overall/Corousel/AISHARighere.png',
			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: '#ProjectInfo'
		},
		{
			title:
				'ระดมทุนทำป้ายโฆษณา LED Happy Birthday Aisha Project ที่ Cross Shinjuku Vision, Happy\n' +
				'\t\tbirthday cake และร้านน้ำ Chatime เนื่องจากฉลองวันเกิดของ Virtual Idol Aisha',
			alt:
				'ระดมทุนทำป้ายโฆษณา LED Happy Birthday Aisha Project ที่ Cross Shinjuku Vision',
			src: '/Overall/Corousel/AISHARighere2.png',
			imgClass: ' w-auto rounded-sm',
			link: '#ProjectInfo'
		}
	];
	/**
	 * @type {{ alt: any; }}
	 */
	let image;
</script>

<div class="max-w-4xl ">
	<div class=" mx-auto w-auto rounded md:mt-0 bg-gray-500">
		<Carousel
				{images}
				imgClass="object-contain h-full w-fit rounded-sm"
				duration={7500}
				let:Indicators
				let:Controls
				on:change={({ detail }) => (image = detail)}
		>
			<a slot="slide" href={images[index]?.link} target="_blank" let:Slide let:index>
				<Slide image={images[index]} class="object-contain h-full w-fit rounded-sm" />
			</a>
			<Controls />
			<Indicators />
		</Carousel>
	</div>
	<div
			class=" h-10 mx-3 bg-aisha text-white p-2 mt-2 text-center rounded-lg font-['itim'] "
	>
		{image?.alt}
	</div>
</div>
