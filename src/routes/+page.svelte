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
	import HBDWOCoro from "$components/wishes/Header/HBDWOCoro.svelte";


	///
	import { Alert, Button } from 'flowbite-svelte';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import { fly } from 'svelte/transition';
	import BSidepicture from "$components/wishes/Form/Gift/BSidepicture.svelte";

	////////////////
	let promise = fetchData();
	let Description = 'Happy Birth Day ZONA!';
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
		comment: 'คำอวยพรหรือสิ่งอยากบอกไอช่า! | Your Wish or Something you want to say to Aisha!'
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
		}, 300000);
	}
	function nameInvalid() {
		const resultElement = document.getElementById('errorName');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ คุณต้องบอกชื่อด้วย!';
		}
	}
	function wishInvalid() {
		const resultElement = document.getElementById('errorWish');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ คุณ! ใส่น้อยไปหน่อยไหมคุณณณ';
		}
	}
	function agreeInvalid() {
		const resultElement = document.getElementById('errorRead');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ คุณต้องยินยอมด้วย!';
		}
	}


	const siteKey = '1x00000000000000000000AA';

	onMount(() => {
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
		const response = await fetch('https://api-zonabd2024.polygang.fan/api/Getwishes');
		if (response.ok) {
			const json = await response.json();
			Wishdata = json.body;
			return { Wishdata };
		} else {
			throw new Error(response.status as unknown as string);
		}
	}
</script>

<Alert color="red" dismissable>
	<InfoCircleSolid slot="icon" class="w-5 h-5" />
ยังไม่เปิด!!!!!!!!!!!!
</Alert>

<div class="space-2 mx-auto grid w-full max-w-xl grid-cols-1 rounded-lg bg-gray-200 shadow-lg">
	<div class="mx-auto h-full w-full rounded-lg bg-white px-2 pb-4 shadow-lg md:mt-2">
		<LayoutHeader title="Happy ZONA Project 2024" description={Description} />
		{#await promise}
			<WebHeader />
		{:then { Wishdata }}
			{#if Wishdata.accepting  && !Wishdata.canreadnow}
			<WebHeader />
			{:else if !Wishdata.accepting && !Wishdata.canreadnow}
				<WebHeader />
			{:else if Wishdata.accepting  && Wishdata.canreadnow}
			<HBDWOCoro />
			{:else}
			<HBDwithCOro />
			{/if}
		{/await}
		<div class="pb-2 pt-4">
			{#await promise}
				{#if !FirstTimeFetch}
					<div class="example -mt-6 font-[itim]">
						<Example bwish={ExampleData} selected={SeletedGift} SidePicture={Selectpicture} BSidePicture={BSelectpicture} />
					</div>
					<form
							bind:this={thisForm}
							on:submit|preventDefault={handleSubmit}
							use:enhance={() => {
							return async ({ update }) => {
								update({ reset: true });
							};
						}}
							method="POST"
							class="mx-auto px-8"
					>
						<div class="form-item formclass mx-auto items-center justify-center self-center py-2">
							<label for="name" class="mb-2 block text-sm font-medium"
							>ชื่อ | Name<sup><small class="text-red-500">*</small></sup><label
									for="counter-input"
									class="label block"
							><small
							>จำกัด: <span id="counter-display" class="tag is-success"
							>50 อักษร
										</span></small
							><small
							>| Limit: <span id="counter-display" class="tag is-success">50 Character</span
							></small
							></label
							>
							</label>

							<input
									placeholder={Placeholdertext.name}
									maxlength={Limit.name}
									type="text"
									name="name"
									id="name"
									class=" rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
									required
									on:invalid|preventDefault={nameInvalid}
									bind:value={ExampleData.name}
							/>
							<p class=" my-2 text-sm text-[#b90e0a]" id="errorName" />
						</div>
						<div class="form-item mx-auto items-center justify-center self-center">
							<label for="name" class="mb-2 block text-sm font-medium"
							>{FormLabelText.thwishlabel}<sup><small class="text-red-500">*</small></sup><label
									for="counter-input"
									class="label block"
							><small
							>จำกัด: <span id="counter-display" class="tag is-success"
							>500 อักษร
										</span></small
							><small
							>{FormLabelText.enwishlabel}<span id="counter-display" class="tag is-success"
							>500 Character</span
							></small
							></label
							>
							</label>

							<textarea
									name="wish"
									rows="4"
									class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
									placeholder={Placeholdertext.comment}
									maxlength={Limit.maxwish}
									minlength={Limit.minwish}
									required
									on:invalid|preventDefault={wishInvalid}
									bind:value={ExampleData.comment}
							/>
							<p class=" my-2 text-sm text-[#b90e0a]" id="errorWish" />
						</div>

						<label for="" class="">
							<label for="name" class=" block text-sm font-medium"
							>กรอบคำอวยพร | Choose your wish frame<sup><small class="text-red-500">*</small></sup
							></label
							>
							<SendGift bind:gift={SeletedGift} />
							<p class=" my-2 text-sm text-[#b90e0a]" id="errorGift" />
							<label for="name" class="mt-2 block text-sm font-medium"
							>รูปกรอบคำอวยพร | Choose your wish frame<sup
							><small class="text-red-500">*</small></sup
							></label
							>
							<Sidepicture bind:Sideimage={Selectpicture} />
							<label for="name" class="mt-2 block text-sm font-medium"
							>รูปกรอบคำอวยพร | Choose your wish frame<sup
							><small class="text-red-500">*</small></sup
							></label
							>
							<BSidepicture bind:BSideimage={BSelectpicture} />
							<p class=" my-2 text-sm text-[#b90e0a]" id="errorSide" />
							<div class="my-2 flex items-start">
								<div class="mt-10 md:mt-3 flex h-5 items-center">
									<input
											type="checkbox"
											name="agreement"
											value="agreed"
											class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
											required
											on:invalid|preventDefault={agreeInvalid}
									/>
								</div>
								<div class="block">
									<div>
										<label for="agreed" class="ms-2 text-sm font-medium text-gray-900" id="agree"
										>ข้าพเจ้า<a
												href="#agree"
												class="text-blue-600 hover:underline dark:text-blue-500"
										>อนุญาตให้เผยแพร่คำอวยพรและอนุญาตให้ถูกลบหากไม่เหมาะสม
										</a>
										</label>
									</div>
									<div>
										<label for="agreed" class="ms-2 text-sm font-medium text-gray-900"
										>I agree to<a
												href="#agree"
												class="ml-1 text-blue-600 hover:underline dark:text-blue-500"
										>
											share my wish with public and ALLOW to be removed if it's inappropriate.
										</a>
										</label>
									</div>
								</div>
							</div>
							<p class=" my-2 block text-sm text-[#b90e0a]" id="errorRead" />
							<div class="grid grid-cols-1 gap-2">
								<div class="mx-auto grid grid-cols-1">
									<div class="">
										<Turnstile {siteKey} />
									</div>
								</div>
							</div>
						</label>

						{#await form}
							<wbr />
						{:then form}
							{#if form?.reCapchaFalse}<p class="error text-[#b90e0a]">
								นายกดยืนยันreCaptchaด้วย | Please verify reCaptcha
							</p>{/if}
							{#if form?.message}<p class="error text-[#b90e0a]">
								คำอวยพรของนายยังไม่ได้ส่ง | Your wish haven't send
							</p>{/if}
							{#if loading}<p class="mt-2 error text-cyan-500 font-bold">กำลังส่งคำอวยพร, ห้ามปิดหน้านี้</p>
								<p class="error text-cyan-500 font-bold">Sending the wish, Do not close</p>
								<script>

								</script>
							{/if}
							{#if form?.complete || form?.completeBefore}<p class="error text-cyan-500 font-bold text-center" >
								{#if form?.completeBefore}
									<h2 class="font-bold">ส่งคำอวยพรเรียบร้อยแล้ว คำอวยพรจะเปิดวันเกิดนะคุณ! เจอกัน!</h2>
									<h2 class="font-bold">
										Wish has been sent successfully, it will be open on birthday! See you!
									</h2>
									<h1 class="text-center text-lg font-bold text-red-500 md:text-xl">
										*สำคัญ* คำอวยพรรหัส | *IMPORTANT* Your wish ID {form.WishID}
									</h1>
								{:else if form?.complete}
									<h2>ส่งคำอวยพรเรียบร้อยแล้ว | Successfully sent wish!</h2>
								{/if}
							</p>{/if}{/await}
						<div class="mx-auto md:mx-0">
							<div class="mx-auto text-center md:mx-0 md:text-left">
								<button
										class="mt-3 w-full rounded-full bg-zona p-2 text-white hover:bg-zona/70 disabled:bg-zona/30 md:w-fit"
										type="submit"
										disabled={loading}
								><p>ส่งคำอวยพร</p>
									<p class="-mt-2">Send the wish</p>
								</button>
								{#if Wishdata.canreadnow}
									<h3 class=" important text-center text-[#b90e0a]">
										ถ้าคุณยังไม่แน่ใจว่าส่งคำอวยพรหรือยัง
										<h3>
											ค้นหา
											<b class=" important inline"
											><a
													class="important -ml-1  text-blue-600 inline"
													href="/wishes/checkwish"><b>ที่นี้</b></a
											></b
											>หรือ
											<b class=" important inline"
											><a
													class=" important -ml-1  text-blue-600 "
													href="https://twitter.com/SierraB_Siravij"
											><b>ติดต่อสิราวิ้จจะบึได้เลย</b></a
											></b
											>
										</h3>
									</h3>
									<h3 class=" mb-1 text-center text-[#b90e0a]">
										If you're not sure that you have send the wish yet,
										<h3>
											Find
											<b class="inline"
											><a
													class=" text-blue-600 inline"
													target="_blank"
													href="/wishes/checkwish"><b> Here </b></a
											></b
											>Or
											<b class="inline"
											>contact <a
													class=" text-blue-600 inline"
													target="_blank"
													href="https://twitter.com/SierraB_Siravij"><b>Siravij here!</b></a
											></b
											>
										</h3>
									</h3>
								{/if}
							</div>
						</div>
					</form>
				{/if}
			{:then { Wishdata }}
				{#if Wishdata.accepting}
					<div class="example -mt-6 font-[itim]">
						<Example bwish={ExampleData} selected={SeletedGift} SidePicture={Selectpicture} BSidePicture={BSelectpicture} />
					</div>
					<form
						bind:this={thisForm}
						on:submit|preventDefault={handleSubmit}
						use:enhance={() => {
							return async ({ update }) => {
								update({ reset: true });
							};
						}}
						method="POST"
						class="mx-auto px-8"
					>
						<div class="form-item formclass mx-auto items-center justify-center self-center py-2">
							<label for="name" class="mb-2 block text-sm font-medium"
								>ชื่อ | Name<sup><small class="text-red-500">*</small></sup><label
									for="counter-input"
									class="label block"
									><small
										>จำกัด: <span id="counter-display" class="tag is-success"
											>50 อักษร
										</span></small
									><small
										>| Limit: <span id="counter-display" class="tag is-success">50 Character</span
										></small
									></label
								>
							</label>

							<input
								placeholder={Placeholdertext.name}
								maxlength={Limit.name}
								type="text"
								name="name"
								id="name"
								class=" rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
								required
								on:invalid|preventDefault={nameInvalid}
								bind:value={ExampleData.name}
							/>
							<p class=" my-2 text-sm text-[#b90e0a]" id="errorName" />
						</div>
						<div class="form-item mx-auto items-center justify-center self-center">
							<label for="name" class="mb-2 block text-sm font-medium"
								>{FormLabelText.thwishlabel}<sup><small class="text-red-500">*</small></sup><label
									for="counter-input"
									class="label block"
									><small
										>จำกัด: <span id="counter-display" class="tag is-success"
											>500 อักษร
										</span></small
									><small
										>{FormLabelText.enwishlabel}<span id="counter-display" class="tag is-success"
											>500 Character</span
										></small
									></label
								>
							</label>

							<textarea
								name="wish"
								rows="4"
								class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
								placeholder={Placeholdertext.comment}
								maxlength={Limit.maxwish}
								minlength={Limit.minwish}
								required
								on:invalid|preventDefault={wishInvalid}
								bind:value={ExampleData.comment}
							/>
							<p class=" my-2 text-sm text-[#b90e0a]" id="errorWish" />
						</div>

						<label for="" class="">
							<label for="name" class=" block text-sm font-medium"
								>กรอบคำอวยพร | Choose your wish frame<sup><small class="text-red-500">*</small></sup
								></label
							>
							<SendGift bind:gift={SeletedGift} />
							<p class=" my-2 text-sm text-[#b90e0a]" id="errorGift" />
							<label for="name" class="mt-2 block text-sm font-medium"
								>รูปกรอบคำอวยพร | Choose your wish frame<sup
									><small class="text-red-500">*</small></sup
								></label
							>
							<Sidepicture bind:Sideimage={Selectpicture} />
							<label for="name" class="mt-2 block text-sm font-medium"
							>รูปกรอบคำอวยพร | Choose your wish frame<sup
							><small class="text-red-500">*</small></sup
							></label
							>
							<BSidepicture bind:BSideimage={BSelectpicture} />
							<p class=" my-2 text-sm text-[#b90e0a]" id="errorSide" />
							<div class="my-2 flex items-start">
								<div class="mt-10 md:mt-3 flex h-5 items-center">
									<input
										type="checkbox"
										name="agreement"
										value="agreed"
										class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
										required
										on:invalid|preventDefault={agreeInvalid}
									/>
								</div>
								<div class="block">
									<div>
										<label for="agreed" class="ms-2 text-sm font-medium text-gray-900" id="agree"
											>ข้าพเจ้า<a
												href="#agree"
												class="text-blue-600 hover:underline dark:text-blue-500"
												>อนุญาตให้เผยแพร่คำอวยพรและอนุญาตให้ถูกลบหากไม่เหมาะสม
											</a>
										</label>
									</div>
									<div>
										<label for="agreed" class="ms-2 text-sm font-medium text-gray-900"
											>I agree to<a
												href="#agree"
												class="ml-1 text-blue-600 hover:underline dark:text-blue-500"
											>
												share my wish with public and ALLOW to be removed if it's inappropriate.
											</a>
										</label>
									</div>
								</div>
							</div>
							<p class=" my-2 block text-sm text-[#b90e0a]" id="errorRead" />
							<div class="grid grid-cols-1 gap-2">
								<div class="mx-auto grid grid-cols-1">
									<div class="">
										<Turnstile {siteKey} />
									</div>
								</div>
							</div>
						</label>

						{#await form}
							<wbr />
						{:then form}
							{#if form?.reCapchaFalse}<p class="error text-[#b90e0a]">
									นายกดยืนยันreCaptchaด้วย | Please verify reCaptcha
								</p>{/if}
							{#if form?.message}<p class="error text-[#b90e0a]">
									คำอวยพรของนายยังไม่ได้ส่ง | Your wish haven't send
								</p>{/if}
							{#if loading}<p class="mt-2 error text-cyan-500 font-bold">กำลังส่งคำอวยพร, ห้ามปิดหน้านี้</p>
								<p class="error text-cyan-500 font-bold">Sending the wish, Do not close</p>
								<script>

								</script>
							{/if}
							{#if form?.complete || form?.completeBefore}<p class="error text-cyan-500 font-bold text-center" >
								{#if form?.completeBefore}
									<h2 class="font-bold">ส่งคำอวยพรเรียบร้อยแล้ว คำอวยพรจะเปิดวันเกิดนะคุณ! เจอกัน!</h2>
									<h2 class="font-bold">
										Wish has been sent successfully, it will be open on birthday! See you!
									</h2>
									<h1 class="text-center text-lg font-bold text-red-500 md:text-xl">
										*สำคัญ* คำอวยพรรหัส | *IMPORTANT* Your wish ID {form.WishID}
									</h1>
								{:else if form?.complete}
									<h2>ส่งคำอวยพรเรียบร้อยแล้ว | Successfully sent wish!</h2>
								{/if}
								</p>{/if}{/await}
						<div class="mx-auto md:mx-0">
							<div class="mx-auto text-center md:mx-0 md:text-left">
								<button
									class="mt-3 w-full rounded-full bg-zona p-2 text-white hover:bg-zona/70 disabled:bg-zona/30 md:w-fit"
									type="submit"
									disabled={loading}
									><p>ส่งคำอวยพร</p>
									<p class="-mt-2">Send the wish</p>
								</button>
								{#if Wishdata.canreadnow}
									<h3 class=" important text-center text-[#b90e0a]">
										ถ้าคุณยังไม่แน่ใจว่าส่งคำอวยพรหรือยัง
										<h3>
											ค้นหา
											<b class=" important inline"
												><a
													class="important -ml-1  text-blue-600 inline"
													href="/wishes/checkwish"><b>ที่นี้</b></a
												></b
											>หรือ
											<b class=" important inline"
												><a
													class=" important -ml-1  text-blue-600 "
													href="https://twitter.com/SierraB_Siravij"
													><b>ติดต่อสิราวิ้จจะบึได้เลย</b></a
												></b
											>
										</h3>
									</h3>
									<h3 class=" mb-1 text-center text-[#b90e0a]">
										If you're not sure that you have send the wish yet,
										<h3>
											Find
											<b class="inline"
												><a
													class=" text-blue-600 inline"
													target="_blank"
													href="/wishes/checkwish"><b> Here </b></a
												></b
											>Or
											<b class="inline"
												>contact <a
													class=" text-blue-600 inline"
													target="_blank"
													href="https://twitter.com/SierraB_Siravij"><b>Siravij here!</b></a
												></b
											>
										</h3>
									</h3>
								{/if}
							</div>
						</div>
					</form>
				{/if}
				{#if !Wishdata.canreadnow}
					<h3 class="mt-2 important text-center text-[#b90e0a]">
						ถ้าคุณยังไม่แน่ใจว่าส่งคำอวยพรหรือยัง
						<h3>
							ค้นหา
							<b class=" important inline"
							><a
									class="important -ml-1  text-blue-600 inline"
									href="/wishes/checkwish"><b>ที่นี้</b></a
							></b
							>หรือ
							<b class=" important inline"
							><a
									class=" important -ml-1  text-blue-600 inline"
									href="https://twitter.com/SierraB_Siravij"
							><b>ติดต่อสิราวิ้จจะบึได้เลย</b></a
							></b
							>
						</h3>
					</h3>
					<h3 class="text-center text-[#b90e0a] important">
						If you're not sure that you have send the wish yet,
						<h3>
							Find
							<b class="inline"
							><a
									class=" text-blue-600 inline"
									target="_blank"
									href="/wishes/checkwish"><b> Here </b></a
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
					<div class=" mx-auto font-[itim] text-xl text-zona mb-8">

						<p class="mx-auto mt-1 text-center text-xl">
							ยังไม่ถึงเวลาอ่านคำอวยพร
						</p>
						<p class="mx-auto  text-center text-xl">
							It's not time to read wishes yet
						</p>
						<p class="mt-1 mx-auto text-center text-xl">
							มีคำอวยพรทั้งหมดแล้ว {Wishdata.count} คำอวยพร
						</p>
						<p class="mx-auto  text-center text-xl text-zona">
							There's {Wishdata.count} Wishes has been sent
						</p>
						<p class="mt-4 mx-auto text-center text-md">
							ฟอรม์จะปิดในวันที่ {Wishdata.formCloseDate} เวลา {Wishdata.formCloseTime}
						</p>
						<p class="mx-auto  text-center text-xl text-zona">
							Form will be close {Wishdata.formCloseDate}
							{Wishdata.formCloseTime}
						</p>

						<p class="mt-4 mx-auto text-center text-xl">
							เปิดอ่านวันที่ {Wishdata.openDate} เวลา {Wishdata.openTime}
						</p>
						<p class=" mx-auto -mt-1 text-center text-xl">
							Wishes will be on {Wishdata.openDate} Time {Wishdata.openTime}
						</p>
					</div>
				{/if}
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
		{#if FirstTimeFetch}
			<div class="mx-auto mt-7 max-w-4xl rounded-lg bg-white py-2 shadow-lg ">
				<div class=" mx-auto my-2 text-red-600">
					<p class=" mx-auto text-center text-xl text-zona md:text-3xl">กำลังโหลดข้อมูล</p>
				</div>
			</div>
		{:else if !FirstTimeFetch}
			<div class="mx-auto mt-7 max-w-4xl rounded-lg bg-white py-2 shadow-lg font-[itim]">
				<p class=" mx-auto text-center text-2xl text-zona">
					มีคำอวยพรทั้งหมดแล้ว {Wishdata.count} คำอวยพร
				</p>
				<p class="mx-auto -mt-2 text-center text-2xl text-zona">
					There's {Wishdata.count} Wishes has been sent
				</p>
				<WishboxButton bind:WishboxDisplaySignle  />

				<div class="mx-auto my-2 -mt-2 md:mx-0 md:ml-2 ">
					<div class="mx-auto text-center">
						<button
								class="  w-fit rounded-full bg-slate-900 p-2 text-white disabled:bg-slate-900/30 disabled:text-white/30 font-[itim]"
								type="submit"
								disabled={loading}
								on:click={Handlefetch}
						>Refresh Data
						</button>
						<p class="block">
							<small class="mt-1 block font-[itim]">ถ้าRefreshคำอวยพร คำอวยพรจะขึ้นไปเก่าสุด!</small>
							<small class="block font-[itim]">If you refresh the wishes,It will be on shown The oldest!</small>
						</p>
					</div>
				</div>

				{#if !WishboxDisplaySignle}
					<Displaywishbox {Wishdata} />

				{:else}
					<SingleWishbox {Wishdata} />

				{/if}
			</div>
		{/if}
	{:then { Wishdata }}
		{#if Wishdata.canreadnow}
			<div class="mx-auto mt-7 max-w-4xl rounded-lg bg-white py-2 font-[itim] shadow-lg">
				<p class=" mx-auto text-center text-2xl text-zona">
					มีคำอวยพรทั้งหมดแล้ว {Wishdata.count} คำอวยพร
				</p>
				<p class="mx-auto -mt-2 text-center text-2xl text-zona">
					Total wishes have been sent {Wishdata.count} wishes
				</p>
				<WishboxButton bind:WishboxDisplaySignle />
				<div class="mx-auto my-2 -mt-2 md:mx-0 md:ml-2 ">
					<div class="mx-auto text-center">
						<button
							class="  w-fit rounded-full bg-slate-900 p-2 text-white disabled:bg-slate-900/30 disabled:text-white/30"
							type="submit"
							disabled={loading}
							on:click={Handlefetch}
							>Refresh Data
						</button>
						<p class="block">
							<small class="mt-1 block ">ถ้าRefreshคำอวยพร คำอวยพรจะขึ้นไปเก่าสุด!</small>
							<small class="block">If you refresh the wishes,It will be on shown The oldest!</small>
						</p>
					</div>
				</div>
				{#if !WishboxDisplaySignle}
					<Displaywishbox {Wishdata} />

				{:else}
					<SingleWishbox {Wishdata} />

				{/if}

			</div>
		{/if}
	{/await}
{/key}

