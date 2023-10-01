<script lang="ts">
	import {base} from '$app/paths';

	import LibraryHeader from '$lib/LibraryHeader.svelte';
	import LibraryFooter from '$lib/LibraryFooter.svelte';
	import {parse_package_meta} from '$lib/package.js';

	// TODO SvelteKit warns about this but we put `/static` in `/src` because of what it's saying,
	/// maybe change to import as the first item from `packages`
	import package_json from '../static/.well-known/package.json';
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
		margin-bottom: var(--spacing_xl5);
	}
	section {
		margin-top: var(--spacing_xl3);
		margin-bottom: var(--spacing_xl3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.library-link {
		font-size: var(--size_xl3);
		padding: var(--spacing_xl2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
