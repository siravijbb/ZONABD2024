<script lang="ts">
	import Progress from '$components/home/Donate/Progress/Donate.svelte';
	let PercentProgress: number;
	export let totalRequired: number;
	let readableTotalRequired = numberWithCommas(totalRequired);
	export let totalDonated: number;
	let readableTotalDonated = numberWithCommas(totalDonated);
	let totalLeft = totalRequired - totalDonated;
	PercentProgress = parseFloat(((totalDonated / totalRequired) * 100).toFixed(2));
	function numberWithCommas(x: number): string {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
</script>

<div class="b mx-auto -mt-1 px-4 md:mt-2">
	<Progress percentprogress={PercentProgress} />
	<h2 class="-mt-8 text-center text-2xl font-semibold text-aisha md:-mt-16">
		We are {PercentProgress}% until complete
	</h2>
	<div class="mx-auto -mt-1 text-sm md:mt-0 md:text-lg">
		<small class="mx-auto -mt-1 block text-center"
			>ยอดสมทบทุนตอนนี้มี {readableTotalDonated} บาท</small
		>
		<small class="mx-auto -mt-1 block text-center md:-mt-2"
			>เราที่ต้องการ {readableTotalRequired} บาทเพื่อขึ้นป้ายBillboard</small
		>
	</div>
	<div class="">
		<img class="mx-auto h-60 w-auto" src="/Overall/donate.jpg" alt="QR PROMPPAY" />
		<div class="mx-auto block text-center">
			<small class=" text-center">บริจาคได้ที่</small>
			<div class="-mt-2">
				<p>sdfjmsekfjirjeklfejkl</p>
				<p class="-mt-1">sdfjmsekfjirjeklfejkl</p>
			</div>
		</div>
	</div>
</div>
