<script lang="ts">
	import LayoutHeader from '$components/HeaderTag/header.svelte';
	import Joinus from '$components/home/Join Us/JoinUs.svelte';
	import Donate from '$components/home/Donate/DonateData.svelte';
	import Overall from '$components/home/Overall/Overall.svelte';
	import Header from '$components/home/Header/Header.svelte';
	let Description =
		'Aisha Project 2024 is a project for Aisha Thai Vtuber, In this year we are going to make an different than before, check our website for more information!';
	let promise = fetchData();
	import { onMount } from 'svelte';
	import DonateInfo from "$components/home/Donate/DonateInfo.svelte";
	let totalDonated = 40000;
	let totalRequired = 60000;
	onMount(() => {
		fetchData();
	});
	async function fetchData() {
		const response = await fetch('https://api-aishahbd2024backend.netlify.app/api');
		if (response.ok) {
			const json = await response.json();
			const Donated = json.body.Donated; // Assuming this is a zero-based index
			const Needed = json.body.Needed;
			totalDonated = Donated;
			totalRequired = Needed;
			return { totalDonated, totalRequired };
		} else {
			throw new Error(response.status as unknown as string);
		}
	}
</script>

<LayoutHeader title="HBD Aisha Project 2024" description={Description} />
<div class="mx-auto grid w-full max-w-4xl grid-cols-1 space-y-2 rounded-lg bg-gray-200 shadow-lg">
	<div class="mx-auto h-full w-full overflow-x-hidden rounded-lg bg-white pb-9 shadow-lg md:mt-2">
		<Header />
		<Overall />
		{#await promise}
			<div class=" mx-auto text-red-600">
				<p class=" mx-auto text-center text-xl  md:text-3xl text-aisha">กำลังโหลดจำนวนเงินสมทบทุนล่าสุด</p>
			</div>
		{:then data}
			<Donate {totalDonated} {totalRequired}></Donate>
		{:catch error}
			<div class=" mx-auto text-xl text-red-600">
				<p class=" mx-auto text-center text-3xl text-red-600">Fail to fetch donate data</p>
				<p class=" mx-auto text-center text-3xl text-red-600">{error.message}</p>
			</div>
			<DonateInfo />
		{/await}
		<Joinus />
	</div>
</div>
