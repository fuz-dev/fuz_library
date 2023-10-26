<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import PackageDetail from '$lib/PackageDetail.svelte';
	import TomeDetails from '$lib/TomeDetails.svelte';
	import {parse_package_meta} from '$lib/package_meta.js';
	import {package_json} from '$lib/package.js';

	const LIBRARY_ITEM_NAME = 'PackageDetail';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<TomeDetails {tome}>
	<div class="prose">
		<section>
			<Code
				content={`import PackageDetail from\n\t'@fuz.dev/fuz_library/PackageDetail.svelte';`}
				lang="ts"
			/>
			<Code content={`<PackageDetail {pkg} />`} />
		</section>
	</div>
	<section>
		<PackageDetail {pkg} />
	</section>
</TomeDetails>
