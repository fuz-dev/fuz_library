<script lang="ts">
	import type {TomeWithComponent} from '$lib/tome';
	import {tomes} from '$routes/tomes';

	export let items: TomeWithComponent[] = tomes;
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
