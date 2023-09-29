<script lang="ts">
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';

	export let selected_path: string;
</script>

<Breadcrumbs path="/a/b/c" {selected_path} base_path="/library/Breadcrumbs">
	🔡
	<div slot="separator">.</div>
</Breadcrumbs>
