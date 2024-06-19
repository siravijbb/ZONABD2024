<script lang="ts">
	import { Progressbar } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	export let percentprogress: number;
	let Showdonate = 'hidden';
	let ProgressBarPercent: number;
	/**
	 * 0 36 90 x
	 * 0 43 92
	 * 0 46 95
	 *
	 */

	let mlnumber = 0 + '%';
	onMount(async () => {
		ProgressBarPercent = percentprogress;
		if (percentprogress <= 2 && percentprogress < 100) {
			mlnumber = percentprogress - 2 + '%';
		} else if (percentprogress > 2 && percentprogress < 97.5) {
			mlnumber = percentprogress - 2 + '%';
		} else if (percentprogress >= 97.5) {
			mlnumber = 97.5 + '%';
			ProgressBarPercent = 100;
		}

		if (percentprogress < 67) {
			ProgressBarPercent = percentprogress * 0.749625187;
			mlnumber = ProgressBarPercent - 2 + '%';
		} else if (percentprogress > 67 && percentprogress < 78.4) {
			ProgressBarPercent = percentprogress * 0.957854406;
			mlnumber = ProgressBarPercent - 2 + '%';
		} else {
			ProgressBarPercent = percentprogress;
			if (percentprogress >= 97.5) {
				ProgressBarPercent = 100;
			}
		}

		Showdonate = '';
	});
</script>

<div class="relative mb-16 mt-8 w-full overflow-y-visible md:mb-14 md:mt-20 {Showdonate} ">
	<img src="/Overall/DonateGoal/progress2.png" alt="" class="static -mb-5 hidden h-auto w-full" />
	<div class="h-5 w-full rounded-full bg-blue-900 md:h-7">
		<div
			class="h-5 w-full rounded-full bg-green-600 md:h-7"
			style="width: {ProgressBarPercent}%"
		></div>
		<div
			class="right-50 absolute z-50 -mt-5 h-5 w-1 rounded-full bg-yellow-400 md:-mt-7 md:h-7 md:w-1"
			style="margin-left: {ProgressBarPercent - 0.5}%"
		></div>
		<div
			class="right-50 relative -mt-5 ml-[48%] h-5 w-5 rounded-full bg-aisha md:-mt-7 md:h-7 md:w-7"
		>
			<p class="md:text-md relative mx-auto -ml-14 w-fit pt-7 text-center text-sm md:-ml-6 md:pt-9">
				LED Billboard!
			</p>
		</div>
		<div
			class="right-50 relative -mt-5 ml-[73%] h-5 w-5 rounded-full bg-aisha md:-mt-7 md:h-7 md:w-7"
		>
			<p class="md:text-md relative mx-auto -ml-8 w-20 pt-7 text-center text-sm md:-ml-6 md:pt-9">
				เค้กวันเกิดของไอช่า!
			</p>
		</div>
		<div
			class="right-50 relative -mt-5 ml-[96%] h-5 w-5 rounded-full bg-aisha md:-mt-7 md:ml-[97%] md:h-7 md:w-7"
		>
			<p class="md:text-md relative mx-auto -ml-6 w-fit pt-7 text-center text-sm md:pt-9">
				ChaTime Cafe!
			</p>
		</div>
	</div>

	<div class=" -ml-5 w-full overflow-y-visible sm:-ml-0 md:-ml-5" style="--theme-color: {mlnumber}">
		<img
			src="/Overall/DonateGoal/rocket.png"
			alt="Goal!"
			class=" relative -mt-16 h-14 overflow-y-visible md:-mt-[105px] md:h-24 lg:-mt-[120px] lg:h-28"
		/>
	</div>
</div>

<style>
	img {
		margin-left: var(--theme-color);
	}
</style>
