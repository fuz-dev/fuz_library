import type {ComponentType} from 'svelte';

import Library from '$routes/library/Library/+page.svelte';

// TODO dynamic import

// TODO rename?
export interface LibraryItem {
	slug: string;
	pathname: string;
	name: string;
	category: string;
	related: string[];
}

export type LibraryItemWithComponent = LibraryItem & {component: ComponentType};

// TODO BLOCK extract data
export const library_items_by_name: Map<string, LibraryItemWithComponent> = new Map(
	[
		{
			name: 'Library',
			slug: 'Library',
			pathname: '',
			category: 'components',
			component: Library,
			related: [], // TODO externals?
		},
	].map((item) => {
		item.pathname = `/library/${item.slug}`;
		return [item.name, item];
	}),
);

export const library_items: LibraryItemWithComponent[] = Array.from(library_items_by_name.values());
