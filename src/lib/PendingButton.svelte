<script lang="ts">
	import PendingAnimation from '$lib/PendingAnimation.svelte';

	export let pending: boolean;
	export let running: boolean | undefined = undefined;
	export let el: HTMLButtonElement | undefined = undefined;
	export let title: string | undefined = undefined;
	export let disabled: boolean | undefined = undefined;
	export let attrs: any = undefined;
</script>

<button
	type="button"
	{...attrs}
	disabled={disabled ?? pending}
	{title}
	class:pending
	bind:this={el}
	on:click
>
	<div class="content">
		<slot />
	</div>
	{#if pending}
		<div class="animation">
			<PendingAnimation {running} />
		</div>
	{/if}
</button>

<style>
	button {
		position: relative;
	}
	.content {
		display: contents;
	}
	.pending .content {
		visibility: hidden;
	}
	.animation {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
