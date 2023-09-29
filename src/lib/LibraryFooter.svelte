<script lang="ts">
	import GithubLogo from '$lib/GithubLogo.svelte';

	const repo_url = 'https://github.com/fuz-dev/fuz_library';
	const org_url = 'https://github.com/fuz-dev';
</script>

<footer class="prose panel padded_lg">
	<slot><a class="emoji" href={org_url}>🧶</a></slot>
	<div class="social">
		<a href={repo_url} rel="me"><slot name="logo"><GithubLogo /></slot></a>
	</div>
	<p>
		<a href="https://www.fuz.dev/">fuz.dev</a>
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
