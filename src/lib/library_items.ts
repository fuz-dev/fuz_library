import type {ComponentType} from 'svelte';

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

export const library_items_by_name: Map<string, LibraryItemWithComponent> = new Map();

// TODO use Svelte 5 pattern here for $derived
export const library_items: () => LibraryItemWithComponent[] = () =>
	Array.from(library_items_by_name.values());

export const init_library_item = <T extends LibraryItemWithComponent>(item: T): T => {
	if (!item.pathname) {
		item.pathname = `/library/${item.slug}`;
	}
	return item;
};
