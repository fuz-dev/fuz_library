<script lang="ts">
	import PendingButton from '$lib/PendingButton.svelte';
	import Code from '$lib/Code.svelte';
	import LibraryItem from '$routes/library/LibraryItem.svelte';

	const LIBRARY_ITEM_NAME = 'PendingButton';

	let pending_1 = false;
	let pending_2 = true;
</script>

<!-- TODO maybe PendingButton shouldn't be a component? action? Or renderless maybe?
		Extract a common thing to make arbitrary things not change width.
	-->

<LibraryItem name={LIBRARY_ITEM_NAME}>
	<div class="prose box">
		<section class="box">
			<blockquote class="text_align_center">
				<p><code>PendingButton</code> preserves the normal width of the button while animating.</p>
				<p>This component may be replaced with an action in the future.</p>
			</blockquote>
			<button
				on:click={() => {
					pending_1 = !pending_1;
					pending_2 = !pending_2;
				}}>toggle the pending status of the buttons below</button
			>

			<Code
				content={`<PendingButton
	pending={${pending_1}}
	on:click={() => (pending_1 = !pending_1)}
>
	do something async
</PendingButton>`}
			/>
			<PendingButton pending={pending_1} on:click={() => (pending_1 = !pending_1)}>
				do something async
			</PendingButton>
			<Code
				content={`<PendingButton
	pending={${pending_2}}
	on:click={() => (pending_2 = !pending_2)}
>
	do another
</PendingButton>`}
			/>
			<PendingButton pending={pending_2} on:click={() => (pending_2 = !pending_2)}>
				do another
			</PendingButton>
		</section>
	</div>
</LibraryItem>
