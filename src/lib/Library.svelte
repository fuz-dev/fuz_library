<script lang="ts">
	import type {TomeWithComponent} from '$lib/tome.js';
	import {tomes as default_tomes} from '$routes/tomes';

	export let tomes: TomeWithComponent[] = default_tomes; // TODO BLOCK get from context or prop only

	$: console.log(`Library items`, tomes);
</script>

<div class="tomes">
	{#each tomes as tome (tome)}
		<svelte:component this={tome.component} />
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
