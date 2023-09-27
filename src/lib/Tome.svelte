<script lang="ts">
	import TomeTitle from '$lib/TomeTitle.svelte';
	import LibraryPanel from '$lib/LibraryPanel.svelte';

	export let name: string;
</script>

<LibraryPanel classes="tome">
	<header>
		<TomeTitle {name} />
		<slot name="header" />
	</header>
	<slot />
</LibraryPanel>

<style>
	header {
		margin-bottom: var(--spacing_xl3);
	}
</style>
