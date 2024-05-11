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
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="#ProjectInfo">ข้อมูลโปรเจ็ค</NavLi>
		<NavLi href="#Donate">สมทบทุน</NavLi>
		<NavLi href="#Joinus">มาช่วยกัน!</NavLi>
	</NavUl>
</Navbar>
