<script lang="ts">
	import Progress from '$components/home/Donate/Progress/Donate.svelte';
	import Donate from '$components/home/Donate/Progress/Donate.svelte';
	import DonateInfo from '$components/home/Donate/DonateInfo.svelte';
	let PercentProgress: number;
	export let totalRequired: number;
	let readableTotalRequired = numberWithCommas(totalRequired);
	export let totalDonated: number;
	let readableTotalDonated = numberWithCommas(totalDonated);
	let totalLeft = totalRequired - totalDonated;
	let CompletedHidden = false;
	PercentProgress = parseFloat(((totalDonated / totalRequired) * 100).toFixed(2));
	function numberWithCommas(x: number): string {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
	if (PercentProgress >= 100) {
		CompletedHidden = true;
	}
</script>

<div class="b mx-auto px-4 md:-mb-2 md:mt-2">
	<Progress percentprogress={PercentProgress} />
	{#if CompletedHidden === false}
		<h2 class="text-center text-2xl font-semibold text-zona">
			We are {PercentProgress}% until complete
		</h2>
	{:else}
		<h2 class="text-center text-2xl font-semibold text-zona">
			We are {PercentProgress}% complete
		</h2>
	{/if}

	<div class="mx-auto -mt-1 text-sm md:mt-0 md:text-lg">
		<small class="mx-auto -mt-1 block text-center"
			>ยอดสมทบทุนตอนนี้มี {readableTotalDonated} บาท</small
		>
		<small class="mx-auto -mt-1 block text-center md:-mt-2"
			>เราที่ต้องการ {readableTotalRequired} บาทเพื่อขึ้นป้ายBillboard</small
		>
	</div>
	<DonateInfo />
</div>
