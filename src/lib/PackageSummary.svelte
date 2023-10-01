<script lang="ts">
	import {page} from '$app/stores';
	import {format_host, type PackageMeta} from '$lib/package.js';

	export let pkg: PackageMeta; // TODO normalized version with cached primitives?

	$: ({package_json, npm_url, repo_name, repo_url, changelog_url, homepage_url} = pkg);
	$: ({name, version, description} = package_json);
</script>

<div class="package_summary">
	<!-- TODO maybe continue this slot pattern, or maybe simplify? -->
	<header class="spaced">
		<slot name="repo_name" {repo_name}><div class="repo_name">{repo_name}</div></slot>
	</header>
	{#if description}
		<slot name="description" {description}
			><blockquote class="spaced text_align_center">{description}</blockquote></slot
		>
	{/if}
	{#if npm_url}
		<slot name="npm_url" {npm_url}
			><a class="npm_url spaced chip box" href={npm_url}>{name}</a></slot
		>
	{/if}
	{#if homepage_url}
		<div class="spaced">
			<a class="chip" class:active={homepage_url === $page.url.href} href={homepage_url}
				>{format_host(homepage_url)}</a
			>
		</div>
	{/if}
	<div class="box row spaced">
		{#if repo_url}
			<a class="chip" href={repo_url}>repo</a>
		{/if}
		{#if changelog_url}
			<a class="chip" title="version" href={changelog_url}>{version}</a>
		{/if}
		<!-- TODO for detail view -->
		<!-- {#if license_url}
			<a class="chip" title="license" href={license_url}>{license}</a>
		{/if} -->
	</div>
	<!-- TODO more details behind a `<details>`, including author -->
</div>

<!-- TODO better rendering, also show author, etc -->

<style>
	.package_summary {
		padding: var(--spacing_xl2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.repo_name {
		/* same as h1 by default (maybe add .h1 utility class?) */
		font-size: var(--size_xl3);
		font-weight: 300;
	}
	.npm_url {
		font-size: var(--size_lg);
		font-family: var(--font_family_mono);
		margin-bottom: var(--spacing_lg);
	}
	.chip {
		margin-left: var(--spacing_xs2);
		margin-right: var(--spacing_xs2);
	}
</style>
