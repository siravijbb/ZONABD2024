<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';

	export let Wishdata: any;
	onMount(() => {
		AOS.init({
			// Global settings:
			disable: true, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			once: true
		});
		AOS.refreshHard();
	});
</script>

<div id="countLimit" class="my-auto mb-16 mt-1 grid grid-cols-1 gap-80 overscroll-none scroll-auto">
	<div
		id="onewish"
		class="outline-20 mx-auto h-[80vh] w-screen max-w-[349.333px] snap-y snap-mandatory space-y-20 overflow-x-scroll shadow-xl outline outline-offset-2 outline-[#c7722e] md:w-full md:outline-0 md:outline-offset-0"
	>
		{#each Wishdata.wish as wish (wish.count)}
			{#if wish.picture == 1}
				<div
					class="relative flex h-full min-h-96 w-full max-w-[349.333px] snap-start justify-self-center overflow-hidden rounded-none bg-zona p-2 text-black/50 shadow-md"
					data-aos="fade-in"
					id="one"
				>
					<div class="h-full w-full bg-white">
						<div class="absolute left-0 top-0 flex w-full flex-col px-4 py-2 pb-11">
							<div class="flex">
								{#if wish.sidepicture == 1}
									<img
										class="z-10 -ml-4 -mt-5 h-20 object-contain"
										src="/Wish/ZONA/1.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 2}
									<img
										class="z-10 -ml-5 -mt-2 h-20 object-contain"
										src="/Wish/ZONA/2.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 3}
									<img
										class="z-10 -ml-5 -mt-2 h-20 object-contain"
										src="/Wish/ZONA/3.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 4}
									<img
										class="z-10 -ml-5 -mt-2 h-20 object-contain"
										src="/Wish/ZONA/4.png"
										alt="count"
									/>
								{/if}
							</div>
						</div>
						<div class="relative flex h-full flex-1 flex-col px-4 py-2 pb-9">
							<span
								class="z-50 my-auto justify-center whitespace-pre-line text-wrap break-normal break-words text-center text-[#4E4670] sm:text-xl"
								>{wish.comment}
							</span>
							<div class="flex w-full px-2 pt-4 text-sm min-[425px]:px-4 min-[425px]:text-base" />
						</div>

						<div
							class=" absolute -bottom-4 right-10 z-[1] translate-x-[50%] -rotate-12 scale-[70%] min-[425px]:bottom-0 min-[425px]:right-14 min-[425px]:scale-100"
						>
							{#if wish.Bsidepicture == 1}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/1.png" alt="count" />
							{:else if wish.Bsidepicture == 2}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/2.png" alt="count" />
							{:else if wish.Bsidepicture == 3}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/3.png" alt="count" />
							{:else if wish.Bsidepicture == 4}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/4.png" alt="count" />
							{/if}
						</div>

						<div class="absolute bottom-3 left-5 z-50 text-base text-[#4E4670]">
							<p><b>{wish.name} #{wish.count} </b></p>
							<p>{wish.DMY} {wish.time}</p>
						</div>
					</div>
				</div>
			{:else if wish.picture == 2}
				<div
					class="relative flex h-full min-h-96 w-full max-w-[349.333px] snap-start justify-self-center overflow-hidden rounded-none bg-zona-SLIVER p-2 text-black/50 shadow-md"
					data-aos="fade-in"
					id="one"
				>
					<div class="h-full w-full bg-white">
						<div class="absolute left-0 top-0 flex w-full flex-col px-4 py-2 pb-11">
							<div class="flex">
								{#if wish.sidepicture == 1}
									<img
										class="z-10 -ml-4 -mt-5 h-20 object-contain"
										src="/Wish/ZONA/1.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 2}
									<img
										class="z-10 -ml-5 -mt-2 h-20 object-contain"
										src="/Wish/ZONA/2.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 3}
									<img
										class="z-10 -ml-5 -mt-2 h-20 object-contain"
										src="/Wish/ZONA/3.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 4}
									<img
										class="z-10 -ml-5 -mt-2 h-20 object-contain"
										src="/Wish/ZONA/4.png"
										alt="count"
									/>
								{/if}
							</div>
						</div>
						<div class="relative flex h-full flex-1 flex-col px-4 py-2 pb-9">
							<span
								class="z-50 my-auto justify-center whitespace-pre-line text-wrap break-normal break-words text-center text-[#4E4670] sm:text-xl"
								>{wish.comment}
							</span>
							<div class="flex w-full px-2 pt-4 text-sm min-[425px]:px-4 min-[425px]:text-base" />
						</div>

						<div
							class=" absolute -bottom-4 right-10 z-[1] translate-x-[50%] -rotate-12 scale-[70%] min-[425px]:bottom-0 min-[425px]:right-14 min-[425px]:scale-100"
						>
							{#if wish.Bsidepicture == 1}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/1.png" alt="count" />
							{:else if wish.Bsidepicture == 2}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/2.png" alt="count" />
							{:else if wish.Bsidepicture == 3}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/3.png" alt="count" />
							{:else if wish.Bsidepicture == 4}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/4.png" alt="count" />
							{/if}
						</div>

						<div class="absolute bottom-3 left-5 z-50 text-base text-[#4E4670]">
							<p><b>{wish.name} #{wish.count} </b></p>
							<p>{wish.DMY} {wish.time}</p>
						</div>
					</div>
				</div>
			{:else if wish.picture == 3}
				<div
					class="relative flex h-full min-h-96 w-full max-w-[349.333px] snap-start justify-self-center overflow-hidden rounded-none bg-zona-SKY p-2 text-black/50 shadow-md"
					data-aos="fade-in"
					id="one"
				>
					<div class="h-full w-full bg-white">
						<div class="absolute left-0 top-0 flex w-full flex-col px-4 py-2 pb-11">
							<div class="flex">
								{#if wish.sidepicture == 1}
									<img
										class="z-10 -ml-4 -mt-5 h-20 object-contain"
										src="/Wish/ZONA/1.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 2}
									<img
										class="z-10 -ml-5 -mt-2 h-20 object-contain"
										src="/Wish/ZONA/2.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 3}
									<img
										class="z-10 -ml-5 -mt-2 h-20 object-contain"
										src="/Wish/ZONA/3.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 4}
									<img
										class="z-10 -ml-5 -mt-2 h-20 object-contain"
										src="/Wish/ZONA/4.png"
										alt="count"
									/>
								{/if}
							</div>
						</div>
						<div class="relative flex h-full flex-1 flex-col px-4 py-2 pb-9">
							<span
								class="z-50 my-auto justify-center whitespace-pre-line text-wrap break-normal break-words text-center text-[#4E4670] sm:text-xl"
								>{wish.comment}
							</span>
							<div class="flex w-full px-2 pt-4 text-sm min-[425px]:px-4 min-[425px]:text-base" />
						</div>

						<div
							class=" absolute -bottom-4 right-10 z-[1] translate-x-[50%] -rotate-12 scale-[70%] min-[425px]:bottom-0 min-[425px]:right-14 min-[425px]:scale-100"
						>
							{#if wish.Bsidepicture == 1}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/1.png" alt="count" />
							{:else if wish.Bsidepicture == 2}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/2.png" alt="count" />
							{:else if wish.Bsidepicture == 3}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/3.png" alt="count" />
							{:else if wish.Bsidepicture == 4}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/4.png" alt="count" />
							{/if}
						</div>

						<div class="absolute bottom-3 left-5 z-50 text-base text-[#4E4670]">
							<p><b>{wish.name} #{wish.count} </b></p>
							<p>{wish.DMY} {wish.time}</p>
						</div>
					</div>
				</div>
			{:else if wish.picture == 4}
				<div
					class="relative flex h-full min-h-96 w-full max-w-[349.333px] snap-start justify-self-center overflow-hidden rounded-none bg-zona-GOLD p-2 text-black/50 shadow-md"
					data-aos="fade-in"
					id="one"
				>
					<div class="h-full w-full bg-white">
						<div class="absolute left-0 top-0 flex w-full flex-col px-4 py-2 pb-11">
							<div class="flex">
								{#if wish.sidepicture == 1}
									<img
										class="z-10 -ml-4 -mt-5 h-20 object-contain"
										src="/Wish/ZONA/1.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 2}
									<img
										class="z-10 -ml-5 -mt-2 h-20 object-contain"
										src="/Wish/ZONA/2.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 3}
									<img
										class="z-10 -ml-5 -mt-2 h-20 object-contain"
										src="/Wish/ZONA/3.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 4}
									<img
										class="z-10 -ml-5 -mt-2 h-20 object-contain"
										src="/Wish/ZONA/4.png"
										alt="count"
									/>
								{/if}
							</div>
						</div>
						<div class="relative flex h-full flex-1 flex-col px-4 py-2 pb-9">
							<span
								class="z-50 my-auto justify-center whitespace-pre-line text-wrap break-normal break-words text-center text-[#4E4670] sm:text-xl"
								>{wish.comment}
							</span>
							<div class="flex w-full px-2 pt-4 text-sm min-[425px]:px-4 min-[425px]:text-base" />
						</div>

						<div
							class=" absolute -bottom-4 right-10 z-[1] translate-x-[50%] -rotate-12 scale-[70%] min-[425px]:bottom-0 min-[425px]:right-14 min-[425px]:scale-100"
						>
							{#if wish.Bsidepicture == 1}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/1.png" alt="count" />
							{:else if wish.Bsidepicture == 2}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/2.png" alt="count" />
							{:else if wish.Bsidepicture == 3}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/3.png" alt="count" />
							{:else if wish.Bsidepicture == 4}
								<img class="-mb-0.5 w-28 rotate-12" src="/Wish/ZONA/4.png" alt="count" />
							{/if}
						</div>

						<div class="absolute bottom-3 left-5 z-50 text-base text-[#4E4670]">
							<p><b>{wish.name} #{wish.count} </b></p>
							<p>{wish.DMY} {wish.time}</p>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
