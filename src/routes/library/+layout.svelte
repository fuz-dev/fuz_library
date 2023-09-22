<script lang="ts">
	import {page} from '$app/stores';
	import {setContext} from 'svelte';
	import Breadcrumbs from '@fuz.dev/fuz/Breadcrumbs.svelte';

	import LibraryMenu from '$lib/LibraryMenu.svelte';
	import {library_items_by_name, library_items, init_library_item} from '$lib/library_items';
	import LibraryPanel from '$lib/LibraryPanel.svelte';
	import Library from '$routes/library/Library/+page.svelte';

	for (const item of [
		{
			name: 'Library',
			slug: 'Library',
			pathname: '',
			category: 'components',
			component: Library,
			related: [], // TODO externals?
		},
	])
		library_items_by_name.set(item.name, init_library_item(item));

	$: selectedItem = library_items().find((c) => c.pathname === $page.url.pathname);
	$: itemsRelatedToSelected = selectedItem?.related?.map((r) => library_items_by_name.get(r)!);

	// TODO factor this code out and publish the layout

	// TODO hacky to avoid a circular dependency problem
	setContext('library_items_by_name', library_items_by_name);
</script>

<div class="layout width_md">
	<div class="menu-wrapper">
		<div class="menu width_sm">
			<LibraryMenu items={library_items()} />
			{#if itemsRelatedToSelected}
				<LibraryMenu items={itemsRelatedToSelected} let:category>
					<h6>related {category}</h6>
				</LibraryMenu>
			{/if}
		</div>
	</div>
	<LibraryPanel>TODO description</LibraryPanel>
	<slot />
	<section class="box">
		<Breadcrumbs>💚</Breadcrumbs>
	</section>
</div>

<style>
	.layout {
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
