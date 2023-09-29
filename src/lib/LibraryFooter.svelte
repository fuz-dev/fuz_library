<script lang="ts">
	import GithubLogo from '$lib/GithubLogo.svelte';

	export let pkg_repo_url: string;
	export let pkg_org_url: string;
	export let pkg_website_url: string;
	export let pkg_website_name: string;
</script>

<footer class="prose panel padded_lg">
	<slot><a class="emoji" href={pkg_org_url} rel="me">🧶</a></slot>
	<div class="social">
		<a href={pkg_repo_url} rel="me"><slot name="logo"><GithubLogo /></slot></a>
	</div>
	<p>
		<a href={pkg_website_url} rel="me">{pkg_website_name}</a>
	</p>
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
