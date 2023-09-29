<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import PendingAnimation from '$lib/PendingAnimation.svelte';
	import TomeDetails from '$lib/TomeDetails.svelte';

	const LIBRARY_ITEM_NAME = 'PendingAnimation';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let turtleSlot = '🐢';
	let turtleSlot2a = '🐸';
	let turtleSlot2b = '⏳';
	let frogsRunning = false;
	let pendingAnimation0Running = true;
	let pendingAnimation1Running = false;
</script>

<TomeDetails {tome}>
	<div class="prose box">
		<section>
			<Code content={`<PendingAnimation running={${pendingAnimation0Running}} />`} />
			<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
			<div on:click={() => (pendingAnimation0Running = !pendingAnimation0Running)}>
				<PendingAnimation running={pendingAnimation0Running} />
			</div>
			<button on:click={() => (pendingAnimation0Running = !pendingAnimation0Running)}
				>{#if pendingAnimation0Running}pause animation{:else}play animation{/if}</button
			>
			<Code
				content={`<PendingAnimation\n\tattrs={{class: 'height_full'}}\n\trunning={${pendingAnimation0Running}}\n/>`}
			/>
			<div
				class="box"
				style:height="19rem"
				style:align-items="flex-start"
				on:click={() => (pendingAnimation0Running = !pendingAnimation0Running)}
				role="none"
			>
				<PendingAnimation attrs={{class: 'height_full'}} running={pendingAnimation0Running} />
			</div>
		</section>
		<section>
			<h3>custom slot</h3>
			<Code
				content={`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<PendingAnimation running={${pendingAnimation1Running}}>
		{${turtleSlot}}
	</PendingAnimation>
</div>`}
			/>
			<p>
				with slot <input class="inline" bind:value={turtleSlot} />
				<button on:click={() => (turtleSlot = '🐢🐢🐢')} class="inline">🐢🐢🐢</button>
				<button
					on:click={() => (turtleSlot = (turtleSlot + turtleSlot).substring(0, 24))}
					class="inline">* 2</button
				>
			</p>
			<button on:click={() => (pendingAnimation1Running = !pendingAnimation1Running)}>
				{#if pendingAnimation1Running}pause animation{:else}play animation{/if}
			</button>
			<div
				style:font-size="var(--size_xl6)"
				style:--animation_duration="var(--duration_6)"
				style:text-align="center"
			>
				<PendingAnimation running={pendingAnimation1Running}>
					{turtleSlot}
				</PendingAnimation>
			</div>
		</section>
		<section>
			<h3>slot <code>index</code> prop</h3>
			<Code
				content={`<PendingAnimation running={${frogsRunning}} let:index>
	<div class="row box">
		{${turtleSlot2a}}
		{index}
		<span style="font-size: var(--size_xl5)">
			{${turtleSlot2b}}
		</span>}
	</div>
</PendingAnimation>`}
			/>
			<p>
				with
				<code
					>running={'{'}<button class="inline" on:click={() => (frogsRunning = !frogsRunning)}
						>{frogsRunning}</button
					>{'}'}</code
				>
				<br />
				and slots <input class="inline" bind:value={turtleSlot2a} />
				<input class="inline" bind:value={turtleSlot2b} />
			</p>
			<PendingAnimation running={frogsRunning} let:index>
				<div class="row box">
					<span style="font-size: var(--size_xl5)">{turtleSlot2a}</span>
					<span class="index">{index}</span>
					{turtleSlot2b}
				</div>
			</PendingAnimation>
		</section>
	</div>
</TomeDetails>

<style>
	code button.inline {
		margin: 0;
	}
	section {
		/* TODO not sure about this -- maybe make it a util class? or a component? */
		padding: var(--spacing_xl2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.index {
		font-size: var(--size_xl3);
		font-weight: 300;
	}
</style>
