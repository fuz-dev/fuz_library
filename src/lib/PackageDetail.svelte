<script lang="ts">
	import {page} from '$app/stores';
	import {strip_start} from '@grogarden/util/string.js';

	import {format_host, type PackageMeta} from '$lib/package_meta.js';

	export let pkg: PackageMeta; // TODO normalized version with cached primitives?

	// TODO show other data (lines of code)

	$: ({package_json, npm_url, repo_name, repo_url, changelog_url, homepage_url} = pkg);
	$: ({name, version, description, license, repository, exports: pkg_exports} = package_json);

	$: repository_url = repository
		? typeof repository === 'string'
			? repository
			: repository.url
		: null;
	$: license_url = license && repository_url ? repository_url + '/blob/main/LICENSE' : null;

	// TODO refactor
	const to_source_url = (repo_url: string, module_name: string): string =>
		repo_url +
		'/blob/main/src/lib/' +
		(module_name.endsWith('.js') ? module_name.slice(0, -3) + '.ts' : module_name);

	// TODO helper, look at existing code
	$: modules = pkg_exports
		? Object.keys(pkg_exports).map((k) => {
				const v = strip_start(k, './');
				return v === '.' ? 'index.js' : v;
		  })
		: null;
</script>

<div class="package_detail">
	<!-- TODO maybe continue this slot pattern, or maybe simplify? -->
	<header class="spaced">
		<slot name="repo_name" {repo_name}><div class="repo_name">{repo_name}</div></slot>
	</header>
	<slot />
	{#if description}
		<slot name="description" {description}
			><blockquote class="spaced">{description}</blockquote></slot
		>
	{/if}
	{#if npm_url}
		<slot name="npm_url" {npm_url}
			><blockquote class="npm_url spaced">npm i -D {name}</blockquote></slot
		>
	{/if}
	<section class="properties width_full spaced">
		{#if homepage_url}
			<slot name="homepage_url" {homepage_url}>
				<div class="row">
					<code>homepage:</code>
					<a class="chip" class:active={homepage_url === $page.url.href} href={homepage_url}
						>{format_host(homepage_url)}</a
					>
				</div>
			</slot>
		{/if}
		{#if repo_url}
			<div class="row"><code>repo:</code> <a class="chip" href={repo_url}>{repo_name}</a></div>
		{/if}
		{#if npm_url}
			<div class="row"><code>npm:</code> <a class="chip" href={npm_url}>{name}</a></div>
		{/if}
		{#if changelog_url}
			<div class="row">
				<code>version:</code> <a class="chip" title="version" href={changelog_url}>{version}</a>
			</div>
		{/if}
		{#if license_url}
			<div class="row">
				<code>license:</code> <a class="chip" title="license" href={license_url}>{license}</a>
			</div>
		{/if}
	</section>
	{#if homepage_url}
		<section class="row spaced">
			<a class="chip" href="{homepage_url}/.well-known/package.json">package.json</a>
		</section>
	{/if}
	<section class="width_full spaced">
		<details>
			<summary>view <code>pkg: PackageMeta</code></summary>
			<pre><code>{JSON.stringify(pkg, null, '\t')}</code></pre>
		</details>
	</section>

	{#if modules && repo_url}
		<section class="width_full spaced">
			<menu>
				{#each modules as module_name (module_name)}
					{@const source_url = to_source_url(repo_url, module_name)}
					<li
						class="module"
						class:ts={module_name.endsWith('.js')}
						class:svelte={module_name.endsWith('.svelte')}
						class:css={module_name.endsWith('.css')}
						class:json={module_name.endsWith('.json')}
					>
						<a class="chip" href={source_url}>{module_name}</a>
					</li>
				{/each}
			</menu>
		</section>
	{/if}

	<!-- TODO more details behind a `<details>`, including author -->
	<!-- TODO render exports, then link to source, then tomes -->
</div>

<!-- TODO better rendering, also show author, etc -->

<style>
	.package_detail {
		padding: var(--spacing_lg);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		max-width: var(--max_width, var(--width_md));
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
	pre {
		display: flex;
		overflow: auto;
		width: 100%;
	}
	.properties .row {
		margin-bottom: var(--spacing_xs);
	}
	.module {
		margin-bottom: var(--spacing_xs);
		--link_color: var(--text_2);
	}
	.ts {
		--link_color: var(--color_1);
	}
	.svelte {
		--link_color: var(--color_4);
	}
	.css {
		--link_color: var(--color_2);
	}
	.json {
		--link_color: var(--color_6);
	}
</style>
