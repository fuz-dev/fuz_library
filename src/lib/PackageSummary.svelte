<script lang="ts">
	import type {Package} from '$lib/package.js';

	export let pkg: Package;

	$: ({package_json} = pkg);

	// TODO think through with other presentations - Details, Summary, Card

	$: repository = package_json.repository
		? typeof package_json.repository === 'string'
			? package_json.repository
			: package_json.repository.url
		: null;

	$: license_url = repository ? repository + '/blob/main/LICENSE' : null;

	$: published =
		!package_json.private && !!package_json.exports && package_json.version !== '0.0.1';

	$: npm_url = published ? 'https://www.npmjs.com/package/' + package_json.name : null;

	$: changelog_url = published && repository ? repository + '/blob/main/CHANGELOG.md' : null;
</script>

<div class="package_summary">
	<!-- TODO h1 is tricky here, maybe should be h2? probably too much complexity to customize, maybe rename to `PackagePage`? or a title slot? -->
	<header>{package_json.name}</header>
	{#if package_json.description}
		<blockquote>{package_json.description}</blockquote>
	{/if}
	{#if npm_url}
		<div class="spaced">
			<code class="chip">npm i -D&nbsp;<a href={npm_url}>{package_json.name}</a></code>
		</div>
	{/if}
	<div class="box row spaced">
		{#if changelog_url}
			<a class="chip spaced_hz" href={changelog_url}>version {package_json.version}</a>
		{/if}
		{#if license_url}
			<a class="chip spaced_hz" href={license_url}>license {package_json.license}</a>
		{/if}
	</div>
	<div class="box row">
		{#if repository}
			<a class="chip spaced_hz" href={repository}>repo</a>
		{/if}
		{#if npm_url}
			<a class="chip spaced_hz" href={npm_url}>npm</a>
		{/if}
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
	code {
		display: flex;
		align-items: center;
		text-align: center;
		font-size: var(--size_lg);
		white-space: nowrap;
	}
</style>
