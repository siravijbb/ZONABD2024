<script>
	import { Carousel, Thumbnails, Button, Indicator } from 'flowbite-svelte';
	let index = 0;
	const images = [
		{
			title:
				'ระดมทุนทำป้ายโฆษณา LED Happy Birthday Aisha Project \n' +
				'\t\tbirthday cake และร้านน้ำ Chatime เนื่องจากฉลองวันเกิดของ Virtual Idol Aisha',
			alt:
				'ระดมทุนทำป้ายโฆษณา LED Happy Birthday Aisha Project',
			src: '/Overall/Corousel/AISHARighere.png',
			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: '#ProjectInfo'
		},
		{
			title:
				'ระดมทุนทำป้ายโฆษณา LED Happy Birthday Aisha Project , Happy\n' +
				'\t\tbirthday cake และร้านน้ำ Chatime เนื่องจากฉลองวันเกิดของ Virtual Idol Aisha',
			alt:
				'ระดมทุนทำป้ายโฆษณา LED Happy Birthday Aisha Project',
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
	<div class=" mx-auto w-auto rounded md:mt-0 bg-gray-500 ">
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
			class="example h-10 mx-3 bg-aisha text-white p-2 mt-2 text-center rounded-lg font-['itim'] "
	>
		{image?.alt}
	</div>
</div>
<!--
<div class="max-w-4xl h-48 md:h-[24.25rem]">
	<iframe
			width="100%"
			height="100%"
			src="playlist=vyR5W0PNxwo&enablejsapi=1&origin=https%3A%2F%2Fhokubirthday2024.polygang.fan&widgetid=1"
			id="widget2"
	/>
</div>
-->


<style>
	@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&family=Itim&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap');
	@font-face {
		font-family: 'itim';
		src: url('https://fonts.googleapis.com/css2?family=Itim:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap')
		format('truetype');
	}
	@font-face {
		font-family: 'IBM Plex Sans Thai';
		src: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap')
		format('truetype');
	}

	form {
		font-family: 'IBM Plex Sans Thai', sans-serif;
	}
	.important {
		font-family: 'IBM Plex Sans Thai', sans-serif;
	}
	.example {
		font-family: itim, sans-serif;
	}
</style>

