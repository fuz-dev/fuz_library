<script lang="ts">
	import GithubLogo from '$lib/GithubLogo.svelte';

	export let repo_url = 'https://github.com/fuz-dev/fuz_library';
	export let org_url = 'https://github.com/fuz-dev';
	export let website_url = 'https://www.fuz.dev/';
	export let website_url_text = 'fuz.dev';
</script>

<footer class="prose panel padded_lg">
	<slot><a class="emoji" href={org_url} rel="me">🧶</a></slot>
	<div class="social">
		<a href={repo_url} rel="me"><slot name="logo"><GithubLogo /></slot></a>
	</div>
	<p>
		<a href={website_url} rel="me">{website_url_text}</a>
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
