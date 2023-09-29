<script lang="ts">
	import {page} from '$app/stores';
	import {is_iframed} from '@grogarden/util/dom.js';
	import Breadcrumbs from '@fuz.dev/fuz/Breadcrumbs.svelte';

	// TODO this could be a prop passed by `Breadcrumbs`, is commonly needed
	$: ({pathname} = $page.url);
	$: root = pathname === '/';

	const iframed = is_iframed();
	const enabled = !iframed;
</script>

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
