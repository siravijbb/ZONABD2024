<script lang="ts">
	import { Progressbar } from 'flowbite-svelte';
	export let percentprogress: number; // Declare percentprogress as a prop    let percent = 0;
</script>

<Progressbar progress={percentprogress} size="h-5 md:h-7" color="green" />
