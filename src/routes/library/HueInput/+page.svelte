<script lang="ts">
	import HueInput from '$lib/HueInput.svelte';
	import Code from '$lib/Code.svelte';
	import LibraryItem from '$routes/library/LibraryItem.svelte';

	const LIBRARY_ITEM_NAME = 'HueInput';

	let hue: number;
</script>

<LibraryItem name={LIBRARY_ITEM_NAME}>
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
</LibraryItem>
