<script lang="ts">
	import {base} from '$app/paths';

	import PackageDetails from '$lib/PackageDetails.svelte';
	import packages from '$lib/packages.json';

	const root_package = packages[0];
	const package_json = root_package.package_json as any; // TODO why is the type off?
</script>

<main class="prose">
	<PackageDetails {package_json} />
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
