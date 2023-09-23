<script lang="ts">
	import type {Readable} from 'svelte/store';

	import type {DialogParams} from '$lib/dialog';
	import Dialog from '$lib/Dialog.svelte';

	// TODO this is experimental

	export let dialogs: Readable<DialogParams[]>;
</script>

{#each $dialogs as dialog, index (dialog)}
	<Dialog on:close {...dialog.dialog_props} {index} active={index === $dialogs.length - 1}>
		<slot {dialog}>
			<svelte:component this={dialog.Component} {...dialog.props} />
		</slot>
	</Dialog>
{/each}
