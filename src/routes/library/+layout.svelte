<script lang="ts">
	import {page} from '$app/stores';
	import Breadcrumbs from '@fuz.dev/fuz/Breadcrumbs.svelte';

	import LibraryMenu from '$lib/LibraryMenu.svelte';
	import LibraryPanel from '$lib/LibraryPanel.svelte';
	import LibraryFooter from '$lib/LibraryFooter.svelte';
	import {set_tomes} from '$lib/tome.js';
	import {tomes} from '$routes/library/tomes.js';

	const tomes_by_name = new Map(tomes.map((t) => [t.name, t]));
	set_tomes(tomes_by_name);

	$: selected_item = tomes.find((c) => c.pathname === $page.url.pathname);
	$: items_related_to_selected = selected_item?.related?.map((r) => tomes_by_name.get(r)!);

	// TODO factor this code out and publish the layout
</script>

<main>
	<nav><Breadcrumbs>🧶</Breadcrumbs></nav>
	<div class="layout width_md">
		<div class="menu_wrapper">
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
				<code class="box row padded_md panel spaced"
					>npm i -D&nbsp;<a href="https://www.npmjs.com/package/@fuz.dev/fuz_library"
						>@fuz.dev/fuz_library</a
					>
				</code>
				<a class="padded_md panel" href="https://github.com/fuz-dev/fuz_library"
					>github.com/fuz-dev/fuz_library</a
				>
			</div></LibraryPanel
		>
		<slot />
		<section class="box"><LibraryFooter /></section>
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
	.layout {
		position: relative;
	}
	nav {
		font-size: var(--size_xl);
	}
	.menu_wrapper {
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
		.menu_wrapper {
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
