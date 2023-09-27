<script lang="ts">
	import {page} from '$app/stores';
	import {getContext} from 'svelte';

	import {to_library_path_info} from '$lib/helpers';

	export let name: string;

	// TODO hacky to avoid a circular dependency problem
	const tomes_by_name: any = getContext('tomes_by_name');
	$: tome = tomes_by_name.get(name);

	$: ({path, path_is_active} = to_library_path_info(tome.slug, $page.url.pathname));
</script>

<h2 class="box" id={name}>
	{#if path_is_active}{name}{:else}<a href={path}>{name}</a>{/if}
</h2>
