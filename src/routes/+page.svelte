<script lang="ts">
	import {base} from '$app/paths';

	import PackageSummary from '$lib/PackageSummary.svelte';
	import packages from '$lib/packages.json';

	const root_pkg = packages[0];
</script>

<main class="prose">
	<PackageSummary pkg={root_pkg} />
	<section>
		<a class="library-link panel" href="{base}/library">library</a>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	.library-link {
		font-size: var(--size_xl3);
		padding: var(--spacing_xl2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
