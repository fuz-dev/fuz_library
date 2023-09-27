import type {ComponentType} from 'svelte';

export interface TomeData {
	slug: string;
	pathname: string;
	name: string;
	// TODO ? summary: string;
	category: string;
	related: string[];
}

export type TomeWithComponent = TomeData & {component: ComponentType};

/**
 * For now, mutate this directly to set up the library items.
 * TODO use Svelte5 patterns
 */
export const tomes_by_name: Map<string, TomeWithComponent> = new Map();

// TODO use Svelte 5 pattern here for $derived
export const get_tomes: () => TomeWithComponent[] = () => Array.from(tomes_by_name.values());

export const init_tome = <T extends TomeWithComponent>(item: T): T => {
	if (!item.pathname) {
		item.pathname = `/library/${item.slug}`;
	}
	return item;
};
