<script lang="ts">
	import LibraryItemTitle from '$lib/LibraryItemTitle.svelte';
	import LibraryPanel from '$lib/LibraryPanel.svelte';

	export let name: string;
</script>

<LibraryPanel classes="library_item">
	<header>
		<LibraryItemTitle {name} />
		<slot name="header" />
	</header>
	<slot />
</LibraryPanel>

<style>
	header {
		margin-bottom: var(--spacing_xl3);
	}
</style>
