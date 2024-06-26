<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
</script>

<Navbar class="bg-zona text-zona-SLIVER outline outline-1 outline-gray-950">
	<NavBrand href="/" class="mx-auto sm:mx-12">
		<span class=" mx-auto block text-lg font-semibold md:text-xl lg:flex"
			>ZONA Birthday 2024<span class="xs:block ml-1 sm:flex md:ml-0 md:block lg:ml-1"
				>Fanclub Project</span
			></span
		>
	</NavBrand>

	<NavHamburger />

	<NavUl>
		<NavLi
			nonActiveClass="outline md:outline-none  outline-offset-2 outline-1 mb-1 md:mb-0 hover:text-zona-SKY"
			href="/">Home</NavLi
		>
		<NavLi
			nonActiveClass=" outline md:outline-none  outline-offset-2 outline-1 mb-1 md:mb-0 hover:text-zona-SKY"
			href="/#forms"
			><div>ส่งคำอวยพร</div>
			<div class="md:text-center">Send The Wish</div></NavLi
		>

		<NavLi
			nonActiveClass=" outline md:outline-none  outline-offset-2 outline-1 mb-1 md:mb-0 hover:text-zona-SKY"
			href="/checkwish"
			><div>ค้นหาชื่อที่ลง</div>
			<div class="md:text-center">Find your name</div></NavLi
		>
	</NavUl>
	<div class="collapse hidden md:order-2 xl:block">
		<Button
			size="sm"
			class="collapse  bg-zona-SKY text-slate-100 hover:bg-zona-SKY/50 lg:visible"
			href="https://discord.gg/bJfWxp5mY2">ดิสคอร์ดZONATA</Button
		>
	</div>
</Navbar>

<style>
</style>
