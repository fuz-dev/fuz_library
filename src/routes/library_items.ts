import {
	library_items_by_name,
	init_library_item,
	type LibraryItemWithComponent,
} from '$lib/library_item';
import Library from '$routes/library/Library/+page.svelte';

export const initial_library_items: LibraryItemWithComponent[] = [
	{
		name: 'Library',
		slug: 'Library',
		pathname: '',
		tagline: '',
		summary: 'a component to make a library',
		category: 'components',
		component: Library,
		related: [], // TODO externals?
	},
];

for (const item of initial_library_items) {
	library_items_by_name.set(item.name, init_library_item(item));
}
