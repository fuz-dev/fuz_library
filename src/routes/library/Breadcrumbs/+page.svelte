<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';
	import {getContext} from 'svelte';

	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TomeDetails from '$lib/TomeDetails.svelte';
	import BreadcrumbsExample from '$routes/library/Breadcrumbs/BreadcrumbsExample.svelte';

	const tomes_by_name: any = getContext('tomes_by_name');

	const LIBRARY_ITEM_NAME = 'Breadcrumbs';
	const tome = tomes_by_name.get(LIBRARY_ITEM_NAME)!;
</script>

<TomeDetails {tome}>
	<div class="prose box">
		<section>
			<Code content={`<Breadcrumbs />`} />
			<Breadcrumbs />
		</section>
		<section>
			<Code content={`<Breadcrumbs>🏠</Breadcrumbs>`} />
			<Breadcrumbs>🏠</Breadcrumbs>
		</section>
		<section>
			<Code
				content={`<Breadcrumbs\n\tpath="/a/b/c"\n\tselected_path="/a/b"\n\tbase_path="/library/Breadcrumbs"\n>\n\t🔡\n\t<div slot="separator">.</div>\n</Breadcrumbs>`}
			/>
			<BreadcrumbsExample selected_path="/a/b" />
		</section>
	</div>
</TomeDetails>

<style>
	section {
		/* TODO not sure about this -- maybe make it a util class? or a component? */
		padding: var(--spacing_xl2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
