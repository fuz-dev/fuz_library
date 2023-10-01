<script lang="ts">
	import type {Url} from '@grogarden/gro/paths.js';

	import GithubLogo from '$lib/GithubLogo.svelte';
	import {format_host, parse_org_url, type PackageMeta} from '$lib/package.js';

	export let pkg: PackageMeta;
	export let root_url: Url | null = null;
	export let emoji = '🧶';

	$: ({repo_url} = pkg);

	$: org_url = parse_org_url(pkg);
</script>

<footer class="panel padded_lg">
	<slot {org_url}
		>{#if org_url}<a class="emoji" href={org_url} rel="me">{emoji}</a>{:else}{emoji}{/if}</slot
	>
	<div class="social">
		<a href={repo_url} rel="me"><slot name="logo"><GithubLogo /></slot></a>
	</div>
	{#if root_url}
		<div class="root_url">
			<a href={root_url} rel="me">{format_host(root_url)}</a>
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
	.root_url {
		/* TODO messy */
		margin-top: var(--spacing_md);
	}
	.emoji {
		margin-bottom: var(--spacing_sm);
	}
</style>
