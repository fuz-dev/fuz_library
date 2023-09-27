<script lang="ts">
	import type {PackageJson} from '@grogarden/gro/package_json.js';

	export let package_json: PackageJson;

	// TODO think through with other presentations - Details, Summary, Card

	$: repository = package_json.repository
		? typeof package_json.repository === 'string'
			? package_json.repository
			: package_json.repository.url
		: null;
	$: license_url = repository ? repository + '/blob/main/LICENSE' : null;

	$: published = !package_json.private && !!package_json.exports;
	$: npm_url = published ? 'https://www.npmjs.com/package/' + package_json.name : null;
</script>

<section>
	<!-- TODO h1 is tricky here, maybe should be h2? probably too much complexity to customize, maybe rename to `PackagePage`? or a title slot? -->
	<h1>{package_json.name}</h1>
	{#if package_json.description}
		<blockquote>{package_json.description}</blockquote>
	{/if}
	{#if npm_url}
		<div class="spaced">
			<code class="chip">npm i -D&nbsp;<a href={npm_url}>{package_json.name}</a></code>
		</div>
	{/if}
	<div class="box row spaced">
		{#if package_json.version}
			<div class="chip spaced_hz">version {package_json.version}</div>
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
</section>

<!-- TODO better rendering, also show author, etc -->

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
