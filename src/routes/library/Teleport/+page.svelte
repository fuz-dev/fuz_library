<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Teleport from '$lib/Teleport.svelte';
	import TomeDetails from '$lib/TomeDetails.svelte';

	const LIBRARY_ITEM_NAME = 'Teleport';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let swap = true;
	let teleport_1: HTMLElement | undefined = undefined;
	let teleport_2: HTMLElement | undefined = undefined;
</script>

<TomeDetails {tome}>
	<section class="prose width_sm">
		<aside>
			<p>
				The <code>Teleport</code> can be used to relocate other elements too, in the rare cases that's
				useful.
			</p>
			<p>Use only when necessary or fun.</p>
		</aside>
	</section>
	<section>
		<Code
			content={`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button on:click={() => (swap = !swap)}>
	teleport the bunny
</button>`}
		/>
	</section>
	<section>
		<!-- TODO how to do this with the `state` API? the `bind` in particular -- maybe make them stores? -->
		<Teleport to={swap ? teleport_1 : teleport_2}>🐰</Teleport>
		<div class="teleports">
			<div class="panel" bind:this={teleport_1} />
			<div class="panel" bind:this={teleport_2} />
		</div>
		<button on:click={() => (swap = !swap)}> teleport the bunny </button>
	</section>
</TomeDetails>

<style>
	.teleports {
		display: flex;
	}
	.teleports > div {
		width: var(--spacing_8);
		height: var(--spacing_8);
		font-size: var(--size_3);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/* TODO standardize this */
	section {
		margin-bottom: var(--spacing_3);
	}
</style>
