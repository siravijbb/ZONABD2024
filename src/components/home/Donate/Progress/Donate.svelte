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
			mlnumber = percentprogress * 1 - 2 + '%';
		} else if (percentprogress >= 97.5) {
			mlnumber = 97.5 + '%';
			ProgressBarPercent = 100;
		}
		Showdonate = '';
	});
</script>

<div class="relative mb-4 mt-8 w-full overflow-y-visible md:mt-20 {Showdonate} ">
	<Progressbar progress={ProgressBarPercent} size="h-5 md:h-7 w-full" color="green" />
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
