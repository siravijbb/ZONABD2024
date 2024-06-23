<script lang="ts">
	function giftInvalid() {
		const resultElement = document.getElementById('errorSide');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ คุณต้องเลือกรูปด้วย! นายสิราวิ้จจะบึ บังคับ!';
		}
	}
	export let BSideimage: number;
</script>

<ul class="grid w-full grid-cols-4 gap-2 md:grid-cols-4">
	<li>
		<input
			type="radio"
			id="Bimage-small"
			name="Bpicture"
			value="1"
			class="peer"
			required
			on:invalid|preventDefault={giftInvalid}
			bind:group={BSideimage}
		/>
		<label
			for="Bimage-small"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-zona p-5 text-white hover:bg-zona/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="1 " src="/Wish/ZONA/1.png" class="-my-7 mx-auto  md:-mt-9 flex h-auto w-28" />
			</div>
		</label>
	</li>
	<li>
		<input
			type="radio"
			id="Bimage-big"
			name="Bpicture"
			value="2"
			class="peer"
			bind:group={BSideimage}
			on:invalid|preventDefault={giftInvalid}
		/>
		<label
			for="Bimage-big"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-zona-SLIVER p-5 text-white hover:bg-zona-SLIVER/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="2" src="/Wish/ZONA/2.png" class="-my-7 mx-auto md:-mt-9 flex h-auto w-28" />
			</div>
		</label>
	</li>
	<li>
		<input
			type="radio"
			id="Bimage-3"
			name="Bpicture"
			value="3"
			class="peer"
			bind:group={BSideimage}
			on:invalid|preventDefault={giftInvalid}
		/>
		<label
			for="Bimage-3"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-zona-SKY p-5 text-gray-500 hover:bg-zona-SKY/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="3" src="/Wish/ZONA/3.png" class="-my-7 mx-auto md:-mt-9 flex h-auto w-28" />
			</div>
		</label>
	</li>
	<li>
		<input
			type="radio"
			id="Bimage-4"
			name="Bpicture"
			value="4"
			class="peer"
			bind:group={BSideimage}
			on:invalid|preventDefault={giftInvalid}
		/>
		<label
			for="Bimage-4"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-emerald-600 p-5 text-gray-500 hover:bg-emerald-600/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="4" src="/Wish/ZONA/4.png" class="-my-7 mx-auto md:-mt-8 flex h-auto w-28" />
			</div>
		</label>
	</li>
</ul>
