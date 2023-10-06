import type {Gen} from '@grogarden/gro/gen.js';
import {load_package_json} from '@grogarden/gro/package_json.js';
import {format_file} from '@grogarden/gro/format_file.js';

// TODO refactor - maybe export this from Gro, or make a configured option
export const gen: Gen = async () => {
	return [
		{
			filename: 'package.json',
			// content: JSON.stringify(await load_package_json(), null, 2),
			format: false,
			content: await format_file('', JSON.stringify(await load_package_json()), {
				useTabs: false,
			}),
		},
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
