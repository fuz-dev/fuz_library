import type {Task} from '@grogarden/gro';
import {load_package_json} from '@grogarden/gro/package_json.js';
import {z} from 'zod';
import {writeFile} from 'node:fs/promises';
import {Url} from '@grogarden/gro/paths.js';
import {format_file} from '@grogarden/gro/format_file.js';
import {exists} from '@grogarden/gro/exists.js';

import {fetch_packages} from '$lib/fetch_packages.js';
import type {Package} from '$lib/package.js';

// TODO refactor/rename
export const default_package_urls = [
	// TODO add more
	// 'https://www.fuz.dev/',
	'https://www.grogarden.org/',
	'https://template.fuz.dev/',
	'https://code.fuz.dev/',
	// 'https://www.felt.dev/',
];

// TODO maybe support `--check` for CI
export const Args = z
	.object({
		_: z
			.array(Url, {description: 'package host URLs, the paths containing .well-known'})
			.default(default_package_urls),
	})
	.strict();
export type Args = z.infer<typeof Args>;

export const task: Task<Args> = {
	Args,
	summary: 'download metadata for the given packages',
	run: async ({args, log}) => {
		const {_: package_urls} = args;

		const root_package_json = await load_package_json();

		const fetched_packages = await fetch_packages(package_urls, log);

		const packages: Package[] = [
			{url: 'https://library.fuz.dev/', package_json: root_package_json},
		].concat(fetched_packages);

		const out_path = './src/lib/packages.json';
		await writeFile(out_path, await format_file(out_path, JSON.stringify(packages)));

		const types_out_path = out_path + '.d.ts';
		if (!(await exists(types_out_path))) {
			await writeFile(
				types_out_path,
				`declare module '$lib/packages.json' {
	import type {Package} from '@fuz.dev/fuz_library/package_item.js';
	const data: Package[];
	export default data;
}
`,
			);
		}
	},
};
