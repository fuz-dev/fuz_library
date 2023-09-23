<script lang="ts">
	import {base} from '$app/paths';

	import PackageDetails from '$lib/PackageDetails.svelte';
	import {pkg} from '$lib/pkg';
</script>

<main class="prose">
	<PackageDetails {pkg} />
	<section>
		<a class="library-link panel" href="{base}/library">library</a>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
