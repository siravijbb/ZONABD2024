<script lang="ts">
	function UgiftInvalid() {
		const resultElement = document.getElementById('errorSide');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ พี่ต้องเลือกรูปของด้านล่างกรอบด้วย! สิราวิ้จจะบึ บังคับ!';
		}
	}
	export let Sideimage: number;
</script>

<ul class="grid w-full grid-cols-4 gap-2 md:grid-cols-4">
	<li>
		<input
			type="radio"
			id="image-small"
			name="picture"
			value="1"
			class="peer"
			required
			on:invalid|preventDefault={UgiftInvalid}
			bind:group={Sideimage}
		/>
		<label
			for="image-small"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-zona p-5 text-white hover:bg-zona/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="1 " src="/Wish/ZONA/1.png" class="-my-4 mx-auto flex h-auto w-28 md:-mt-8" />
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
			on:invalid|preventDefault={UgiftInvalid}
		/>
		<label
			for="image-big"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-zona-SLIVER p-5 text-white hover:bg-zona-SLIVER/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="2" src="/Wish/ZONA/2.png" class="-my-4 mx-auto flex h-auto w-28 md:-mt-8" />
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
			on:invalid|preventDefault={UgiftInvalid}
		/>
		<label
			for="image-3"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-zona-SKY p-5 text-gray-500 hover:bg-zona-SKY/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="3" src="/Wish/ZONA/3.png" class="-my-4 mx-auto flex h-auto w-28 md:-mt-8" />
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
			on:invalid|preventDefault={UgiftInvalid}
		/>
		<label
			for="image-4"
			class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-zona-GOLD p-5 text-gray-500 hover:bg-zona-GOLD/70 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
		>
			<div class="mx-auto">
				<img alt="4" src="/Wish/ZONA/4.png" class="-my-4 mx-auto flex h-auto w-28 md:-mt-8" />
			</div>
		</label>
	</li>
</ul>
