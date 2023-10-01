<script lang="ts">
	import {base} from '$app/paths';

	import PackageSummary from '$lib/PackageSummary.svelte';
	import LibraryFooter from '$lib/LibraryFooter.svelte';
	import {parse_package_meta} from '$lib/package.js';
	import packages from '$lib/packages.json'; // TODO instead import `.well-known/package.json`? SvelteKit is warning

	const root_pkg = packages[0];

	const pkg = parse_package_meta(root_pkg.url, root_pkg.package_json);
</script>

<main>
	<section>
		<div class="summary_wrapper box panel">
			<PackageSummary {pkg} />
		</div>
	</section>
	<section>
		<a class="library-link panel" href="{base}/library">library</a>
	</section>
	<section class="box">
		<LibraryFooter {pkg} root_url="https://www.fuz.dev/" />
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
	.summary_wrapper {
		margin-top: var(--spacing_xl);
	}
	section {
		margin-bottom: var(--spacing_xl5);
	}
</style>
