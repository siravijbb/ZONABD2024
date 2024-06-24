<script lang="ts">
	function giftInvalid() {
		const resultElement = document.getElementById('errorGift');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ พี่ต้องเลือกสีด้วย! ';
		}
	}
	export let gift: number;
</script>

<ul class="grid w-full grid-cols-4 gap-2 md:grid-cols-4">
	<li>
		<input
			type="radio"
			id="hosting-small"
			name="color"
			value="1"
			class="peer"
			required
			on:invalid|preventDefault={giftInvalid}
			bind:group={gift}
		/>
		<label
			for="hosting-small"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-zona p-5 text-white hover:bg-zona/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:peer-checked:text-blue-500"
		>
		</label>
	</li>
	<li>
		<input
			type="radio"
			id="hosting-big"
			name="color"
			value="2"
			class="peer"
			bind:group={gift}
			on:invalid|preventDefault={giftInvalid}
		/>
		<label
			for="hosting-big"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-zona-SLIVER p-5 text-white hover:bg-zona-SLIVER/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:peer-checked:text-blue-500"
		>
		</label>
	</li>
	<li>
		<input
			type="radio"
			id="hosting-3"
			name="color"
			value="3"
			class="peer"
			bind:group={gift}
			on:invalid|preventDefault={giftInvalid}
		/>
		<label
			for="hosting-3"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-zona-SKY p-5 text-gray-500 hover:bg-zona-SKY/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
		>
		</label>
	</li>
	<li>
		<input
			type="radio"
			id="hosting-4"
			name="color"
			value="4"
			class="peer"
			bind:group={gift}
			on:invalid|preventDefault={giftInvalid}
		/>
		<label
			for="hosting-4"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-[#ffbc76] p-5 text-gray-500 hover:bg-[#F9E6D5]/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
		>
		</label>
	</li>
</ul>
