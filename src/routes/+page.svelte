<script lang="ts">
	import Corousel from '$components/home/Corousel/Corousel.svelte';
	import Progress from '$components/home/Progress/Donate.svelte';
	let PercentProgress: number;
	let totalRequired = 20000;
	let readableTotalRequired = numberWithCommas(totalRequired);
	let totalDonated = 14846;
	let readableTotalDonated = numberWithCommas(totalDonated);
	let totalLeft = totalRequired - totalDonated;
	PercentProgress = parseFloat(((totalDonated / totalRequired) * 100).toFixed(2));
	let colorcode = '#00a99d';
	function numberWithCommas(x: number): string {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
</script>

<div class="mx-auto grid w-full max-w-4xl grid-cols-1 space-y-2 rounded-lg bg-gray-200 shadow-lg">
	<div class="mx-auto h-full w-full rounded-lg bg-white pb-9 shadow-lg md:mt-2">
		<div class="">
			<h1 class="mx-auto py-2 text-center text-4xl font-semibold text-aisha">
				HBD AISHA PROJECT 2024
			</h1>
			<Corousel />
		</div>
		<div class="">
			<h2 class="-mt-2 text-center text-3xl font-semibold text-aisha md:mt-0">PROJECT OVERALL</h2>
			<div class="mx-auto h-[15vh] max-h-96 w-3/6 w-[95%] md:h-[22.5vh]">
				<iframe
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/f6pzEPKrBeo?autoplay=1&mute=1&controls=0&loop=1&playlist=f6pzEPKrBeo&enablejsapi=1&origin=https%3A%2F%2Fhokubirthday2024.polygang.fan&widgetid=1"
					id="widget2"
				/>
			</div>
			<p class="mx-auto px-2 py-2 text-center text-xs md:text-lg">
				โดยที่ประชาชนแห่งสหประชาชาติได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษยชนขั้นพื้นฐานในศักดิ์ศรีและค่าของมนุษย์และในสิทธิ
				ที่เท่าเทียมกันของบรรดาชายและหญิงและได้มุ่งมั่นที่จะส่งเสริมความก้าวหน้าทางสังคมและมาตรฐาน
				แห่งชีวิตที่ดีขึ้นในอิสรภาพอันกว้างขวางยิ่งขึ้น โดยที่รัฐสมาชิกต่างปฏิญาณที่จะบรรลุถึงซึ่ง
				การส่งเสริมการเคารพและการยึดถือสิทธิมนุษยชน
				และอิสรภาพขั้นพื้นฐานโดยสากลโดยความร่วมมือกับสหประชาชาติ
			</p>
		</div>
		<div class="b mx-auto -mt-1 px-4 md:mt-2">
			<Progress percentprogress={PercentProgress} />
			<h2 class="  text-center text-2xl font-semibold text-aisha">
				We are {PercentProgress}% until complete
			</h2>
			<div class="mx-auto -mt-1 text-sm md:mt-0 md:text-lg">
				<small class="mx-auto -mt-1 block text-center"
					>ยอดสมทบทุนตอนนี้มี {readableTotalDonated} บาท</small
				>
				<small class="mx-auto -mt-1 block text-center md:-mt-2"
					>เราที่ต้องการ {readableTotalRequired} บาทเพื่อขึ้นป้ายBillboard</small
				>
			</div>
			<div class="">
				<img class="mx-auto h-60 w-auto" src="/Overall/donate.jpg" alt="QR PROMPPAY" />
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
			<hr class="mt-8 h-px border-aisha bg-gray-300" />
			<h2 class="text-center text-5xl font-semibold text-aisha">Come and join us!</h2>
			<div class="mt-2 grid grid-cols-3 lg:grid-cols-3">
				<a href="/donate" class=" mx-auto h-fit w-fit shadow-lg hover:shadow-2xl">
					<div
						class="mx-auto mt-2 grid h-20 w-20 grid-cols-1 rounded-lg bg-aisha shadow-lg md:h-40 md:w-40"
					>
						<div class="static mx-auto my-auto">
							<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-[75%]" viewBox="0 0 36 36">
								<path
									fill="white"
									d="M5.6 4A1.6 1.6 0 0 0 4 5.6V12h8V4Zm4.4 6H6V6h4Z"
									class="clr-i-outline clr-i-outline-path-1"
								/>
								<path
									fill="white"
									d="M4 30.4A1.6 1.6 0 0 0 5.6 32H12v-8H4ZM6 26h4v4H6Z"
									class="clr-i-outline clr-i-outline-path-2"
								/>
								<path
									fill="white"
									d="M24 32h6.4a1.6 1.6 0 0 0 1.6-1.6V24h-8Zm2-6h4v4h-4Z"
									class="clr-i-outline clr-i-outline-path-3"
								/>
								<path
									fill="white"
									d="M30.4 4H24v8h8V5.6A1.6 1.6 0 0 0 30.4 4m-.4 6h-4V6h4Z"
									class="clr-i-outline clr-i-outline-path-4"
								/>
								<path
									fill="white"
									d="M20 10V8h-4v4h2v-2z"
									class="clr-i-outline clr-i-outline-path-5"
								/>
								<path fill="white" d="M12 12h2v2h-2z" class="clr-i-outline clr-i-outline-path-6" />
								<path fill="white" d="M14 14h4v2h-4z" class="clr-i-outline clr-i-outline-path-7" />
								<path
									fill="white"
									d="M20 6v2h2V4h-8v4h2V6z"
									class="clr-i-outline clr-i-outline-path-8"
								/>
								<path fill="white" d="M4 14h2v4H4z" class="clr-i-outline clr-i-outline-path-9" />
								<path
									fill="white"
									d="M12 16v2h-2v-4H8v4H6v2H4v2h4v-2h2v2h2v-2h2v-4z"
									class="clr-i-outline clr-i-outline-path-10"
								/>
								<path
									fill="white"
									d="M20 16h2v2h2v-2h2v-2h-4v-4h-2v2h-2v2h2z"
									class="clr-i-outline clr-i-outline-path-11"
								/>
								<path
									fill="white"
									d="M18 30h-4v2h8v-2h-2v-2h-2z"
									class="clr-i-outline clr-i-outline-path-12"
								/>
								<path
									fill="white"
									d="M22 20v-2h-2v-2h-2v2h-2v2h2v2h2v-2z"
									class="clr-i-outline clr-i-outline-path-13"
								/>
								<path fill="white" d="M30 20h2v2h-2z" class="clr-i-outline clr-i-outline-path-14" />
								<path fill="white" d="M22 20h6v2h-6z" class="clr-i-outline clr-i-outline-path-15" />
								<path
									fill="white"
									d="M30 14h-2v2h-2v2h2v2h2v-2h2v-2h-2z"
									class="clr-i-outline clr-i-outline-path-16"
								/>
								<path fill="white" d="M20 22h2v6h-2z" class="clr-i-outline clr-i-outline-path-17" />
								<path
									fill="white"
									d="M14 28h2v-2h2v-2h-2v-4h-2z"
									class="clr-i-outline clr-i-outline-path-18"
								/>
								<path fill="none" d="M0 0h36v36H0z" />
							</svg>
						</div>
						<p class="-mt-2 text-center text-xs text-white md:-mt-4 md:text-lg">PROMPPAY</p>
					</div>
				</a>
				<a href="/wishes" class=" mx-auto h-fit w-fit shadow-lg hover:shadow-2xl">
					<div
						class="mx-auto mt-2 grid h-20 w-20 grid-cols-1 rounded-lg bg-aisha shadow-lg md:h-40 md:w-40"
					>
						<div class="static mx-auto my-auto">
							<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-[75%]" viewBox="0 0 24 24">
								<path
									fill="white"
									d="M4 22q-.425 0-.712-.288T3 21v-5q0-.825.588-1.412T5 14v-4q0-.825.588-1.412T7 8h4V6.55q-.45-.3-.725-.725T10 4.8q0-.375.15-.738t.45-.662L12 2l1.4 1.4q.3.3.45.662T14 4.8q0 .6-.275 1.025T13 6.55V8h4q.825 0 1.413.587T19 10v4q.825 0 1.413.588T21 16v5q0 .425-.288.713T20 22zm3-8h10v-4H7zm-2 6h14v-4H5zm2-6h10zm-2 6h14zm14-6H5z"
								/>
							</svg>
						</div>
						<p class="-mt-2 text-center text-xs text-white md:-mt-4 md:text-lg">ส่งคำอวยพร</p>
					</div>
				</a>

				<a href="/postcard" class=" mx-auto h-fit w-fit shadow-lg hover:shadow-2xl">
					<div
						class="mx-auto mt-2 grid h-20 w-20 grid-cols-1 rounded-lg bg-aisha shadow-lg md:h-40 md:w-40"
					>
						<div class="static mx-auto my-auto">
							<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-[75%]" viewBox="0 0 16 16">
								<path
									fill="white"
									fill-rule="evenodd"
									d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5M10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM13 8h-2V6h2z"
								/>
							</svg>
						</div>
						<p class="-mt-2 text-center text-xs text-white md:-mt-4 md:text-lg">สร้างPostcard</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
