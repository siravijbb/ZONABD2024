<script lang="ts">
	export let Wishdata: any;
</script>

<div id="countLimit">
	<div
		id="onewish"
		class="my-auto grid grid-cols-1 gap-5 overscroll-none scroll-auto text-wrap text-pretty px-2 md:grid-cols-2 lg:grid-cols-3"
	>
		{#each Wishdata.wish as wish (wish.count)}
			{#if wish.picture == 1}
				<div
					class="relative flex h-full w-full max-w-[349.333px] snap-start justify-self-center overflow-hidden rounded-none bg-aisha p-2 text-black/50 shadow-md min-h-96 "
					data-aos="fade-in"
					id="one"
				>
					<div class="h-full w-full bg-white">
						<div class="absolute left-0 top-0 flex w-full flex-col px-4 py-2 pb-11">
							<div class="flex">
								<img src="/static" class="z-10 -ml-14 -mt-9 h-40 object-contain" alt="gift" />
							</div>
						</div>
						<div class="relative flex h-full flex-1 flex-col px-4 py-2 pb-9">
							<span
								class="my-auto justify-center whitespace-pre-line text-wrap break-normal break-words text-center text-[#4E4670] sm:text-xl"
								>{wish.comment}
							</span>
							<div class="flex w-full px-2 pt-4 text-sm min-[425px]:px-4 min-[425px]:text-base" />
						</div>

						<div
							class=" absolute -bottom-4 right-10 z-[1] translate-x-[50%] -rotate-12 scale-[70%] min-[425px]:bottom-0 min-[425px]:right-14 min-[425px]:scale-100"
						>
							{#if wish.sidepicture == 1}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{:else if wish.sidepicture == 2}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{:else if wish.sidepicture == 3}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{:else if wish.sidepicture == 4}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{/if}
						</div>

						<div class="absolute bottom-3 left-5 text-base text-[#4E4670]">
							<p><b>{wish.name} #{wish.count} </b></p>
							<p>{wish.DMY} {wish.time}</p>
						</div>
					</div>
				</div>
			{:else if wish.picture == 2}
				<div
					class="relative flex h-full  w-full max-w-[349.333px] snap-start justify-self-center overflow-hidden rounded-none bg-[#163283] p-2 text-black/50 shadow-md min-h-96"
					data-aos="fade-in"
					id="one"
				>
					<div class="h-full w-full bg-white">
						<div class="absolute left-0 top-0 flex w-full flex-col px-4 py-2 pb-11">
							<div class="flex">
								<img src="/static" class="z-10 -ml-14 -mt-9 h-40 object-contain" alt="gift" />
							</div>
						</div>
						<div class="relative flex h-full flex-1 flex-col px-4 py-2 pb-9">
							<span
								class="my-auto justify-center whitespace-pre-line text-wrap break-normal break-words text-center text-[#4E4670] sm:text-xl"
								>{wish.comment}
							</span>
							<div class="flex w-full px-2 pt-4 text-sm min-[425px]:px-4 min-[425px]:text-base" />
						</div>

						<div
							class=" absolute -bottom-4 right-10 z-[1] translate-x-[50%] -rotate-12 scale-[70%] min-[425px]:bottom-0 min-[425px]:right-14 min-[425px]:scale-100"
						>
							{#if wish.sidepicture == 1}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{:else if wish.sidepicture == 2}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{:else if wish.sidepicture == 3}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{:else if wish.sidepicture == 4}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{/if}
						</div>

						<div class="absolute bottom-3 left-5 text-base text-[#4E4670]">
							<p><b>{wish.name} #{wish.count} </b></p>
							<p>{wish.DMY} {wish.time}</p>
						</div>
					</div>
				</div>
			{:else if wish.picture == 3}
				<div
					class="relative flex h-full w-full max-w-[349.333px] snap-start justify-self-center overflow-hidden rounded-none bg-[#EB96C2] p-2 text-black/50 shadow-md min-h-96"
					data-aos="fade-in"
					id="one"
				>
					<div class="h-full w-full bg-white">
						<div class="absolute left-0 top-0 flex w-full flex-col px-4 py-2 pb-11">
							<div class="flex">
								<img
									src="/Overall/DonateGoal/rocket.png"
									class="z-10 -ml-14 -mt-9 h-40 object-contain"
									alt="gift"
								/>
							</div>
						</div>
						<div class="relative flex h-full flex-1 flex-col px-4 py-2 pb-9">
							<span
								class="my-auto justify-center whitespace-pre-line text-wrap break-normal break-words text-center text-[#4E4670] sm:text-xl"
								>{wish.comment}
							</span>
							<div class="flex w-full px-2 pt-4 text-sm min-[425px]:px-4 min-[425px]:text-base" />
						</div>

						<div
							class=" absolute -bottom-4 right-10 z-[1] translate-x-[50%] -rotate-12 scale-[70%] min-[425px]:bottom-0 min-[425px]:right-14 min-[425px]:scale-100"
						>
							{#if wish.sidepicture == 1}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{:else if wish.sidepicture == 2}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{:else if wish.sidepicture == 3}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{:else if wish.sidepicture == 4}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{/if}
						</div>

						<div class="absolute bottom-3 left-5  text-base text-[#4E4670]">
							<p><b>{wish.name} #{wish.count} </b></p>
							<p>{wish.DMY} {wish.time}</p>
						</div>
					</div>
				</div>
			{:else if wish.picture == 4}
				<div
					class="relative flex h-full w-full max-w-[349.333px] snap-start justify-self-center overflow-hidden rounded-none bg-[#F9E6D5] p-2 text-black/50 shadow-md min-h-96"
					data-aos="fade-in"
					id="one"
				>
					<div class="h-full w-full bg-white">
						<div class="absolute left-0 top-0 flex w-full flex-col px-4 py-2 pb-11">
							<div class="flex">
								{#if wish.sidepicture == 1}
									<img
										class="-mb-11 w-40 rotate-12"
										src="/Overall/DonateGoal/rocket.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 2}
									<img
										class="-mb-11 w-40 rotate-12"
										src="/Overall/DonateGoal/rocket.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 3}
									<img
										class="-mb-11 w-40 rotate-12"
										src="/Overall/DonateGoal/rocket.png"
										alt="count"
									/>
								{:else if wish.sidepicture == 4}
									<img
										class="-mb-11 w-40 rotate-12"
										src="/Overall/DonateGoal/rocket.png"
										alt="count"
									/>
								{/if}
							</div>
						</div>
						<div class="relative flex h-full flex-1 flex-col px-4 py-2 pb-9">
							<span
								class="my-auto justify-center whitespace-pre-line text-wrap break-normal break-words text-center text-[#4E4670] sm:text-xl"
								>{wish.comment}
							</span>
							<div class="flex w-full px-2 pt-4 text-sm min-[425px]:px-4 min-[425px]:text-base" />
						</div>

						<div
							class=" absolute -bottom-4 right-10 z-[1] translate-x-[50%] -rotate-12 scale-[70%] min-[425px]:bottom-0 min-[425px]:right-14 min-[425px]:scale-100"
						>
							{#if wish.sidepicture == 1}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{:else if wish.sidepicture == 2}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{:else if wish.sidepicture == 3}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{:else if wish.sidepicture == 4}
								<img
									class="-mb-11 w-40 rotate-12"
									src="/Overall/DonateGoal/rocket.png"
									alt="count"
								/>
							{/if}
						</div>

						<div class="absolute bottom-3 left-5  text-base text-[#4E4670]">
							<p><b>{wish.name} #{wish.count} </b></p>
							<p>{wish.DMY} {wish.time}</p>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
