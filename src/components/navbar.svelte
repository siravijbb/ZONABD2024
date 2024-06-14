<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
</script>

<Navbar class="outline outline-1 outline-gray-950">
	<NavBrand href="/" class="mx-auto sm:mx-12">
		<img
			src="/favicon.png"
			class="absolute left-4 me-3 h-6 sm:h-9 md:relative md:left-0"
			alt="Flowbite Logo"
		/>
		<span class=" mx-auto block text-xl font-semibold lg:flex dark:text-white"
			>Guppiens 2024<span class="xs:block ml-1 sm:flex md:ml-0 md:block lg:ml-1"
				>Fanclub Project</span
			></span
		>
	</NavBrand>
	<div class="flex md:order-2">
		<Button
			size="sm"
			class="collapse hidden text-slate-100 md:visible "
			href="https://discord.gg/ZHh5zYUxq9">ดิสคอร์ดไอช่า</Button
		>
		<NavHamburger />
	</div>
	<NavUl>
		<NavLi
			nonActiveClass="outline md:outline-none  outline-offset-2 outline-1 mb-1 md:mb-0 hover:text-aisha"
			href="/">Home</NavLi
		>
		<NavLi
			nonActiveClass=" outline md:outline-none  outline-offset-2 outline-1 mb-1 md:mb-0 hover:text-aisha"
			href="/#ProjectInfo">ข้อมูลโปรเจ็ค</NavLi
		>
		<NavLi
			nonActiveClass=" outline md:outline-none  outline-offset-2 outline-1 mb-1 md:mb-0 hover:text-aisha"
			href="/wishes"
			><div>ส่งและอ่านคำอวยพร</div>
			<div class="md:text-center">Send and Read Wish</div></NavLi
		>
		<NavLi
			nonActiveClass=" outline md:outline-none  outline-offset-2 outline-1 mb-1 md:mb-0 hover:text-aisha"
			href="/wishes/checkwish"
			><div>ค้นหาชื่อที่ลง</div>
			<div class="md:text-center">Find your name</div></NavLi
		>
	</NavUl>
</Navbar>
