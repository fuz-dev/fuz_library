<script lang="ts">
	import {base} from '$app/paths';

	import LibraryHeader from '$lib/LibraryHeader.svelte';
	import LibraryFooter from '$lib/LibraryFooter.svelte';
	import {parse_package_meta} from '$lib/package.js';
	import package_json from '$lib/package.json';

	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<main class="box width_full">
	<div class="box width_md">
		<section>
			<LibraryHeader {pkg} />
		</section>
		<section>
			<a class="library-link panel" href="{base}/library">library</a>
		</section>
		<section>
			<LibraryFooter {pkg} root_url="https://www.fuz.dev/" />
		</section>
	</div>
</main>

<style>
	main {
		margin-bottom: var(--spacing_5);
	}
	section {
		margin-top: var(--spacing_3);
		margin-bottom: var(--spacing_3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.library-link {
		font-size: var(--size_3);
		padding: var(--spacing_2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
