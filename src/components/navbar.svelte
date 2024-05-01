<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
</script>

<Navbar class="outline-gray-950 outline outline-1">
	<NavBrand href="/" class="mx-auto sm:mx-12">
		<img
			src="/favicon.png"
			class="fixed left-4 me-3 h-6 sm:h-9 md:relative md:left-0"
			alt="Flowbite Logo"
		/>
		<span class=" mx-auto block text-xl font-semibold lg:flex dark:text-white"
			>Guppiens 2024<span class="ml-0 lg:ml-1 flex md:block">Fanclub Project</span></span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/docs/components/navbar">Navbar</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>

