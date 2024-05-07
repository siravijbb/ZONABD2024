<script lang="ts">
	import LayoutHeader from '$components/HeaderTag/header.svelte';
	import Joinus from '$components/home/Join Us/JoinUs.svelte';
	import Donate from '$components/home/Donate/DonateData.svelte';
	import Overall from '$components/home/Overall/Overall.svelte';
	import Header from '$components/home/Header/Header.svelte';
	let Description = "Aisha Project 2024 is a project for Aisha Thai Vtuber, In this year we are going to make an different than before, check our website for more information!";
	let promise = fetchData();
	import { onMount } from 'svelte';
	let totalDonated = 0;
	let totalRequired = 20000;
	onMount(() =>{
		fetchData()
		let interval = setInterval(fetchData, 6000000); // Poll every 5 seconds
		console;
		return () => {
			clearInterval(interval);
		};
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
		}
		else{
			totalDonated = 5;
			totalRequired = 20000;

		}}

</script>


<LayoutHeader title="HBD Aisha Project 2024" description="{Description}"/>
<div class="mx-auto grid w-full max-w-4xl grid-cols-1 space-y-2 rounded-lg bg-gray-200 shadow-lg">
	<div class="mx-auto h-full w-full overflow-x-hidden rounded-lg bg-white pb-9 shadow-lg md:mt-2">
		<Header />
		<Overall />
		{#await promise}
			<Donate {totalDonated} {totalRequired}></Donate>
		{:then data}
			<Donate {totalDonated} {totalRequired}></Donate>
		{/await}
		<Joinus />
	</div>
</div>
