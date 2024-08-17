<script lang="ts">
	import WebHeader from '$components/wishes/Header/Header.svelte';
	import type { ActionData, Actions } from './$types';
	import SendGift from '$components/wishes/Form/Gift/SendGift.svelte';
	import Sidepicture from '$components/wishes/Form/Gift/Sidepicture.svelte';
	import { Turnstile } from 'svelte-turnstile';
	import { enhance } from '$app/forms';
	import Example from '$components/wishes/Form/Gift/Example.svelte';
	import { onMount } from 'svelte';
	import WishboxButton from '$components/wishes/WishboxButton.svelte';
	import Displaywishbox from '$components/wishes/Wishbox/Displaywishbox.svelte';
	import SingleWishbox from '$components/wishes/Wishbox/SingleWishbox.svelte';
	import LayoutHeader from '$components/Head/header.svelte';
	import HBDwithCOro from '$components/wishes/Header/HBDwithCoro.svelte';
	import HBDWOCoro from '$components/wishes/Header/HBDWOCoro.svelte';
	import HBD from "$components/home/HBD/HBD.svelte";
	import 'aos/dist/aos.css';
	import BSidepicture from '$components/wishes/Form/Gift/BSidepicture.svelte';
	import {
		PUBLIC_WISHES,
	} from '$env/static/public';
	import AOS from "aos";


	////////////////
	let promise = fetchData();
	let Description = "Happy ZONA's Day 2024! By ZONATA Fanclub Project";
	export let form: ActionData;
	let forms: ActionData;
	let thisForm: HTMLFormElement;
	let loading = false;
	let SeletedGift = 1;
	let Selectpicture = 1;
	let BSelectpicture = 1;
	let Wishdata: any;
	let intervalId: any;
	let FirstTimeFetch = true;
	let WishboxDisplaySignle = false;
	let ExampleData = {
		name: '',
		comment: '',
		DMY: 'DMY',
		time: '14 July 2024',
		count: '14'
	};
	let Placeholdertext = {
		name: 'ชื่อของคุณ | Your Name',
		comment: 'คำอวยพรหรือสิ่งอยากบอกซนๆๆ | Your Wish or Something you want to say to ZONA!'
	};
	let FormLabelText = {
		namelabel: 'ชื่อ | Name',
		namesmall: 'จำกัด: 50 อักษร | Limit: 50 Character',
		thwishlabel: 'คำอวยพร | Your wish:',
		enwishlabel: '| Limit: ',
		wishsmall: 'จำกัด: 500 อักษร | Limit: 500 Character',
		thagreelabel: 'ข้าพเจ้าอนุญาตให้เผยแพร่คำอวยพร',
		engagreelabel: 'I agree to share my wish with publicss'
	};
	let Limit = {
		name: 50,
		maxwish: 500,
		minwish: 6
	};

	//////////

	function handleSubmit() {
		loading = true;
		setTimeout(() => {
			loading = false;
		}, 5000);
	}
	function nameInvalid() {
		const resultElement = document.getElementById('errorName');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ พี่ต้องบอกชื่อด้วย!';
		}
	}
	function wishInvalid() {
		const resultElement = document.getElementById('errorWish');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ พี่ใส่น้อยไป';
		}
	}
	function agreeInvalid() {
		const resultElement = document.getElementById('errorRead');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ คุณต้องยินยอมด้วย!';
		}
	}

	const siteKey = '0x4AAAAAAAdRXpX0iQ54gQNO';

	onMount(() => {
		AOS.init({
			// Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			once: true
		});
		AOS.refreshHard();
		fetchData();
	});

	async function Handlefetch() {
		promise = fetchData();
		FirstTimeFetch = false;
	}

	// $: {
	// 	if (EnableReatime) {
	// 		promise = setInterval(fetchData, 5000);
	// 	} else {
	//
	// 		clearInterval(intervalId);
	// 	}
	// }
	async function fetchData() {
		const response = await fetch("/Wishes.json");
		if (response.ok) {
			const json = await response.json();
			Wishdata = json
			return Wishdata
			}
	}
</script>
<HBD />
<div class="space-2 mx-auto grid w-full max-w-xl grid-cols-1 rounded-lg bg-gray-200 shadow-lg">
	<div class="mx-auto h-full w-full rounded-lg bg-white px-2 pb-4 shadow-lg md:mt-2">
		<LayoutHeader title="Happy ZONA's Day 2024!" description={Description} />

				<WebHeader />

		<div class="pb-2 pt-4">
			{#await promise}
			{:then Wishdata}


					<h3 class="important mt-2 text-center text-[#b90e0a]">
						ถ้าคุณยังไม่แน่ใจว่าส่งคำอวยพรหรือยัง
						<h3>
							ค้นหา
							<b class=" important inline"
								><a class="important -ml-1 inline text-blue-600" href="/checkwish"><b>ที่นี้</b></a
								></b
							>หรือ
							<b class=" important inline"
								><a
									class=" important -ml-1 inline text-blue-600"
									href="https://twitter.com/SierraB_Siravij"><b>ติดต่อสิราวิ้จจะบึได้เลย</b></a
								></b
							>
						</h3>
					</h3>
					<h3 class="important text-center text-[#b90e0a]">
						If you're not sure that you have send the wish yet,
						<h3>
							Find
							<b class="inline"
								><a class=" inline text-blue-600" target="_blank" href="/checkwish"><b> Here </b></a
								></b
							>Or
							<b class="inline"
								>contact <a
									class="inline text-blue-600 md:inline"
									target="_blank"
									href="https://twitter.com/SierraB_Siravij"><b>Siravij here!</b></a
								></b
							>
						</h3>
					</h3>
			{:catch error}
				<div class=" mx-auto text-xl text-red-600">
					<p class=" mx-auto text-center text-3xl text-red-600">Fail to fetch wishes data</p>
					<p class=" mx-auto text-center text-3xl text-red-600">{error.message}</p>
				</div>
			{/await}
		</div>
	</div>
</div>

{#key intervalId}
	{#await promise}
			<div class="mx-auto mt-7 max-w-4xl rounded-lg bg-white py-2 shadow-lg">
				<div class=" mx-auto my-2 text-red-600">
					<p class=" mx-auto text-center text-xl text-zona md:text-3xl">กำลังโหลดข้อมูล</p>
				</div>
			</div>
	{:then  Wishdata }
			<div class="mx-auto mt-7 max-w-4xl rounded-lg bg-white py-2 font-[itim] shadow-lg">

				<WishboxButton bind:WishboxDisplaySignle />
				{#await Wishdata}
					<div class="mx-auto mt-7 max-w-4xl rounded-lg bg-white py-2 shadow-lg">
						<div class=" mx-auto my-2 text-red-600">
							<p class=" mx-auto text-center text-xl text-zona md:text-3xl">กำลังโหลดข้อมูล</p>
						</div>
					</div>
					{:then  Wishdata}
					{#if !WishboxDisplaySignle}

					<div id="countLimit">

						<div
								id="onewish"
								class="my-auto mb-16 grid grid-cols-1 gap-3 overscroll-none scroll-auto text-wrap text-pretty px-2 md:grid-cols-2 lg:grid-cols-3"
						>
							{#each Wishdata as wish }
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
											<div class="relative flex h-full flex-1 flex-col px-4 py-12 pb-16">
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
											<div class="relative flex h-full flex-1 flex-col px-4 py-12 pb-16">
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
											<div class="relative flex h-full flex-1 flex-col px-4 py-12 pb-16">
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
											<div class="relative flex h-full flex-1 flex-col px-4 py-12 pb-16">
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
						{:else }
						<div id="countLimit" class="my-auto mb-16 mt-1 grid grid-cols-1 gap-80 overscroll-none scroll-auto">
							<div
									id="onewish"
									class="outline-20 mx-auto h-[80vh] w-screen max-w-[349.333px] snap-y snap-mandatory space-y-20 overflow-x-scroll shadow-xl outline outline-offset-2 outline-[#c7722e] md:w-full md:outline-0 md:outline-offset-0"
							>
								{#each Wishdata as wish }
									{#if wish.picture == 1}
										<div
												class="relative flex h-full min-h-96 w-full max-w-[349.333px] snap-start justify-self-center overflow-hidden rounded-none bg-zona p-2 text-black/50 shadow-md"
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


						{/if}

				{/await}
			</div>
	{/await}
{/key}
