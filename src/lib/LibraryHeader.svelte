<script lang="ts">
	import LibraryPanel from '$lib/LibraryPanel.svelte';

	export let pkg_npm_url: string;
	export let pkg_name: string;
	export let pkg_repo_url: string;
</script>

<LibraryPanel>
	<div class="prose box text_align_center">
		<code class="box row padded_md panel spaced"
			>npm i -D&nbsp;<a href={pkg_npm_url}>{pkg_name}</a>
		</code>
		<a class="chip" href={pkg_repo_url}>repo</a>
	</div></LibraryPanel
>
