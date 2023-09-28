<script lang="ts">
	import {page} from '$app/stores';
	import {slide} from 'svelte/transition';
	import {base} from '$app/paths';

	import type {Tome} from '$lib/tome.js';
	import LibraryPanel from '$lib/LibraryPanel.svelte';

	// itemsMenu floats alongside the docs, showing scrolled item as active
	export let items: Tome[];

	$: console.log(`items`, items);

	let items_by_category: Record<string, Tome[]>;
	$: items_by_category = items.reduce(
		(result, c) => {
			if (!(c.category in result)) result[c.category] = [];
			result[c.category].push(c);
			return result;
		},
		{} as Record<string, Tome[]>,
	);
</script>

{#each Object.entries(items_by_category) as [category, items] (category)}
	<div transition:slide>
		<LibraryPanel>
			<div class="library-menu">
				<slot {category}>
					<h6>{category}</h6>
				</slot>
				<menu>
					{#each items as item (item.slug)}
						<li role="none" transition:slide>
							<a
								href="{base}/library/{item.slug}"
								class:selected={item.pathname === $page.url.pathname}>{item.name}</a
							>
						</li>
					{/each}
				</menu>
			</div>
		</LibraryPanel>
	</div>
{/each}

<style>
	.library-menu,
	menu {
		width: 100%;
	}
	h6 {
		padding-bottom: var(--spacing_sm);
	}
	h6:not(:first-child) {
		margin-top: var(--spacing_xl);
	}
</style>
