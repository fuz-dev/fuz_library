<script lang="ts">
	import {page} from '$app/stores';
	import {getContext} from 'svelte';

	import {to_library_path_info} from '$lib/helpers';

	export let name: string;

	// TODO hacky to avoid a circular dependency problem
	const library_items_by_name: any = getContext('library_items_by_name');
	$: library_item = library_items_by_name.get(name);

	$: ({path, path_is_active} = to_library_path_info(library_item.slug, $page.url.pathname));
</script>

<h2 class="box" id={name}>
	{#if path_is_active}{name}{:else}<a href={path}>{name}</a>{/if}
</h2>
