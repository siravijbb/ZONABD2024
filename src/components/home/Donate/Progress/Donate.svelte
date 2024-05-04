<script lang="ts">
	import { Progressbar } from 'flowbite-svelte';
	export let percentprogress: number; // Declare percentprogress as a prop    let percent = 0;
	let percentlimit = Math.trunc(percentprogress);
	/**
	 * 0 36 90 x
	 * 0 43 92
	 * 0 46 95
	 *
	 */
	let sizexs = Math.trunc(90 * (percentlimit / 100));
	let sizesm = Math.trunc(92 * (percentlimit / 100));
	let sizemd = Math.trunc(95 * (percentlimit / 100));
</script>

<div class="mt-10 w-full overflow-y-visible md:mt-20">
	<Progressbar progress={percentprogress} size="h-5 md:h-7" color="green" />
	<div class="relative -ml-5 overflow-y-visible sm:-ml-0 md:-ml-5">
		<img
			src="/Overall/DonateGoal/rocket.png"
			alt="Goal!"
			class=" absolute h-14 md:h-24 lg:h-28 ml-[{sizemd}%] -mt-16 overflow-y-visible md:-mt-[105px] lg:-mt-[120px]"
		/>
	</div>
</div>
