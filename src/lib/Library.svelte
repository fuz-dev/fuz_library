<script lang="ts">
	import {library_items, type LibraryItemWithComponent} from '$lib/library_items';

	export let items: LibraryItemWithComponent[] = library_items;
</script>

<div class="library">
	{#each items as item (item)}
		<svelte:component this={item.component} />
	{/each}
</div>

<style>
	.library {
		width: 100%;
	}
	.library :global(.library_item) {
		margin-bottom: var(--spacing_xl9) !important;
	}
</style>
