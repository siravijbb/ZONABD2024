<script lang="ts">
	import Corousel from '$components/home/Corousel/Corousel.svelte';
	import Progress from '$components/home/Progress/Donate.svelte';
	let PercentProgress: number;
	let totalRequired = 20000;
	let readableTotalRequired = numberWithCommas(totalRequired);
	let totalDonated = 15000;
	let readableTotalDonated = numberWithCommas(totalDonated);
	let totalLeft = totalRequired - totalDonated;
	PercentProgress = (totalDonated / totalRequired) * 100;
	let colorcode = "#00a99d"
	function numberWithCommas(x: number): string {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
</script>

<div class="mx-auto grid w-full max-w-4xl grid-cols-1 space-y-2 rounded-lg bg-gray-200 shadow-lg">
	<div class="mx-auto md:mt-2 h-fit w-full rounded-lg bg-white pb-9 shadow-lg">
		<div class="">
			<h1 class="mx-auto py-2 text-center text-4xl font-semibold text-aisha">HBD AISHA PROJECT 2024</h1>
			<Corousel />
		</div>
		<div>
			<h2 class="mb-2 mt-4 text-center text-3xl font-semibold text-aisha">PROJECT OVERALL</h2>
			<img class="mx-auto h-auto w-[80%]" src="/Overall/30novComing.webp" alt="project overall" />
			<p class="text-md mx-auto px-2 py-2 text-center">
				โดยที่ประชาชนแห่งสหประชาชาติได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษยชนขั้นพื้นฐานในศักดิ์ศรีและค่าของมนุษย์และในสิทธิ
				ที่เท่าเทียมกันของบรรดาชายและหญิงและได้มุ่งมั่นที่จะส่งเสริมความก้าวหน้าทางสังคมและมาตรฐาน
				แห่งชีวิตที่ดีขึ้นในอิสรภาพอันกว้างขวางยิ่งขึ้น โดยที่รัฐสมาชิกต่างปฏิญาณที่จะบรรลุถึงซึ่ง
				การส่งเสริมการเคารพและการยึดถือสิทธิมนุษยชน
				และอิสรภาพขั้นพื้นฐานโดยสากลโดยความร่วมมือกับสหประชาชาติ
			</p>
		</div>
		<div class="mx-auto mt-2 b px-4">
			<Progress percentprogress={PercentProgress} />
			<h2 class="  text-center text-2xl font-semibold text-aisha">We are {PercentProgress}% until complete</h2>
			<div class="mx-auto text-lg">
				<small class="mx-auto -mt-1 block text-center"
					>ยอดสมทบทุนตอนนี้มี {readableTotalDonated} บาท</small
				>
				<small class="mx-auto -mt-2 block text-center"
					>เราที่ต้องการ {readableTotalRequired} บาทเพื่อขึ้นป้ายBillboard</small
				>
			</div>
			<div class="">
				<img
					class="mx-auto h-40 w-auto"
					src="/images/imgHoku/HOKUMRTSAMYAN.webp"
					alt="QR PROMPPAY"
				/>
				<div class="mx-auto block text-center">
					<small class=" text-center">บริจาคได้ที่</small>
					<div class="-mt-2">
						<p>sdfjmsekfjirjeklfejkl</p>
						<p class="-mt-1">sdfjmsekfjirjeklfejkl</p>
					</div>
				</div>
			</div>
		</div>
		<div class="mx-2 -mt-6">
			<hr class="mt-8 h-px border-aisha bg-gray-300 " />
			<h2 class="text-center text-5xl font-semibold text-aisha">Come and join us!</h2>
		</div>
	</div>
</div>
