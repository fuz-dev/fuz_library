<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import PackageSummary from '$lib/PackageSummary.svelte';
	import TomeDetail from '$lib/TomeDetail.svelte';
	import {parse_package_meta} from '$lib/package_meta.js';
	import {package_json} from '$lib/package.js';

	const LIBRARY_ITEM_NAME = 'PackageSummary';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<TomeDetail {tome}>
	<div class="prose">
		<section>
			<Code
				content={`import PackageSummary from\n\t'@fuz.dev/fuz_library/PackageSummary.svelte';`}
				lang="ts"
			/>
			<Code content={`<PackageSummary {pkg} />`} />
		</section>
	</div>
	<section>
		<PackageSummary {pkg} />
	</section>
</TomeDetail>
