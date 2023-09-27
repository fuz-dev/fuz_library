<script lang="ts">
	import {base} from '$app/paths';
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import Card from '$lib/Card.svelte';
	import Tome from '$lib/Tome.svelte';

	const LIBRARY_ITEM_NAME = 'Card';

	const href = `${base}/library`;
</script>

<Tome name={LIBRARY_ITEM_NAME}>
	<div class="prose box">
		<section>
			<Code
				content={`<Card>
  <div>just</div>
  <div>a card</div>
</Card>`}
			/>
			<Card>
				<div>just</div>
				<div>a card</div>
			</Card>
		</section>
		<section>
			<Code
				content={`<Card href="${base}/">
  <div>a</div>
  <div>link</div>
</Card>`}
			/>
			<Card href="{base}/">
				<div>a</div>
				<div>link</div>
			</Card>
		</section>
		<section>
			<Code
				content={`<Card>
  <div>custom</div>
  <div>icon</div>
  <div slot="icon">📖</div>
</Card>`}
			/>
			<Card>
				<div>custom</div>
				<div>icon</div>
				<div slot="icon">📖</div>
			</Card>
		</section>
		<section>
			<Code
				content={`<Card tag="button">
  <div>custom</div>
  <div>tag</div>
</Card>`}
			/>
			<Card tag="button">
				<div>custom</div>
				<div>tag</div>
			</Card>
		</section>
		<section>
			<Code
				content={`<Card href="${base}/library/Card">
  <div>href is</div>
  <div>selected</div>
</Card>`}
			/>
			<Card href="{href}/Card">
				<div>href is</div>
				<div>selected</div>
			</Card>
		</section>
		<section>
			<Code
				content={`<Card align="right">
  <div>align</div>
  <div>icon right</div>
</Card>`}
			/>
			<Card align="right">
				<div>align</div>
				<div>icon right</div>
			</Card>
		</section>
		<section>
			<Code
				content={`<Card align="above">
  <div>align</div>
  <div>icon above</div>
</Card>`}
			/>
			<Card align="above">
				<div>align</div>
				<div>icon above</div>
			</Card>
		</section>
		<section>
			<Code
				content={`<Card align="below">
  <div>align</div>
  <div>icon below</div>
</Card>`}
			/>
			<Card align="below">
				<div>align</div>
				<div>icon below</div>
			</Card>
		</section>
	</div>
</Tome>

<style>
	section {
		/* TODO not sure about this -- maybe make it a util class? or a component? */
		padding: var(--spacing_xl2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
