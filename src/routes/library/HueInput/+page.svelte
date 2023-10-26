<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import HueInput from '$lib/HueInput.svelte';
	import TomeDetails from '$lib/TomeDetails.svelte';

	const LIBRARY_ITEM_NAME = 'HueInput';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let hue: number;
</script>

<TomeDetails {tome}>
	<div class="prose" style:--color="hsl({hue} 62% 31%)">
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import HueInput from\n\t'@fuz.dev/fuz_library/HueInput.svelte';`} lang="ts" />
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
