<script lang="ts">
	import TomeTitle from '$lib/TomeTitle.svelte';
	import LibraryPanel from '$lib/LibraryPanel.svelte';
	import type {Tome} from '$lib/tome.js';

	// TODO component name?

	export let tome: Tome;
</script>

<LibraryPanel>
	<header>
		<slot name="header">
			<TomeTitle {tome} />
		</slot>
	</header>
	<slot />
</LibraryPanel>

<style>
	header {
		margin-bottom: var(--spacing_3);
	}
</style>
