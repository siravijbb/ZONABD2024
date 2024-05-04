<script lang="ts">
	import Joinus from '$components/home/Join Us/JoinUs.svelte';
	import Donate from '$components/home/Donate/DonateData.svelte';
	import Overall from '$components/home/Overall/Overall.svelte';
	import Header from '$components/home/Header/Header.svelte';
	import { onMount } from 'svelte';
	let totalDonated = 0;
	let totalRequired = 20000;
	onMount(async () => {
		const response = await fetch('https://api-aisha2024.polygang.fan/api/home/donated');
		if (response.ok) {
			const json = await response.json();
			const data = json.tested[json.tested.length - 1];
			totalDonated = data.frontlineworkersvaccinated1stdose;
			totalRequired = data.frontlineworkersvaccinated2nddose;
		}
	});
</script>

<div class="mx-auto grid w-full max-w-4xl grid-cols-1 space-y-2 rounded-lg bg-gray-200 shadow-lg">
	<div class="mx-auto h-full w-full rounded-lg bg-white pb-9 shadow-lg md:mt-2">
		<Header />
		<Overall />
		<Donate {totalDonated} {totalRequired}></Donate>
		<Joinus />
	</div>
</div>
