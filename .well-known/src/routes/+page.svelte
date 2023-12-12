<script lang="ts">
	import {base} from '$app/paths';

	import Library_Header from '$lib/Library_Header.svelte';
	import Library_Footer from '$lib/Library_Footer.svelte';
	import {parse_package_meta} from '$lib/package_meta.js';
	import {package_json, src_json} from '$routes/package.js';

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main class="box width_full">
	<div class="box width_md">
		<section>
			<Library_Header {pkg} />
		</section>
		<section>
			<a class="library-link panel" href="{base}/library">library</a>
		</section>
		<section class="box">
			<a href="{base}/about" class="chip">about</a>
		</section>
		<section>
			<Library_Footer {pkg} root_url="https://www.fuz.dev/" />
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
