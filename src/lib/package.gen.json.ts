import type {Gen} from '@grogarden/gro/gen.js';
import {load_package_json} from '@grogarden/gro/package_json.js';

export const gen: Gen = async () => {
	return [
		JSON.stringify(await load_package_json()),
		{
			filename: 'package.json.d.ts',
			content: `declare module '$lib/package.json' {
    import type {Package} from '@fuz.dev/fuz_library/package.js';
    const data: Package;
    export default data;
  }
`,
		},
	];
};
