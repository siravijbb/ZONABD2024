<script lang="ts">
	import WebHeader from '$components/wishes/Header/Header.svelte';
	import type { ActionData } from './$types';
	import SendGift from '$components/wishes/Form/Gift/SendGift.svelte';
	import { Turnstile } from 'svelte-turnstile';
	import { enhance } from '$app/forms';
	import Example from '$components/wishes/Form/Gift/Example.svelte';
	import { onMount } from 'svelte';
	import WishboxButton from '$components/wishes/WishboxButton.svelte';
	import Displaywishbox from '$components/wishes/Wishbox/Displaywishbox.svelte';
	import SingleWishbox from '$components/wishes/Wishbox/SingleWishbox.svelte';
	import LayoutHeader from '$components/Head/header.svelte';

	////////////////
	let promise = fetchData();
	let Description = 'Send your wishes to Aisha Vtuber!';
	export let form: ActionData;
	let forms: ActionData;
	let thisForm: HTMLFormElement;
	let loading = false;
	let SeletedGift = 1;
	let Wishdata: any;
	let EnableReatime = false;
	let intervalId: any;
	let FirstTimeFetch = true;
	let WishboxDisplaySignle = false;
	let ExampleData = {
		name: '',
		comment: '',
		DMY: 'DMY',
		time: '29 July 2024',
		count: '80'
	};
	let Placeholdertext = {
		name: 'ชื่อของคุณ | Your Name',
		comment: 'คำอวยพรหรือสิ่งอยากบอกไอช่า! | Your Wish or Something you want to say to Aisha!'
	};
	let FormLabelText = {
		namelabel: 'ชื่อ | Name',
		namesmall: 'จำกัด: 50 อักษร | Limit: 50 Character',
		thwishlabel: 'คำอวยพร | you wish:',
		enwishlabel: '| Limit: ',
		wishsmall: 'จำกัด: 500 อักษร | Limit: 500 Character',
		thagreelabel: 'ข้าพเจ้าอนุญาตให้เผยแพร่คำอวยพร',
		engagreelabel: 'I agree to share my wish with public'
	};
	let Limit = {
		name: 50,
		maxwish: 500,
		minwish: 6
	};
	let Disablewhitespace = false

	//////////

	function handleSubmit() {
		loading = true;
		setTimeout(() => {
			loading = false;
		}, 10000);
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
		const response = await fetch('https://api-aishahbd2024backend.netlify.app/api/Getwishes');
		if (response.ok) {
			const json = await response.json();
			Wishdata = json.body;
			return { Wishdata };
		} else {
			throw new Error(response.status as unknown as string);
		}
	}
</script>

<div class="space-2 mx-auto grid w-full max-w-xl grid-cols-1 rounded-lg bg-gray-200 shadow-lg">
	<div class="mx-auto h-full w-full rounded-lg bg-white px-2 pb-4 shadow-lg md:mt-2">
		<LayoutHeader title="HBD Aisha Project 2024" description={Description} />
		<WebHeader />
		<div class="pb-2 pt-4">
			{#await promise}
				{#if !FirstTimeFetch}
					<div class="-mt-6">
					<Example bwish={ExampleData} selected={SeletedGift} />
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
						<div class="form-item mx-auto items-center justify-center self-center py-2">
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
							<label for="name" class="mb-2 block text-sm font-medium"
							>กรอบคำอวยพร | Choose your wish frame<sup><small class="text-red-500">*</small></sup
							></label
							>
							<SendGift bind:gift={SeletedGift} />
							<p class=" my-2 text-sm text-[#b90e0a]" id="errorGift" />
							<div class="my-2 flex items-start">
								<div class="mt-3 flex h-5 items-center">
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
										>อนุญาตให้เผยแพร่คำอวยพร
										</a>
										</label>
									</div>
									<div>
										<label for="agreed" class="ms-2 text-sm font-medium text-gray-900"
										>I agree to<a
												href="#agree"
												class="ml-1 text-blue-600 hover:underline dark:text-blue-500"
										>
											share my wish with public
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
							{#if loading}<p class="error text-cyan-500">กำลังส่งคำอวยพร</p>{/if}
							{#if form?.complete || form?.completeBefore}<p class="error text-cyan-500">
								{#if form?.completeBefore}
									<h2 class="text-lg md:text-3xl">
										ส่งคำอวยพรเรียบร้อยแล้ว คำอวยพรจะเปิดวันเกิดนะนาย! เจอกัน! | Wish has been
										sent successfully, it will be open on birthday! See you!
									</h2>
									<h1 class="text-center text-xl text-red-500 md:text-3xl">
										คำอวยพรรหัส | Your wish ID {form.WishID}
									</h1>
								{:else if form?.complete}
									<h2>ส่งคำอวยพรเรียบร้อยแล้ว | Successfully sent wish!</h2>
								{/if}
							</p>{/if}{/await}
						<div class="mx-auto md:mx-0">
							<div class="mx-auto text-center md:mx-0 md:text-left">
								<button
										class="mt-3 w-full rounded-full  p-2 text-white disabled:bg-slate-900 bg-aisha  hover:bg-aisha/30  md:w-fit"
										type="submit"
										disabled={loading}
								><p>ส่งคำอวยพร</p>
									<p class="-mt-2">Send the wish</p>
								</button>
							</div>
						</div>
					</form>
				{/if}
			{:then { Wishdata }}
				{#if Wishdata.accepting}
					<div class="-mt-6">
						<Example bwish={ExampleData} selected={SeletedGift} />
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
						<div class="form-item mx-auto items-center justify-center self-center py-2">
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
							<label for="name" class="mb-2 block text-sm font-medium"
								>กรอบคำอวยพร | Choose your wish frame<sup><small class="text-red-500">*</small></sup
								></label
							>
							<SendGift bind:gift={SeletedGift} />
							<p class=" my-2 text-sm text-[#b90e0a]" id="errorGift" />
							<div class="my-2 flex items-start">
								<div class="mt-3 flex h-5 items-center">
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
												>อนุญาตให้เผยแพร่คำอวยพร
											</a>
										</label>
									</div>
									<div>
										<label for="agreed" class="ms-2 text-sm font-medium text-gray-900"
											>I agree to<a
												href="#agree"
												class="ml-1 text-blue-600 hover:underline dark:text-blue-500"
											>
												share my wish with public
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
							{#if loading}<p class="error text-cyan-500">กำลังส่งคำอวยพร</p>{/if}
							{#if form?.complete || form?.completeBefore}<p class="error text-cyan-500">
									{#if form?.completeBefore}
										<h2 class="text-lg md:text-3xl">
											ส่งคำอวยพรเรียบร้อยแล้ว คำอวยพรจะเปิดวันเกิดนะนาย! เจอกัน! | Wish has been
											sent successfully, it will be open on birthday! See you!
										</h2>
										<h1 class="text-center text-xl text-red-500 md:text-3xl">
											คำอวยพรรหัส | Your wish ID {form.WishID}
										</h1>
									{:else if form?.complete}
										<h2>ส่งคำอวยพรเรียบร้อยแล้ว | Successfully sent wish!</h2>
									{/if}
								</p>{/if}{/await}
						<div class="mx-auto md:mx-0">
							<div class="mx-auto text-center md:mx-0 md:text-left">
								<button
									class="mt-3 w-full rounded-full  p-2 text-white disabled:bg-slate-900 bg-aisha  hover:bg-aisha/30  md:w-fit"
									type="submit"
									disabled={loading}
									><p>ส่งคำอวยพร</p>
									<p class="-mt-2">Send the wish</p>
								</button>
							</div>
						</div>
					</form>
				{/if}
				{#if !Wishdata.canreadnow}
					<div class=" mx-auto text-xl text-aisha">
						<p class="mt-1 mx-auto text-center text-xl">ยังไม่ถึงเวลาอ่านคำอวยพร | isn't time to read wishes yet</p>
						<p class=" mx-auto text-center text-xl">มีคำอวยพรทั้งหมดแล้ว {Wishdata.count} คำอวยพร</p>
						<p class="-mt-2 mx-auto text-center text-2xl text-aisha">
							There's {Wishdata.count} Wishes has been sent
						</p>
						<p class=" mx-auto text-center text-xl">ฟอรม์จะปิดในวันที่ {Wishdata.formCloseDate} เวลา {Wishdata.formCloseTime}</p>
						<p class="-mt-2 mx-auto text-center text-xl text-aisha">
							Form will be close {Wishdata.formCloseDate}  {Wishdata.formCloseTime}
						</p>

						<p class=" mx-auto text-center text-xl">
							เปิดอ่านวันที่ {Wishdata.openDate} เวลา {Wishdata.openTime}
						</p>
						<p class=" mx-auto text-center text-xl -mt-1">
							Wishes will be on {Wishdata.openDate} Time {Wishdata.openTime}
						</p>


					</div>
				{/if}
			{/await}
		</div>
	</div>
</div>


{#key intervalId}
		{#await promise}
			{#if FirstTimeFetch}
				<div class="mx-auto mt-7 max-w-4xl rounded-lg bg-white py-2 shadow-lg">

				<div class=" mx-auto my-2 text-red-600">
					<p class=" mx-auto text-center text-xl text-aisha md:text-3xl">กำลังโหลดข้อมูล</p>
				</div>
				</div>

			{:else if !FirstTimeFetch}
				<div class="mx-auto mt-7 max-w-4xl rounded-lg bg-white py-2 shadow-lg">

				<p class=" mx-auto text-center text-2xl text-aisha">
					มีคำอวยพรทั้งหมดแล้ว {Wishdata.count} คำอวยพร
				</p>
				<p class="-mt-2 mx-auto text-center text-2xl text-aisha">
					There's {Wishdata.count} Wishes has been sent
				</p>
				<WishboxButton bind:WishboxDisplaySignle />

				<div class="mx-auto my-2 -mt-2 md:mx-0 md:ml-2">
					<div class="mx-auto text-center">
						<button
							class="  w-fit rounded-full bg-slate-900 p-2 text-white disabled:bg-slate-900/30 disabled:text-white/30"
							type="submit"
							disabled={loading}
							on:click={Handlefetch}
							>Refresh Data
						</button>
						<p class="block">
							<small class="mt-1 block">ถ้าRefreshคำอวยพร คำอวยพรจะขึ้นไปบนสุด!</small>
							<small class="block">If you refresh the wishes,It will be on shown the newest!</small>
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
			{#if Wishdata.canreadnow }
				<div class="mx-auto mt-7 max-w-4xl rounded-lg bg-white py-2 shadow-lg">
				<p class=" mx-auto text-center text-2xl text-aisha">
					มีคำอวยพรทั้งหมดแล้ว {Wishdata.count} คำอวยพร
				</p>
				<p class="-mt-2 mx-auto text-center text-2xl text-aisha">
					There's {Wishdata.count} Wishes has been sent
				</p>
				<WishboxButton bind:WishboxDisplaySignle />
				<div class="mx-auto my-2 -mt-2 md:mx-0 md:ml-2">
					<div class="mx-auto text-center">
						<button
							class="  w-fit rounded-full bg-slate-900 p-2 text-white disabled:bg-slate-900/30 disabled:text-white/30"
							type="submit"
							disabled={loading}
							on:click={Handlefetch}
							>Refresh Data
						</button>
						<p class="block">
							<small class="mt-1 block">ถ้าRefreshคำอวยพร คำอวยพรจะขึ้นไปบนสุด!</small>
							<small class="block">If you refresh the wishes,It will be on shown the newest!</small>
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
		{:catch error}
			<div class="mx-auto mt-7 max-w-4xl rounded-lg bg-white py-2 shadow-lg">
			<div class=" mx-auto text-xl text-red-600">
				<p class=" mx-auto text-center text-3xl text-red-600">Fail to fetch donate data</p>
				<p class=" mx-auto text-center text-3xl text-red-600">{error.message}</p>
			</div>
			</div>
		{/await}
{/key}
