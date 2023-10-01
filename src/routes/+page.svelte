<script lang="ts">
	import {base} from '$app/paths';

	import PackageSummary from '$lib/PackageSummary.svelte';
	import {parse_package_meta} from '$lib/package.js';
	import packages from '$lib/packages.json'; // TODO instead import `.well-known/package.json`? SvelteKit is warning

	const root_pkg = packages[0];

	const pkg = parse_package_meta(root_pkg.url, root_pkg.package_json);
</script>

<main class="prose">
	<PackageSummary {pkg} />
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
