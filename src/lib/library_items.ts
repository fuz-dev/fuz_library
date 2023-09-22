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

export const library_items_by_name: Map<string, MenuItemWithComponent> = new Map(
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

export const library_items: MenuItemWithComponent[] = Array.from(library_items_by_name.values());
