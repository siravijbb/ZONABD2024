<script lang="ts">
	function giftInvalid() {
		const resultElement = document.getElementById('errorGift');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ คุณต้องเลือกรูปด้วย! นายสิราวิ้จจะบึ บังคับ!';
		}
	}
	export let Sideimage: number;
</script>

<ul class="grid w-full grid-cols-2 gap-2 md:grid-cols-2">
	<li>
		<input
			type="radio"
			id="image-small"
			name="picture"
			value="1"
			class="peer"
			required
			on:invalid|preventDefault={giftInvalid}
			bind:group={Sideimage}
		/>
		<label
			for="image-small"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-aisha p-5 text-white hover:bg-aisha/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="Hoku " src="/favicon.png" class="-my-7 mx-auto -mt-9 flex h-auto w-28" />
			</div>
		</label>
	</li>
	<li>
		<input
			type="radio"
			id="image-big"
			name="picture"
			value="2"
			class="peer"
			bind:group={Sideimage}
			on:invalid|preventDefault={giftInvalid}
		/>
		<label
			for="image-big"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-[#22b573] p-5 text-white hover:bg-[#22b573]/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="Idol " src="/favicon.png" class="-my-7 mx-auto -mt-9 flex h-auto w-28" />
			</div>
		</label>
	</li>
	<li>
		<input
			type="radio"
			id="image-3"
			name="picture"
			value="3"
			class="peer"
			bind:group={Sideimage}
			on:invalid|preventDefault={giftInvalid}
		/>
		<label
			for="image-3"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-[#0071bc] p-5 text-gray-500 hover:bg-[#0071bc]/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="Winter Wonder " src="/favicon.png" class="-my-7 mx-auto -mt-9 flex h-auto w-28" />
			</div>
		</label>
	</li>
	<li>
		<input
			type="radio"
			id="image-4"
			name="picture"
			value="4"
			class="peer"
			bind:group={Sideimage}
			on:invalid|preventDefault={giftInvalid}
		/>
		<label
			for="image-4"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-[#fbb03b] p-5 text-gray-500 hover:bg-[#fbb03b]/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="3 Year Anni " src="/favicon.png" class="-my-8 mx-auto -mt-8 flex h-auto w-28" />
			</div>
		</label>
	</li>
</ul>
