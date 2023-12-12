<script lang="ts">
	import Library from '$lib/Library.svelte';
	import {get_tomes} from '$lib/tome.js';

	const tomes = get_tomes();
</script>

<Library tomes={Array.from(tomes.values())} />
