<script lang="ts">
	import type {PackageJson} from '@feltjs/gro/util/package_json.js';

	export let pkg: PackageJson;

	// TODO maybe move this to a wrapper?
	$: has_library = !!pkg.exports;

	console.log(`pkg`, pkg);
</script>

<section>
	<h1>{pkg.name}</h1>
</section>
<section>
	<blockquote>{pkg.description}</blockquote>
</section>
{#if has_library}
	<section>
		<code class="chip"
			>npm i -D&nbsp;<a href="https://npmjs.com/package/@fuz.dev/fuz">{pkg.name}</a></code
		>
	</section>
{/if}

<style>
	section {
		padding: var(--spacing_xl2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	code {
		display: flex;
		align-items: center;
		text-align: center;
		font-size: var(--size_lg);
		white-space: nowrap;
	}
	.panel {
		padding: var(--spacing_xl2);
		font-size: var(--size_xl);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.library-link {
		font-size: var(--size_xl3);
	}
</style>
