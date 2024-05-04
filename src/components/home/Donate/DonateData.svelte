<script lang="ts">
	import Progress from '$components/home/Donate/Progress/Donate.svelte';
	import {Progressbar} from "flowbite-svelte";
	let PercentProgress: number;
	export let totalRequired: number;
	let readableTotalRequired = numberWithCommas(totalRequired);
	export let totalDonated: number;
	let readableTotalDonated = numberWithCommas(totalDonated);
	let totalLeft = totalRequired - totalDonated;
	PercentProgress = parseFloat(((totalDonated / totalRequired) * 100).toFixed(2));
	let colorcode = '#00a99d';
	let percentlimit = Math.trunc(PercentProgress);
	let sizemd = 0;
	/**
	 * 0 36 90 x
	 * 0 43 92
	 * 0 46 95
	 *
	 */

	sizemd = Math.trunc(95 * (percentlimit / 100));
	function numberWithCommas(x: number): string {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
</script>

<div class="b mx-auto -mt-1 px-4 md:mt-2">
	<div class="relative my-10 w-full overflow-y-visible md:my-20 ">
		<Progressbar progress={PercentProgress} size="h-5 md:h-7 w-full" color="green" />
		<div class=" -ml-5 overflow-y-visible sm:-ml-0 md:-ml-5 w-full">
			<img
					src="/Overall/DonateGoal/rocket.png"
					alt="Goal!"
					class=" static h-14 md:h-24 lg:h-28 ml-[{sizemd}%] md:ml-[{sizemd}%] -mt-16 overflow-y-visible md:-mt-[105px] lg:-mt-[120px]"
			/>
		</div>
	</div>

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
