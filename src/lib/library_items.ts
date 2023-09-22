import type {PackageJson} from '@feltjs/gro/util/package_json.js';
import type {ComponentType} from 'svelte';

export interface LibraryItemData {
	slug: string;
	pathname: string;
	name: string;
	tagline: string;
	summary: string;
	category: string;
	package: PackageJson;
	related: string[];
}

export type LibraryItemWithComponent = LibraryItemData & {component: ComponentType};

/**
 * For now, mutate this directly to set up the library items.
 * TODO use Svelte5 patterns
 */
export const library_items_by_name: Map<string, LibraryItemWithComponent> = new Map();

// TODO use Svelte 5 pattern here for $derived
export const get_library_items: () => LibraryItemWithComponent[] = () =>
	Array.from(library_items_by_name.values());

export const init_library_item = <T extends LibraryItemWithComponent>(item: T): T => {
	if (!item.pathname) {
		item.pathname = `/library/${item.slug}`;
	}
	return item;
};
