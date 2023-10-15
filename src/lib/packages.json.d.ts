declare module '$lib/packages.json' {
	import type {Package} from '$lib/package_meta.js';
	const data: Package[];
	export default data;
}
