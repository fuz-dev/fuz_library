<script lang="ts">
	import {page} from '$app/stores';
	import {format_host, type Package_Meta} from '$lib/package_meta.js';

	export let pkg: Package_Meta; // TODO normalized version with cached primitives?

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
	{#if homepage_url}
		<slot name="homepage_url" {homepage_url}
			><div class="spaced">
				<a class="chip" class:selected={homepage_url === $page.url.href} href={homepage_url}
					>{format_host(homepage_url)}</a
				>
			</div></slot
		>
	{/if}
	<div class="box row spaced">
		{#if repo_url}
			<a class="chip" href={repo_url}>repo</a>
		{/if}
		{#if changelog_url}
			<a class="chip" title="version" href={changelog_url}>{version}</a>
		{/if}
		{#if npm_url}
			<a class="chip" href={npm_url}>npm</a>
		{/if}
	</div>
	{#if npm_url}
		<slot name="npm_url" {npm_url}><blockquote class="npm_url">npm i -D {name}</blockquote></slot>
	{/if}
	<!-- TODO more details behind a `<details>`, including author -->
</div>

<!-- TODO better rendering, also show author, etc -->

<style>
	.package_summary {
		padding: var(--spacing_lg);
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: var(--max_width, var(--width_sm));
	}
	.repo_name {
		font-size: var(--size_2);
		font-weight: 400;
		text-align: center;
	}
	.npm_url {
		font-family: var(--font_family_mono);
		text-align: center;
	}
	.chip {
		margin-left: var(--spacing_xs2);
		margin-right: var(--spacing_xs2);
	}
</style>
