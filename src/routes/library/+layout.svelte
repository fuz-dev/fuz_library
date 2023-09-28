<script lang="ts">
	import {page} from '$app/stores';
	import {setContext} from 'svelte';
	import Breadcrumbs from '@fuz.dev/fuz/Breadcrumbs.svelte';

	import LibraryMenu from '$lib/LibraryMenu.svelte';
	import LibraryPanel from '$lib/LibraryPanel.svelte';
	import {tomes} from '$routes/tomes.js';
	import {set_tomes, tomes_by_name} from '$lib/tome.js';

	// TODO BLOCK
	for (const tome of tomes) tomes_by_name.set(tome.name, tome);
	set_tomes(tomes_by_name);

	console.log(`tomes`, tomes);

	$: selected_item = tomes.find((c) => c.pathname === $page.url.pathname);
	$: console.log(`selected_item`, selected_item);
	$: items_related_to_selected = selected_item?.related?.map((r) => tomes_by_name.get(r)!);
	$: console.log(`items_related_to_selected`, items_related_to_selected);

	// TODO factor this code out and publish the layout

	// TODO try to remove context usage?
	// TODO hacky to avoid a circular dependency problem
	console.log(`tomes_by_name`, tomes_by_name);
	setContext('tomes_by_name', tomes_by_name);
</script>

<main>
	<div class="width_md">
		<div class="menu-wrapper">
			<div class="menu width_sm">
				<LibraryMenu items={tomes} />
				{#if items_related_to_selected}
					<LibraryMenu items={items_related_to_selected} let:category>
						<h6>related {category}</h6>
					</LibraryMenu>
				{/if}
			</div>
		</div>
		<LibraryPanel>
			<div class="prose box text_align_center">
				<blockquote class="width_sm">friendly user zystem</blockquote>
				<code class="box padded_md panel"
					>npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz">@fuz.dev/fuz_library</a>
				</code>
				<a class="padded_md panel" href="https://github.com/fuz-dev/fuz_library"
					>github.com/fuz-dev/fuz_library</a
				>
			</div></LibraryPanel
		>
		<slot />
		<section class="box">
			<Breadcrumbs>🧶</Breadcrumbs>
		</section>
	</div>
</main>

<style>
	main {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: var(--spacing_xl5);
	}
	.menu-wrapper {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		transform: translate3d(calc(-100% - var(--spacing_sm)), 0, 0);
	}
	.menu {
		position: sticky;
		top: 0;
	}
	@media (max-width: 1200px) {
		.menu-wrapper {
			position: relative;
			transform: none;
			margin-bottom: var(--spacing_xl3);
		}
	}
	section {
		padding: var(--spacing_xl2);
	}
	h6 {
		margin-bottom: var(--spacing_md);
		margin-top: var(--spacing_xl3);
	}
	h6:first-child {
		margin-top: 0;
	}
</style>
