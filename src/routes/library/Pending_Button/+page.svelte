<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Pending_Button from '$lib/Pending_Button.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Pending_Button';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let pending_1 = false;
	let pending_2 = true;
</script>

<!-- TODO maybe Pending_Button shouldn't be a component? action? Or renderless maybe?
		Extract a common thing to make arbitrary things not change width.
	-->

<Tome_Detail {tome}>
	<div class="prose box">
		<section class="box">
			<blockquote class="text_align_center">
				<p><code>Pending_Button</code> preserves the normal width of the button while animating.</p>
				<p>This component may be replaced with an action in the future.</p>
			</blockquote>
			<button
				on:click={() => {
					pending_1 = !pending_1;
					pending_2 = !pending_2;
				}}>toggle the pending status of the buttons below</button
			>

			<Code
				content={`<Pending_Button
	pending={${pending_1}}
	on:click={() => (pending_1 = !pending_1)}
>
	do something async
</Pending_Button>`}
			/>
			<Pending_Button pending={pending_1} on:click={() => (pending_1 = !pending_1)}>
				do something async
			</Pending_Button>
			<Code
				content={`<Pending_Button
	pending={${pending_2}}
	on:click={() => (pending_2 = !pending_2)}
>
	do another
</Pending_Button>`}
			/>
			<Pending_Button pending={pending_2} on:click={() => (pending_2 = !pending_2)}>
				do another
			</Pending_Button>
		</section>
	</div>
</Tome_Detail>
