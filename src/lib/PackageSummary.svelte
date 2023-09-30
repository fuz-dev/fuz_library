<script lang="ts">
	import {strip_start, strip_end} from '@grogarden/util/string.js';

	import type {Package} from '$lib/package.js';

	export let pkg: Package; // TODO normalized version with cached primitives?

	$: ({package_json} = pkg);

	$: ({name} = package_json);

	// TODO think through with other presentations - Details, Summary, Card

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
	<!-- TODO h1 is tricky here, maybe should be h2? probably too much complexity to customize, maybe rename to `PackagePage`? or a title slot? -->
	<header class="spaced">{repo_name}</header>
	{#if package_json.description}
		<blockquote class="spaced">{package_json.description}</blockquote>
	{/if}
	{#if package_json.homepage}
		<div class="spaced">
			<a class="chip" href={package_json.homepage}>{format_host(package_json.homepage)}</a>
		</div>
	{/if}
	{#if npm_url}
		<div class="spaced">
			<code class="chip box"
				><div>npm i -D</div>
				<a href={npm_url}>{package_json.name}</a></code
			>
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
	header {
		font-size: var(--size_xl);
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
</style>
