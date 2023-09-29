<script lang="ts">
	import type {TomeWithComponent} from '$lib/tome.js';

	export let tomes: TomeWithComponent[];
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
