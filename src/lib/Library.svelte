<script lang="ts">
	import {get_tomes, type TomeWithComponent} from '$lib/tome';

	export let items: TomeWithComponent[] = get_tomes();
</script>

<div class="tomes">
	{#each items as item (item)}
		<svelte:component this={item.component} />
	{/each}
</div>

<style>
	.tomes {
		width: 100%;
	}
	/* TODO hacky */
	.tomes :global(.tome) {
		margin-bottom: var(--spacing_xl9) !important;
	}
</style>
