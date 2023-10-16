<script lang="ts">
	import LibraryPanel from '$lib/LibraryPanel.svelte';
	import type {PackageMeta} from '$lib/package_meta.js';
	import PackageSummary from '$lib/PackageSummary.svelte';

	export let pkg: PackageMeta;
</script>

<LibraryPanel><slot><PackageSummary {pkg} /></slot></LibraryPanel>
