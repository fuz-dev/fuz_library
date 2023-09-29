<script lang="ts">
	import '@fuz.dev/fuz/style.css';
	import '@fuz.dev/fuz/theme.css';
	import '@fuz.dev/fuz_code/prism.css'; // TODO BLOCK maybe import from Code?

	import Themed from '@fuz.dev/fuz/Themed.svelte';
</script>

<svelte:head>
	<title>@fuz.dev/fuz_library</title>
</svelte:head>

<Themed>
	<slot />
</Themed>
