<script lang="ts">
	import type {PackageJson} from '@feltjs/gro/util/package_json.js';

	export let package_json: PackageJson;

	// TODO think through with other presentations - Details, Summary, Card

	// TODO refactor
	$: has_library = !!package_json.exports;
</script>

<section>
	<!-- TODO h1 is tricky here, maybe should be h2? probably too much complexity to customize, maybe rename to `PackagePage`? or a title slot? -->
	<h1>{package_json.name}</h1>
</section>
<section>
	<blockquote>{package_json.description}</blockquote>
</section>
{#if has_library}
	<section>
		<code class="chip"
			>npm i -D&nbsp;<a href="https://npmjs.com/package/{package_json.name}">{package_json.name}</a
			></code
		>
	</section>
{/if}
{#if package_json.repository}
	<!-- TODO multiple types, add to Gro -->
	<div>
		repository: {JSON.stringify(package_json.repository)}
	</div>
	<!-- TODO more details behind a `<details>`, including author -->
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
