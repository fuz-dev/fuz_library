<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import HueInput from '$lib/HueInput.svelte';
	import Tome from '$lib/Tome.svelte';

	const LIBRARY_ITEM_NAME = 'HueInput';

	let hue: number;
</script>

<Tome name={LIBRARY_ITEM_NAME}>
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
</Tome>
