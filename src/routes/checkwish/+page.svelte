<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, Actions } from './$types';
	import { Turnstile } from 'svelte-turnstile';
	import LayoutHeader from '$components/Head/header.svelte';
	import WebHeader from '$components/wishes/Findwish/Header/Header.svelte';

	export let form: ActionData;
	let loading = false;
	let thisForm: HTMLFormElement;
	const siteKey = '0x4AAAAAAAdRXpX0iQ54gQNO';

	function handleSubmit() {
		loading = true;
		setTimeout(() => {
			loading = false;
		}, 5000);
	}
	let Placeholdertext = {
		name: 'ชื่อของคุณ | Your Name',
		comment: 'คำอวยพรหรือสิ่งอยากบอกไอช่า! | Your Wish or Something you want to say to ZONA!'
	};
	let Limit = {
		name: 50,
		maxwish: 500,
		minwish: 6
	};
	let Description = 'Find your checkwish to ZONA Vtuber!';

	function nameInvalid() {
		const resultElement = document.getElementById('errorName');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ คุณต้องบอกชื่อด้วย!';
		}
	}
</script>

<div class="space-2 mx-auto grid w-full max-w-xl grid-cols-1 rounded-lg bg-gray-200 shadow-lg">
	<div class="mx-auto h-full w-full rounded-lg bg-white px-2 pb-4 shadow-lg md:mt-2">
		<LayoutHeader title="Check wish to ZONA Project 2024" description={Description} />
		<WebHeader />
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
						><small>จำกัด: <span id="counter-display" class="tag is-success">50 อักษร </span></small
						><small
							>| Limit: <span id="counter-display" class="tag is-success">50 Character</span></small
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
				/>
				<p class=" my-2 text-sm text-[#b90e0a]" id="errorName" />
			</div>

			<div class="mx-auto md:mx-0">
				<div class="mx-auto text-center md:mx-0 md:text-left">
					<button
						class="mt-3 w-full rounded-full bg-zona p-2 text-white hover:bg-zona/30 disabled:bg-slate-900 md:w-fit"
						type="submit"
						disabled={loading}
						><p>ค้นหาชื่อ</p>
						<p class="-mt-2">Find your name</p>
					</button>
				</div>
			</div>
			<div class="mt-2">
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
					{#if form?.name}
						<p class="mx-auto text-center font-bold text-red-700">{form.name}</p>
					{/if}{/await}
				<h3 class=" important text-center text-[#b90e0a]">
					ถ้าได้รับรหัสคำอวยพรแล้ว แปลว่าส่งเรียบร้อย
				</h3>
				<h3 class=" important text-center text-[#b90e0a]">
					If you have not had received Wish ID, That means you had sent The wish.
				</h3>
				<h3 class=" text-center text-[#b90e0a]">
					ถ้าคุณยังไม่แน่ใจว่าส่งคำอวยพรหรือยัง
					<b class="block md:inline"
						><a
							class="block text-blue-600 md:inline"
							target="_blank"
							href="https://twitter.com/SierraB_Siravij"><b>ติดต่อสิราวิ้จจะบึได้เลย</b></a
						></b
					>
				</h3>
				<h3 class=" mb-1 text-center text-[#b90e0a]">
					If you're not sure that you have send the wish yet,
					<b class="block"
						>Feel free to contact <a
							class="inline text-blue-600"
							target="_blank"
							href="https://twitter.com/SierraB_Siravij"><b>Siravij here!</b></a
						></b
					>
				</h3>
			</div>
		</form>
	</div>
</div>
