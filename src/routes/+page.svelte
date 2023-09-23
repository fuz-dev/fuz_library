<script lang="ts">
	import PackageHeader from '$lib/PackageHeader.svelte';
	import {pkg} from '$lib/pkg';
</script>

<main class="prose">
	<PackageHeader {pkg} />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
