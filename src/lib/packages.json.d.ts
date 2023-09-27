import type {PackageItem} from '$lib/packages';

declare module '$lib/packages.json' {
	const data: PackageItem[];
	export default data;
}
