<script lang="ts">
	import GithubLogo from '$lib/GithubLogo.svelte';
</script>

<footer class="prose panel padded_lg">
	<slot><a href="https://github.com/fuz-dev">🧶</a></slot>
	<div class="social">
		<a href="https://github.com/fuz-dev/fuz" rel="me">
			<GithubLogo />
		</a>
	</div>
	<p>
		<a href="https://docs.fuz.dev/">docs.fuz.dev</a>
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
</style>
