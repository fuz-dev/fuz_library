import type {ComponentType} from 'svelte';
import {z} from 'zod';

export const Tome = z.object({
	slug: z.string(),
	pathname: z.string(),
	name: z.string(),
	// TODO ? summary: z.string(),
	category: z.string(),
	related: z.array(z.string()),
});
export type Tome = z.infer<typeof Tome>;

export type TomeWithComponent = Tome & {component: ComponentType};

/**
 * For now, mutate this directly to set up the library items.
 * TODO use Svelte5 patterns
 */
export const tomes_by_name: Map<string, TomeWithComponent> = new Map();

export const init_tome = <T extends TomeWithComponent>(item: T): T => {
	if (!item.pathname) {
		item.pathname = `/library/${item.slug}`;
	}
	return item;
};
