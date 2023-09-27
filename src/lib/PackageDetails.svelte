<script lang="ts">
	import type {PackageJson} from '@grogarden/gro/package_json.js';

	export let package_json: PackageJson;

	// TODO think through with other presentations - Details, Summary, Card

	// TODO refactor
	$: has_library = !!package_json.name && !!package_json.exports;
</script>

<section>
	<!-- TODO h1 is tricky here, maybe should be h2? probably too much complexity to customize, maybe rename to `PackagePage`? or a title slot? -->
	<h1>{package_json.name}</h1>
	<blockquote>⚠️ work in progress</blockquote>
	{#if package_json.description}
		<blockquote>{package_json.description}</blockquote>
	{/if}
	{#if package_json.version}
		<div>version: {package_json.version}</div>
	{/if}
	{#if package_json.license}
		<div>license: {package_json.license}</div>
	{/if}
</section>
{#if has_library}
	<section>
		<code class="chip"
			>npm i -D&nbsp;<a href="https://npmjs.com/package/{package_json.name}">{package_json.name}</a
			></code
		>
	</section>
{/if}
<!-- TODO better rendering, also show author, etc -->
{#if package_json.repository}
	<section>
		repo:
		{#if typeof package_json.repository === 'string'}
			<a href={package_json.repository}>{package_json.repository}</a>
		{:else}
			{package_json.repository.type} -
			<a href={package_json.repository.url}>{package_json.repository.url}</a>
			<!-- {package_json.repository.directory} -->
		{/if}
	</section>
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
