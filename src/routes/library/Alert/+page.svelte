<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';
	import {getContext} from 'svelte';

	import Alert from '$lib/Alert.svelte';
	import TomeDetails from '$lib/TomeDetails.svelte';

	const tomes_by_name: any = getContext('tomes_by_name');

	const LIBRARY_ITEM_NAME = 'Alert';
	const tome = tomes_by_name.get(LIBRARY_ITEM_NAME)!;

	let clicks = 0;
	$: dots = Array.from({length: clicks}).reduce((r, _) => r + '.', '');
</script>

<TomeDetails {tome}>
	<div class="prose">
		<section>
			<Code content={`<Alert>:-)</Alert>`} />
			<Alert>:-)</Alert>
		</section>
		<section>
			<Code
				content={`<Alert
	icon="😑"
	button={true}
	on:click={() => clicks++}
>
	alerts can be buttons{dots}
</Alert>`}
			/>
			<Alert icon="😑" button={true} on:click={() => clicks++}>
				alerts can be buttons{dots}
			</Alert>
		</section>
		<section>
			<Code
				content={`<Alert status="error">
	the computer is mistaken
</Alert>`}
			/>
			<Alert status="error">the computer is mistaken</Alert>
		</section>
		<section>
			<Code
				content={`<Alert status="error" button={true}>
	<div slot="icon">
		<div style:font-size="var(--size_xl3)">🔥</div>
		😊
	</div>
	remain calm it's only on fire
</Alert>`}
			/>
			<Alert
				status="error"
				button={true}
				on:click={() => {
					alert('the button it does nothing'); // eslint-disable-line no-alert
				}}
			>
				<div slot="icon" style:line-height="1">
					<div style:font-size="var(--size_xl3)">🔥</div>
					😊
				</div>
				remain calm it's only on fire
			</Alert>
		</section>
		<section>
			<Code
				content={`<Alert status="help">
	here's how to fix it
</Alert>`}
			/>
			<Alert status="help">here's how to fix it</Alert>
		</section>
		<section>
			<Code
				content={`<Alert status="help" icon="🗝" button={true}>
	here take this
</Alert>`}
			/>
			<Alert
				status="help"
				icon="🗝"
				button={true}
				on:click={() => {
					alert('you receive: 🗝'); // eslint-disable-line no-alert
				}}
			>
				here take this
			</Alert>
		</section>
		<section>
			<Code
				content={`<Alert icon="🪄">
	<div slot="icon" let:icon style:font-size="var(--icon_size_lg)">
		{icon}
	</div>
	<code>icon</code> is a prop, slot, and slot prop
</Alert>`}
			/>
			<Alert icon="🪄">
				<div slot="icon" let:icon style:font-size="var(--icon_size_lg)">
					{icon}
				</div>
				<code>icon</code> is a prop, slot, and slot prop
			</Alert>
		</section>
	</div>
</TomeDetails>
