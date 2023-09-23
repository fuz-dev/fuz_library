<script lang="ts">
	import PackageHeader from '$lib/PackageHeader.svelte';
	import type {PackageJson} from '@feltjs/gro/util/package_json.js';

	export let pkg: PackageJson;
</script>

<PackageHeader {pkg} />
