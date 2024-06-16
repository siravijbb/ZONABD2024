<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
</script>

<Navbar class="outline outline-1 outline-gray-950">
	<NavBrand href="/" class="mx-auto sm:mx-12">

		<span class=" mx-auto block text-xl font-semibold lg:flex dark:text-white"
			>Guppiens 2024<span class="xs:block ml-1 sm:flex md:ml-0 md:block lg:ml-1"
				>Fanclub Project</span
			></span
		>
	</NavBrand>

	<NavHamburger />

	<NavUl>
		<NavLi
			nonActiveClass="outline md:outline-none  outline-offset-2 outline-1 mb-1 md:mb-0 hover:text-aisha"
			href="/">Home</NavLi
		>
		<NavLi
			nonActiveClass=" outline md:outline-none  outline-offset-2 outline-1 mb-1 md:mb-0 hover:text-aisha"
			href="/#ProjectInfo"><div>ข้อมูลโปรเจ็ค</div>
			<div class="md:text-center">Project Info</div></NavLi
		>
		<NavLi
				nonActiveClass="fixed lg:relative collapse lg:visible outline md:outline-none  outline-offset-2 outline-1 mb-1 md:mb-0 hover:text-aisha"
				href="https://ar-code.com/KhYSZXgdn"><div>Postcard</div>
			</NavLi
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


<style>
	@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap');
	@font-face {
		font-family: 'Barlow Condensed';
		src: url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap')
		format('truetype');
	}
	@font-face {
		font-family: 'Noto Sans Thai Looped';
		src: url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+Thai+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap')
		format('truetype');
	}


	div {
		font-family: 'Barlow Condensed','Noto Sans Thai Looped', sans-serif;

	}
</style>
