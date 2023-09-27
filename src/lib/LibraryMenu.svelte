<script lang="ts">
	import {page} from '$app/stores';
	import {slide} from 'svelte/transition';
	import {base} from '$app/paths';

	import type {TomeData} from '$lib/tome';
	import LibraryPanel from '$lib/LibraryPanel.svelte';

	// itemsMenu floats alongside the docs, showing scrolled item as active
	export let items: TomeData[];

	$: console.log(`items`, items);

	let items_by_category: Record<string, TomeData[]>;
	$: items_by_category = items.reduce(
		(result, c) => {
			if (!(c.category in result)) result[c.category] = [];
			result[c.category].push(c);
			return result;
		},
		{} as Record<string, TomeData[]>,
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
