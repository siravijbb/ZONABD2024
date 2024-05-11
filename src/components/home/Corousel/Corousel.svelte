<script>
	import { Carousel, Thumbnails, Button, Indicator } from 'flowbite-svelte';
	let index = 0;
	const images = [
		{
			title: "ระดมทุนทำป้ายโฆษณา LED Happy Birthday Aisha Project ที่ Cross Shinjuku Vision, Happy\n" +
					"\t\tbirthday cake และร้านน้ำ Chatime เนื่องจากฉลองวันเกิดของ Virtual Idol Aisha",
			alt: "ระดมทุนทำป้ายโฆษณา LED Happy Birthday Aisha Project ที่ Cross Shinjuku Vision, Happy\n" +
					"\t\tbirthday cake และร้านน้ำ Chatime เนื่องจากฉลองวันเกิดของ Virtual Idol Aisha",
			src: '/Overall/Corousel/AISHARighere.png',
			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: '#ProjectInfo'
		},
		{
			title: "ระดมทุนทำป้ายโฆษณา LED Happy Birthday Aisha Project ที่ Cross Shinjuku Vision, Happy\n" +
					"\t\tbirthday cake และร้านน้ำ Chatime เนื่องจากฉลองวันเกิดของ Virtual Idol Aisha",
			alt: "ระดมทุนทำป้ายโฆษณา LED Happy Birthday Aisha Project ที่ Cross Shinjuku Vision, Happy\n" +
					"\t\tbirthday cake และร้านน้ำ Chatime เนื่องจากฉลองวันเกิดของ Virtual Idol Aisha",
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

<div class="max-w-4xl space-y-4">
	<div class=" mx-auto w-auto rounded md:mt-0">
		<Carousel {images} let:Controls let:Indicators imgClass="object-contain " duration={2500}>
			<Controls class="md:hidden" />
			<Indicators />
		</Carousel>
		<!-- <div
			class=" mx-3 my-2 h-10 rounded-lg bg-aisha p-2 text-center text-white shadow-lg truncate"
		>
			{image?.alt}
		</div> -->
	</div>
</div>
