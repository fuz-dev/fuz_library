<script lang="ts">
	import {strip_start, strip_end} from '@grogarden/util/string.js';

	import type {Package} from '$lib/package.js';

	export let pkg: Package; // TODO normalized version with cached primitives?

	$: ({package_json} = pkg);

	$: ({name} = package_json);

	// TODO think through with other presentations - Details, Summary, Card

	// TODO hacky
	const parse_repo = (r: string | null | undefined) => {
		if (!r) return null;
		return strip_start(strip_end(r, '.git'), 'git+');
	};

	$: repo = parse_repo(
		package_json.repository
			? typeof package_json.repository === 'string'
				? package_json.repository
				: package_json.repository.url
			: null,
	);

	const format_host = (homepage: string): string => strip_start(new URL(homepage).host, 'www.');

	// TODO for detail view
	// $: license_url = license && repository ? repository + '/blob/main/LICENSE' : null;

	$: published =
		!package_json.private && !!package_json.exports && package_json.version !== '0.0.1';

	$: npm_url = published
		? 'https://www.npmjs.com/package/' + encodeURIComponent(package_json.name)
		: null;

	$: changelog_url = published && repo ? repo + '/blob/main/CHANGELOG.md' : null;

	// TODO proper parsing
	$: repo_name = name[0] === '@' ? name.split('/')[1] : name;
</script>

<div class="package_summary">
	<header class="spaced"><slot {repo_name}><div class="repo_name">{repo_name}</div></slot></header>
	{#if package_json.description}
		<blockquote class="spaced">{package_json.description}</blockquote>
	{/if}
	{#if npm_url}
		<div class="spaced">
			<code class="size_lg chip box"><a href={npm_url}>{package_json.name}</a></code>
		</div>
	{/if}
	{#if package_json.homepage}
		<div class="spaced">
			<a class="chip" href={package_json.homepage}>{format_host(package_json.homepage)}</a>
		</div>
	{/if}
	<div class="box row spaced">
		{#if repo}
			<a class="chip" href={repo}>repo</a>
		{/if}
		{#if changelog_url}
			<a class="chip" title="version" href={changelog_url}>{package_json.version}</a>
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
		text-align: center;
	}
	.repo_name {
		/* same as h1 by default (maybe add .h1 utility class?) */
		font-size: var(--size_xl3);
		font-weight: 300;
	}
	code {
		display: flex;
		align-items: center;
		text-align: center;
		white-space: nowrap;
	}
	.chip {
		margin: 0 var(--spacing_xs2);
	}
	.size_lg {
		font-size: var(--size_lg);
	}
</style>
