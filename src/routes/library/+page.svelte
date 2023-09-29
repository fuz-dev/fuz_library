<script lang="ts">
	import Library from '$lib/Library.svelte';
	import {tomes} from '$routes/tomes';

	// TODO BLOCK `getContext('tomes_by_name')` ?
</script>

<Library {tomes} />
