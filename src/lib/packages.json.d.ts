declare module '$lib/packages.json' {
	import type {Package} from '$lib/package.js';
	const data: Package[];
	export default data;
}
