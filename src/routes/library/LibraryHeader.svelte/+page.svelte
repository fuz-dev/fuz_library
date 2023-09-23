<script lang="ts">
	import LibraryHeader from '$lib/LibraryHeader.svelte';
	import LibraryVocab from '$lib/LibraryVocab.svelte';
	import type {LibraryItemData} from '$lib/library_item';

	const item: LibraryItemData = {};
</script>

The <LibraryVocab name="LibraryHeader" /> - <LibraryHeader {item} />
