<script lang="ts">
	export let Wishdata: any;
</script>

<div id="countLimit" class="my-auto mt-1 grid grid-cols-1 gap-80 overscroll-none scroll-auto">
	<div
		id="onewish"
		class="outline-20 mx-auto h-[80vh] w-screen max-w-[349.333px] snap-y snap-mandatory space-y-20 overflow-x-scroll shadow-xl outline outline-offset-2 outline-[#c7722e] md:w-full md:outline-0 md:outline-offset-0"
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
								{#if wish.sidepicture == 1}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/1.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 2}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/2.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 3}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/3.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 4}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/4.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 5}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/5.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 6}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/6.png"
											alt="count"
									/>
								{/if}
							</div>
						</div>
						<div class="relative flex h-full flex-1 flex-col px-4 py-2 pb-9">
							<span
									class="my-auto justify-center whitespace-pre-line text-wrap break-normal break-words text-center text-[#4E4670] sm:text-xl z-50"
							>{wish.comment}
							</span>
							<div class="flex w-full px-2 pt-4 text-sm min-[425px]:px-4 min-[425px]:text-base" />
						</div>

						<div
								class=" absolute -bottom-4 right-10 z-[1] translate-x-[50%] -rotate-12 scale-[70%] min-[425px]:bottom-0 min-[425px]:right-14 min-[425px]:scale-100"
						>
							{#if wish.Bsidepicture == 1}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/1.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 2}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/2.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 3}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/3.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 4}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/4.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 5}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/5.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 6}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/6.png"
										alt="count"
								/>
							{/if}
						</div>

						<div class="absolute bottom-3 left-5 text-base text-[#4E4670] z-50">
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
								{#if wish.sidepicture == 1}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/1.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 2}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/2.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 3}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/3.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 4}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/4.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 5}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/5.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 6}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/6.png"
											alt="count"
									/>
								{/if}
							</div>
						</div>
						<div class="relative flex h-full flex-1 flex-col px-4 py-2 pb-9">
							<span
									class="my-auto justify-center whitespace-pre-line text-wrap break-normal break-words text-center text-[#4E4670] sm:text-xl z-50"
							>{wish.comment}
							</span>
							<div class="flex w-full px-2 pt-4 text-sm min-[425px]:px-4 min-[425px]:text-base" />
						</div>

						<div
								class=" absolute -bottom-4 right-10 z-[1] translate-x-[50%] -rotate-12 scale-[70%] min-[425px]:bottom-0 min-[425px]:right-14 min-[425px]:scale-100"
						>
							{#if wish.Bsidepicture == 1}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/1.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 2}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/2.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 3}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/3.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 4}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/4.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 5}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/5.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 6}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/6.png"
										alt="count"
								/>
							{/if}
						</div>

						<div class="absolute bottom-3 left-5 text-base text-[#4E4670] z-50">
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
								{#if wish.sidepicture == 1}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/1.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 2}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/2.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 3}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/3.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 4}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/4.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 5}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/5.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 6}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/6.png"
											alt="count"
									/>
								{/if}
							</div>
						</div>
						<div class="relative flex h-full flex-1 flex-col px-4 py-2 pb-9">
							<span
									class="my-auto justify-center whitespace-pre-line text-wrap break-normal break-words text-center text-[#4E4670] sm:text-xl z-50"
							>{wish.comment}
							</span>
							<div class="flex w-full px-2 pt-4 text-sm min-[425px]:px-4 min-[425px]:text-base" />
						</div>

						<div
								class=" absolute -bottom-4 right-10 z-[1] translate-x-[50%] -rotate-12 scale-[70%] min-[425px]:bottom-0 min-[425px]:right-14 min-[425px]:scale-100"
						>
							{#if wish.Bsidepicture == 1}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/1.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 2}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/2.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 3}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/3.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 4}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/4.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 5}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/5.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 6}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/6.png"
										alt="count"
								/>
							{/if}
						</div>

						<div class="absolute bottom-3 left-5  text-base text-[#4E4670] z-50">
							<p><b>{wish.name} #{wish.count} </b></p>
							<p>{wish.DMY} {wish.time}</p>
						</div>
					</div>
				</div>
			{:else if wish.picture == 4}
				<div
						class="relative flex h-full w-full max-w-[349.333px] snap-start justify-self-center overflow-hidden rounded-none bg-[#ffbc76] p-2 text-black/50 shadow-md min-h-96"
						data-aos="fade-in"
						id="one"
				>
					<div class="h-full w-full bg-white">
						<div class="absolute left-0 top-0 flex w-full flex-col px-4 py-2 pb-11">
							<div class="flex">
								{#if wish.sidepicture == 1}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/1.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 2}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/2.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 3}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/3.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 4}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/4.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 5}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/5.png"
											alt="count"
									/>
								{:else if wish.sidepicture == 6}
									<img
											class="z-10 -ml-6 -mt-5 h-20 object-contain"
											src="/Wish/Guppiens/6.png"
											alt="count"
									/>
								{/if}
							</div>
						</div>
						<div class="relative flex h-full flex-1 flex-col px-4 py-2 pb-9">
							<span
									class="my-auto justify-center whitespace-pre-line text-wrap break-normal break-words text-center text-[#4E4670] sm:text-xl z-50"
							>{wish.comment}
							</span>
							<div class="flex w-full px-2 pt-4 text-sm min-[425px]:px-4 min-[425px]:text-base" />
						</div>

						<div
								class=" absolute -bottom-4 right-10 z-[1] translate-x-[50%] -rotate-12 scale-[70%] min-[425px]:bottom-0 min-[425px]:right-14 min-[425px]:scale-100"
						>
							{#if wish.Bsidepicture == 1}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/1.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 2}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/2.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 3}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/3.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 4}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/4.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 5}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/5.png"
										alt="count"
								/>
							{:else if wish.Bsidepicture == 6}
								<img
										class="-mb-11 w-40 rotate-12"
										src="/Wish/Guppiens/6.png"
										alt="count"
								/>
							{/if}
						</div>

						<div class="absolute bottom-3 left-5  text-base text-[#4E4670] z-50">
							<p><b>{wish.name} #{wish.count} </b></p>
							<p>{wish.DMY} {wish.time}</p>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
