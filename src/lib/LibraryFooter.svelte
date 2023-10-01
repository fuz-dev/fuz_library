<script lang="ts">
	import GithubLogo from '$lib/GithubLogo.svelte';
	import {format_host, parse_org_url, type PackageMeta} from '$lib/package.js';

	export let pkg: PackageMeta;

	$: ({repo_url, homepage_url} = pkg);

	$: org_url = parse_org_url(pkg);
</script>

<footer class="panel padded_lg">
	<slot {org_url}
		>{#if org_url}<a class="emoji" href={org_url} rel="me">🧶</a>{:else}🧶{/if}</slot
	>
	<div class="social">
		<a href={repo_url} rel="me"><slot name="logo"><GithubLogo /></slot></a>
	</div>
	{#if homepage_url}
		<div>
			<a href={homepage_url} rel="me">{format_host(homepage_url)}</a>
		</div>
	{/if}
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.social {
		display: flex;
		margin-bottom: var(--spacing_md);
	}
	.social a {
		--border_width: var(--border_width_4);
		--border_color: transparent;
		text-decoration: none;
		display: flex;
		border-radius: 50%;
		border: var(--border_width) double var(--border_color);
	}
	.social a:hover {
		--border_color: var(--color_1);
	}
	.emoji {
		margin-bottom: var(--spacing_sm);
	}
</style>
