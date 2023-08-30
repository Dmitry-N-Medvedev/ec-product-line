<script>
	import 'inter-ui/inter.css';
	import { env } from '$env/dynamic/public';
	import { browser as IsInBrowser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	onMount(async () => {
		if (IsInBrowser === true) {
			console.log('onMount');
		}
	});

	onDestroy(async () => {
		if (IsInBrowser === true) {
			console.log('onDestroy');
		}
	});
</script>

<article>
	<slot />
</article>
