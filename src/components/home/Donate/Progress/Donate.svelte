<script lang="ts">
	import { Progressbar } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	export let percentprogress: number; // Declare percentprogress as a prop    let percent = 0;
	let percentlimit = Math.trunc(percentprogress);
	let sizemd: number | string;
	/**
	 * 0 36 90 x
	 * 0 43 92
	 * 0 46 95
	 *
	 */

	sizemd = 22;
	let mlnumber = (percentprogress * 0.92) + '%';

</script>

<div class="relative my-10 w-full overflow-y-visible md:my-20 ">
	<Progressbar progress={percentprogress} size="h-5 md:h-7 w-full" color="green" />
	<div class=" -ml-5 overflow-y-visible sm:-ml-0 md:-ml-5 w-full" style="--theme-color: {mlnumber}">
		<img
			src="/Overall/DonateGoal/rocket.png"
			alt="Goal!"
			class=" relative h-14 md:h-24 lg:h-28  -mt-16 overflow-y-visible md:-mt-[105px] lg:-mt-[120px]"
		/>
	</div>
</div>


<style>
	img {
		margin-left: var(--theme-color);
	}
</style>