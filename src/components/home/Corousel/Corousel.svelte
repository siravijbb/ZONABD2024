<script>
	import { Carousel, Thumbnails, Button, Indicator } from 'flowbite-svelte';
	let index = 0;
	const images = [
		{
			title: '🐳Happy ZONA Day✨📍Cross Shinjuku Vision 📅14 July 2024',
			alt: '🐳Happy ZONA Day✨📍Cross Shinjuku Vision 📅14 July 2024',
			src: '/Overall/Corousel/CrossSHINJUKU.png',
			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: 'https://www.youtube.com/live/UitGTwsVXj4?si=R0dmXz6YW2kWjs7S'
		},
		{
			title: '🐳Happy ZONA Day✨📍MBK Center 📅13 - 19 July 2024',
			alt: '🐳Happy ZONA Day✨📍MBK Center 📅13 - 19 July 2024',
			src: '/Overall/Corousel/MBK.jpg',
			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: 'https://x.com/SetsuGi1/status/1805543924754530362'
		},
		{
			title: 'เซอร์ไพรส์สุดท้ายจากพวกเรา เปิดดูด้วยนะ! (กดที่ภาพได้เลย!)',
			alt: 'เซอร์ไพรส์สุดท้ายจากพวกเรา เปิดดูด้วยนะ! (กดที่ภาพได้เลย!)',
			src: '/Overall/Corousel/Cover.png',
			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: 'https://youtu.be/75gAt-D-qts?si=PJUFy22pEBC1eOwd'
		}
	];
	/**
	 * @type {{ alt: any; }}
	 */
	let image;
</script>

<div class="max-w-4xl">
	<div class=" mx-auto w-auto rounded bg-gray-500 md:mt-0">
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
			<Indicators />
		</Carousel>
	</div>
	<div
		class="example mx-3 mt-2 h-10 truncate rounded-lg bg-zona p-2 text-center font-['itim'] text-white"
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
