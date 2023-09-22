import type {ComponentType} from 'svelte';

import Library from '$routes/library/Library/+page.svelte';

// TODO dynamic import

// TODO rename?
export interface MenuItem {
	slug: string;
	pathname: string;
	name: string;
	category: string;
	related: string[];
}

export type MenuItemWithComponent = MenuItem & {component: ComponentType};

export const libraryItemsByName: Map<string, MenuItemWithComponent> = new Map(
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

export const libraryItems: MenuItemWithComponent[] = Array.from(libraryItemsByName.values());
