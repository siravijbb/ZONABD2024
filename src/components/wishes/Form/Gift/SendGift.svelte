<script lang="ts">
	function giftInvalid() {
		const resultElement = document.getElementById('errorGift');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ ไอ่หนุ่ม! แกต้องให้ของขวัญด้วย นายสิราวิ้จจะบึ บังคับ';
		}
	}
	export let gift: number;
</script>

<ul class="grid w-full grid-cols-4 gap-2 md:grid-cols-4">
	<li>
		<input
			type="radio"
			id="hosting-small"
			name="picture"
			value="1"
			class="peer"
			required
			on:invalid|preventDefault={giftInvalid}
			bind:group={gift}
		/>
		<label
			for="hosting-small"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-[#bf4e2e] p-5 text-white hover:bg-[#bb433d]/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="Hoku " src="/favicon.png" class="-my-7 mx-auto -mt-9 flex h-auto w-28" />
			</div>
		</label>
	</li>
	<li>
		<input type="radio" id="hosting-big" name="picture" value="2" class="peer" bind:group={gift} />
		<label
			for="hosting-big"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-[#f1962e] p-5 text-white hover:bg-blue-600/30 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="Idol " src="/favicon.png" class="-my-7 mx-auto -mt-9 flex h-auto w-28" />
			</div>
		</label>
	</li>
	<li>
		<input type="radio" id="hosting-3" name="picture" value="3" class="peer" bind:group={gift} />
		<label
			for="hosting-3"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-[#d7ebff] p-5 text-gray-500 hover:bg-[#fffafa]/30 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="Winter Wonder " src="/favicon.png" class="-my-7 mx-auto -mt-9 flex h-auto w-28" />
			</div>
		</label>
	</li>
	<li>
		<input type="radio" id="hosting-4" name="picture" value="4" class="peer" bind:group={gift} />
		<label
			for="hosting-4"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-[#ffa083] p-5 text-gray-500 hover:bg-[#bb433d]/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="3 Year Anni " src="/favicon.png" class="-my-8 mx-auto -mt-8 flex h-auto w-28" />
			</div>
		</label>
	</li>
</ul>
