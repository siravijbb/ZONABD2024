<script lang="ts">
	import { enhance } from '$app/forms';
    import type { ActionData, Actions } from './$types';
	import {Turnstile} from "svelte-turnstile";
	import LayoutHeader from "$components/Head/header.svelte";
	import WebHeader from "$components/wishes/Findwish/Header/Header.svelte";

	export let form: ActionData;
	let loading = false;
	let thisForm: HTMLFormElement;
	const siteKey = '1x00000000000000000000AA';

	function handleSubmit() {
		loading = true;
		setTimeout(() => {
			loading = false;
		}, 1000);
	}
	let Placeholdertext = {
		name: 'ชื่อของคุณ | Your Name',
		comment: 'คำอวยพรหรือสิ่งอยากบอกไอช่า! | Your Wish or Something you want to say to Aisha!'
	};
	let Limit = {
		name: 50,
		maxwish: 500,
		minwish: 6
	};
	let Description = 'Find your wishes to Aisha Vtuber!';

	function nameInvalid() {
		const resultElement = document.getElementById('errorName');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ คุณต้องบอกชื่อด้วย!';
		}
	}
</script>
<div class="space-2 mx-auto grid w-full max-w-xl grid-cols-1 rounded-lg bg-gray-200 shadow-lg">
	<div class="mx-auto h-full w-full rounded-lg bg-white px-2 pb-4 shadow-lg md:mt-2">
		<LayoutHeader title="HBD Aisha Project 2024" description={Description} />
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
	<Turnstile {siteKey} />

	<div class="mx-auto md:mx-0">
		<div class="mx-auto text-center md:mx-0 md:text-left">
			<button
				class="mt-3 w-full rounded-full bg-aisha p-2 text-white hover:bg-aisha/30 disabled:bg-slate-900 md:w-fit"
				type="submit"
				disabled={loading}
				><p>ค้นหาชื่อ</p>
				<p class="-mt-2">Find your name</p>
			</button>
		</div>
	</div>
</form>

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
        {form.name}
		{/if}{/await}
</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&family=Itim&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap');
	@font-face {
		font-family: 'itim';
		src: url('https://fonts.googleapis.com/css2?family=Itim:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap')
		format('truetype');
		unicode-range: U+0E00, U+0E7F; /* Latin glyphs */
	}
	@font-face {
		font-family: 'IBM Plex Sans Thai';
		src: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap')
		format('truetype');
		unicode-range: U+0E00, U+0E7F; /* Latin glyphs */
	}

	body {
		font-family: 'Barlow Condensed', 'Noto Sans Thai Looped', sans-serif;

		color: #333;
		background-color: #ecfee6;
	}
	form {
		font-family: 'IBM Plex Sans Thai', sans-serif;
	}

</style>
