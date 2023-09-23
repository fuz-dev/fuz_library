<script lang="ts">
	import {slide} from 'svelte/transition';
	import {writable} from 'svelte/store';

	import Dialog from '$lib/Dialog.svelte';
	import Dialogs from '$lib/Dialogs.svelte';
	import {
		dialog_layouts,
		type DialogParams,
		type DialogLayout,
		to_dialog_params,
	} from '$lib/dialog';
	import Alert from '$lib/Alert.svelte';
	import LibraryItem from '$lib/LibraryItem.svelte';
	import Code from '$routes/Code.svelte';
	import Text from '$routes/library/Dialog/Text.svelte';

	const LIBRARY_ITEM_NAME = 'Dialog';

	let dialogOpen = false;
	let dialogOverflowingOpen = false;
	let dialogLayoutPageOpen = false;
	let dialogNested1Open = false;
	let dialogNested2Open = false;
	let dialogNested3Open = false;

	let selectedLayout: DialogLayout = 'page';
	const layouts: DialogLayout[] = ['centered', 'page'];

	let items: object[] = [];
	const removeItem = (item: object) => {
		items = items.filter((i) => i !== item);
	};
	const addItem = () => {
		items = items.concat({});
	};
	const reset_items = () => {
		items = [];
	};

	const dialogs = writable([] as DialogParams[]);
	const addDialogs = (count: number) => {
		const toText = (index: number) => '!'.repeat(count * 3 - index * 3);
		$dialogs = Array.from({length: count}, (_, i) =>
			to_dialog_params(Text, {
				text: toText(i),
				fontSize: 'var(--size_xl4)',
				padding: 'var(--spacing_sm) var(--spacing_lg)',
			}),
		);
	};
</script>

<LibraryItem name={LIBRARY_ITEM_NAME}>
	<div class="prose box width_full">
		<Code
			content={`<button on:click={() => (dialogOpen = true)}>
	open a dialog
</button>
{#if dialogOpen}
	<Dialog
		let:close
		on:close={() => (dialogOpen = false)}
	>
		<div class="pane prose padded_xl box">
			<h1>attention</h1>
			<p>this is a dialog</p>
			<button on:click={close}> ok </button>
		</div>
	</Dialog>
{/if}`}
		/>
		<button on:click={() => (dialogOpen = true)}> open a dialog </button>
		<hr />
		<button on:click={() => (dialogOverflowingOpen = true)}
			>open a dialog that overflows vertically</button
		>
		<button on:click={() => (dialogLayoutPageOpen = true)}
			>open a dialog with <code>layout="page"</code> instead of the default
			<code>layout='centered'</code></button
		>
		<button on:click={() => (dialogNested1Open = true)}
			>open a dialog containing another dialog</button
		>
		<button on:click={() => addDialogs(5)}>open many dialogs</button>
	</div>
</LibraryItem>
{#if dialogOpen}
	<Dialog let:close on:close={() => (dialogOpen = false)}>
		<div class="pane prose padded_xl box">
			<h1>attention</h1>
			<p>this is a dialog</p>
			<button on:click={close}> ok </button>
		</div>
	</Dialog>
{/if}
{#if dialogOverflowingOpen}
	<Dialog let:close on:close={() => (dialogOverflowingOpen = false)}>
		<div class="pane prose padded_xl">
			<h1>attention</h1>
			{#each {length: 120} as _}
				<p>this is a dialog that overflows vertically</p>
			{/each}
			<button on:click={close}> close </button>
		</div>
	</Dialog>
{/if}
{#if dialogLayoutPageOpen}
	<Dialog
		on:close={() => ((dialogLayoutPageOpen = false), reset_items())}
		let:close
		layout={selectedLayout}
	>
		<div class="pane prose padded_xl width_md">
			<h1>attention</h1>
			{#if selectedLayout === 'page'}
				<p>
					This is a <code>Dialog</code> with
					<code
						>layout="<select class="inline" bind:value={selectedLayout}
							>{#each dialog_layouts as layout}
								<option value={layout}>{layout}</option>
							{/each}
						</select>"</code
					>.
				</p>
				<p>
					Instead of being centered by default, the dialog's contents are aligned to the top of the
					page and grow downward. It's useful when the dialog's contents change in height.
				</p>
			{:else if selectedLayout === 'centered'}
				<p>
					This is a <code>Dialog</code> with
					<code
						>layout="<select class="inline" bind:value={selectedLayout}
							>{#each dialog_layouts as layout}
								<option value={layout}>{layout}</option>
							{/each}
						</select>"</code
					>, the default value.
				</p>
				<p>
					It's often the best choice, but it can be undesirable in some situations, like when the
					height of the content changes as the user does things, leading to a janky experience.
				</p>
			{:else}
				<Alert status="error">eek a bug! unknown layout "{selectedLayout}"</Alert>
			{/if}
			<p>
				<button class="inline" on:click={() => addItem()}>add item</button>
				<button class="inline" disabled={!items.length} on:click={() => reset_items()}
					>remove all</button
				>
			</p>
			{#each items as item (item)}
				<p transition:slide>
					<button class="inline" on:click={() => removeItem(item)}>✕</button>
					new stuff appears {#if selectedLayout === 'page'}gracefully{:else if selectedLayout === 'centered'}ungracefully{/if}
				</p>
			{/each}
			<hr />
			<form class="box">
				<div>
					{#each layouts as layout}
						<label class="row">
							<input type="radio" bind:group={selectedLayout} value={layout} />
							{layout}
						</label>
					{/each}
				</div>
				<button type="button" on:click={close}> close </button>
			</form>
		</div>
	</Dialog>
{/if}
{#if dialogNested1Open}
	<Dialog on:close={() => (dialogNested1Open = false)}>
		<div class="pane prose padded_xl">
			<h1>dialog 1</h1>
			<p>dialogs can open more dialogs</p>
			<button on:click={() => (dialogNested2Open = true)}>open another dialog</button>
		</div>
	</Dialog>
{/if}
{#if dialogNested2Open}
	<Dialog on:close={() => (dialogNested2Open = false)}>
		<div class="pane prose padded_xl">
			<h1>dialog 2</h1>
			<p>this dialog can open more dialogs</p>
			<p>this is the second dialog</p>
			<button on:click={() => (dialogNested3Open = true)}>open another dialog</button>
		</div>
	</Dialog>
{/if}
{#if dialogNested3Open}
	<Dialog on:close={() => (dialogNested3Open = false)}>
		<div class="pane prose padded_xl" style:margin-bottom="var(--spacing_xl3)">
			<h1>3 dialogs!</h1>
			<button on:click={() => (dialogNested3Open = false)}>close dialog</button>
		</div>
		<div class="pane prose padded_xl">
			<h1>and another <code>.pane</code></h1>
			<button
				on:click={() => {
					dialogNested1Open = dialogNested2Open = dialogNested3Open = false;
				}}>close all dialogs</button
			>
		</div>
	</Dialog>
{/if}
<Dialogs
	{dialogs}
	on:close={() => {
		$dialogs = $dialogs.slice(0, -1);
	}}
	let:dialog
	><div class="pane">
		<svelte:component this={dialog.Component} {...dialog.props} />
	</div>
</Dialogs>
