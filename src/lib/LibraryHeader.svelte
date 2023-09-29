<script lang="ts">
	import {base} from '$app/paths';

	import type {Tome} from '$lib/tome.js';

	export let item: Tome; // friendly user zystem

	// TODO BLOCK should these be part of `Tome`? `package_json`?
	export let npm_url = 'https://npmjs.com/package/@fuz.dev/fuz_library';
	export let package_json_name = '@fuz.dev/fuz_library';
</script>

<section class="prose">
	<h2>{item.name}</h2>
	<p>
		<span class="chip">{item.category}</span>
	</p>
</section>
<section>
	<code class="chip">npm i -D&nbsp;<a class="chip" href={npm_url}>{package_json_name}</a></code>
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
