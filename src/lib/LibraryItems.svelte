<script lang="ts">
	import {library_items, type LibraryItemWithComponent} from '$lib/library_items';

	export let items: LibraryItemWithComponent[] = library_items;
</script>

<div class="library_items">
	{#each items as item (item)}
		<svelte:component this={item.component} />
	{/each}
</div>

<style>
	.library_items {
		width: 100%;
	}
	/* TODO hacky */
	.library_items :global(.library_item) {
		margin-bottom: var(--spacing_xl9) !important;
	}
</style>
