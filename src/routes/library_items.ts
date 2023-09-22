import {
	library_items_by_name,
	init_library_item,
	type LibraryItemWithComponent,
} from '$lib/library_items';
import Library from '$routes/library/Library/+page.svelte';
import {package_json} from '$routes/package_json';

console.log(`package_json`, package_json);

export const initial_library_items: LibraryItemWithComponent[] = [
	{
		name: 'Library',
		slug: 'Library',
		pathname: '',
		tagline: '',
		summary: 'a component to make a library',
		category: 'components',
		component: Library,
		// TODO BLOCK I'm conflating the repo and items
		package: package_json,
		related: [], // TODO externals?
	},
];

for (const item of initial_library_items) {
	library_items_by_name.set(item.name, init_library_item(item));
}
