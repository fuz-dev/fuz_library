import {getContext, type ComponentType, setContext} from 'svelte';
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

export type TomeWithComponent = Tome & {component: ComponentType}; // TODO delete this?

export const init_tome = <T extends TomeWithComponent>(item: T): T => {
	if (!item.pathname) {
		item.pathname = `/library/${item.slug}`;
	}
	return item;
};

const TOMES_KEY = Symbol();

export const get_tomes = (): Map<string, TomeWithComponent> => getContext(TOMES_KEY);
export const set_tomes = (tomes: Map<string, TomeWithComponent>): Map<string, TomeWithComponent> =>
	setContext(TOMES_KEY, tomes);

export const get_tome = (name: string): TomeWithComponent => {
	const tomes = get_tomes();
	const tome = tomes.get(name);
	if (!tome) throw Error('unable to find tome ' + name);
	return tome;
};
