<script lang="ts">
	import {base} from '$app/paths';
	import type {PackageJson} from '@feltjs/gro/util/package_json.js';

	export let pkg: PackageJson;
</script>

<section>
	<h1>{pkg.name}</h1>
</section>
<section>
	<blockquote>{pkg.description}</blockquote>
</section>
<section>
	<code class="chip"
		>npm i -D&nbsp;<a href="https://npmjs.com/package/@fuz.dev/fuz">@fuz.dev/fuz</a></code
	>
</section>
<section>
	<a class="library-link panel" href="{base}/library">library</a>
</section>

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
	.panel {
		padding: var(--spacing_xl2);
		font-size: var(--size_xl);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.library-link {
		font-size: var(--size_xl3);
	}
</style>
