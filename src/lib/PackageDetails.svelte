<script lang="ts">
	import type {PackageJson} from '@feltjs/gro/util/package_json.js';

	export let package_json: PackageJson;

	// TODO refactor
	$: has_library = !!package_json.exports;
</script>

<section>
	<h1>{package_json.name}</h1>
</section>
<section>
	<blockquote>{package_json.description}</blockquote>
</section>
{#if has_library}
	<section>
		<code class="chip"
			>npm i -D&nbsp;<a href="https://npmjs.com/package/@fuz.dev/fuz">{package_json.name}</a></code
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
</style>
