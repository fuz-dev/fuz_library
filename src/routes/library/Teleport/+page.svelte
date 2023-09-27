<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import Teleport from '$lib/Teleport.svelte';
	import Tome from '$lib/Tome.svelte';

	const LIBRARY_ITEM_NAME = 'Teleport';

	let swap = true;
	let teleport_1: HTMLElement | undefined = undefined;
	let teleport_2: HTMLElement | undefined = undefined;
</script>

<Tome name={LIBRARY_ITEM_NAME}>
	<section class="prose width_sm">
		<aside>
			<p>
				The<code>Dialog</code> uses the <code>Teleport</code> to mount itself to a top-level DOM
				element, instead of the location that the <code>Dialog</code> component appears in code, solving
				various issues like unwanted style inheritance.
			</p>
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
</Tome>

<style>
	.teleports {
		display: flex;
	}
	.teleports > div {
		width: var(--spacing_xl8);
		height: var(--spacing_xl8);
		font-size: var(--size_xl3);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/* TODO standardize this */
	section {
		margin-bottom: var(--spacing_xl3);
	}
</style>
