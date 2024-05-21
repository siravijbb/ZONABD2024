<script lang="ts">
	import Header from '$components/home/Header/Header.svelte';
	import type { ActionData } from './$types';
	import SendGift from '$components/wishes/Form/Gift/SendGift.svelte';
	import { Turnstile } from 'svelte-turnstile';
	import { enhance } from '$app/forms';
	import Example from '$components/wishes/Form/Gift/Example.svelte';


	export let form: ActionData;
	let forms: ActionData;

	let formModal = false;
	let thisForm: HTMLFormElement;
	let loading = false;
	function handleSubmit() {
		loading = true;
		setTimeout(() => {
			loading = false;
		}, 7500);
	}
	function nameInvalid() {
		const resultElement = document.getElementById('errorName');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ ไอ่หนุ่ม! แกต้องบอกชื่อด้วย';
		}
	}
	function wishInvalid() {
		const resultElement = document.getElementById('errorWish');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ ไอ่หนุ่ม! ใส่น้อยไปหน่อยไหมนาย';
		}
	}
	function agreeInvalid() {
		const resultElement = document.getElementById('errorRead');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ ไอ่หนุ่ม! แกต้องอ่านให้หมดด้วย';
		}
	}
	const siteKey = '1x00000000000000000000AA';
	let ExampleData = {
		name: 'Guppiens',
		comment: 'คำอวยพรของนาย',
		DMY: 'DMY',
		time: '29 July 2024',
		count: '80',
	};

	let SeletedGift = 1;


</script>

<div class="mx-auto grid w-full max-w-4xl grid-cols-1 space-y-2 rounded-lg bg-gray-200 shadow-lg">
	<div class="mx-auto h-full w-full rounded-lg bg-white pb-9 shadow-lg md:mt-2">
		<Header />
		<div class="pb-2 pt-4">
			<Example bwish="{ExampleData}" selected="{SeletedGift}" />
			<form
				bind:this={thisForm}
				on:submit|preventDefault={handleSubmit}
				use:enhance={() => {
					return async ({ update }) => {
						update({ reset: false });
					};
				}}
				method="POST"
				class="mx-auto px-8"
			>
				<div class="form-item mx-auto items-center self-center justify-center py-2">
					<label for="name" class="block mb-2 text-sm font-medium"
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
							placeholder="ชื่อนายอะ ไอ่หนุ่ม! Your name,My boy!"
							maxlength="50"
							type="text"
							name="name"
							id="name"
							class=" p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							required
							on:invalid|preventDefault={nameInvalid}
							bind:value={ExampleData.name}
					/>
					<p class=" text-sm text-[#b90e0a] my-2" id="errorName" />
				</div>
				<div class="form-item mx-auto items-center justify-center self-center">
					<label for="wish"
						>คำอวยพร<sup><small class="text-red-500">*</small></sup><label
							for="counter-input"
							class="label block"
							><small
								>จำกัด: <span id="counter-display" class="tag is-success">500 อักษร</span></small
							></label
						>
					</label>

					<textarea
						name="wish"
						rows="4"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
						placeholder="นายอยากใส่คำอวยพร ความปรารถนา หรือ คำทักทาย ใส่เลย!"
						maxlength="500"
						minlength="6"
						required
						on:invalid|preventDefault={wishInvalid}
						bind:value={ExampleData.comment}

					/>
					<p class=" my-2 text-sm text-[#b90e0a]" id="errorWish" />
				</div>

				<label for="" class=""
					>นายอยากใส่กรอบรูปแบบไหน เลือกเลย!<small class="text-red-500">*</small><label
						for="counter-input"
						class="label block"><small /></label
					>
					<SendGift  bind:gift={SeletedGift} />
					{SeletedGift}
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
									>ข้าพเจ้า<a href="#agree" class="text-blue-600 hover:underline dark:text-blue-500"
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
					{#if form?.reCapchaFalse}<p class="error text-[#b90e0a]">นายกดยืนยันreCaptchaด้วย</p>{/if}
					{#if form?.message}<p class="error text-[#b90e0a]">คำอวยพรของนายยังไม่ได้ส่ง</p>{/if}
					{#if loading}<p class="error text-cyan-500">กำลังส่งคำอวยพร</p>{/if}
					{#if form?.complete || form?.completeBefore}<p class="error text-cyan-500">
							{#if form?.completeBefore}
								<h2>
									ส่งคำอวยพรเรียบร้อยแล้ว คำอวยพรจะเปิดวันเกิดนะนาย! เจอกัน!
								</h2>{:else if form?.complete}
								<h2>
									ส่งคำอวยพรเรียบร้อยแล้ว หากไม่มีอะไรเกิดขึ้นภายใน 3 วินาที กรุณาrefresh page
								</h2>
							{/if}

							<script>
								setTimeout(function () {
									window.location.replace('/sendwish/completed');
								}, 3000);
							</script>
						</p>{/if}{/await}
				<button
					class="mt-3 rounded-full bg-slate-900 p-2 text-white disabled:bg-slate-900/30 disabled:text-white/30"
					type="submit"
					disabled={forms?.message || loading}
					>ส่งคำอวยพร
				</button>
			</form>
		</div>
	</div>
</div>
