<script lang="ts">
	import {page} from '$app/stores';
	import {is_iframed} from '@grogarden/util/dom.js';
	import Breadcrumbs from '@fuz.dev/fuz/Breadcrumbs.svelte';

	// TODO rename? `PageNav`? `SiteNav`?

	// TODO this could be a prop passed by `Breadcrumbs`, is commonly needed
	$: ({pathname} = $page.url);
	$: root = pathname === '/';

	// TODO this is a hack to hide the nav for the mural when it's iframed, what's a better way?
	const iframed = is_iframed();
	$: enabled = !iframed || pathname !== '/sketch/mural';
</script>

<!-- TODO probably change to ul/li once styles are right -->

{#if enabled}
	<nav class:root>
		<Breadcrumbs>
			{#if root}
				<span>fuz</span>
			{:else}
				<span class="icon">🧶</span>
			{/if}
		</Breadcrumbs>
	</nav>
{/if}

<style>
	nav {
		font-size: var(--size_xl);
	}
	.root {
		--text_decoration_selected: none;
	}
	.icon {
		font-size: var(--size_md);
	}
</style>
