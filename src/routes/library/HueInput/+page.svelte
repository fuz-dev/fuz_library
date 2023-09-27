<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import HueInput from '$lib/HueInput.svelte';
	import TomeDetails from '$lib/TomeDetails.svelte';
	import {tomes_by_name} from '$lib/tome';

	const LIBRARY_ITEM_NAME = 'HueInput';
	const tome = tomes_by_name.get(LIBRARY_ITEM_NAME)!;

	let hue: number;
</script>

<TomeDetails {tome}>
	<div class="prose" style:--color="hsl({hue} 62% 31%)">
		<Code
			content={`<HueInput
	bind:hue
	on:input={(e) => {
		// hue === e.detail
		// === ${hue}
	}}
/>`}
		/>
		<HueInput
			bind:hue
			on:input={(e) => {
				if (hue !== e.detail) throw Error();
			}}
		/>
	</div>
</TomeDetails>
