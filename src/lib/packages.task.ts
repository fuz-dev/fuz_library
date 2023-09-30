import type {Task} from '@grogarden/gro';
import {load_package_json} from '@grogarden/gro/package_json.js';
import {z} from 'zod';
import {writeFile} from 'node:fs/promises';
import {Url} from '@grogarden/gro/paths.js';
import {format_file} from '@grogarden/gro/format_file.js';
import {exists} from '@grogarden/gro/exists.js';

import {fetch_packages} from '$lib/fetch_packages.js';
import type {Package} from '$lib/package.js';

export const default_package_urls = ['https://www.grogarden.org/', 'https://template.fuz.dev/'];

// TODO maybe support `--check` for CI
export const Args = z
	.object({
		_: z
			.array(Url, {description: 'package host URLs, the paths containing .well-known'})
			.default(default_package_urls),
		outfile: z
			.string({description: 'path to the generated packages.json file'})
			.default('./src/lib/packages.json'),
	})
	.strict();
export type Args = z.infer<typeof Args>;

/**
 * This is a task not a `.gen.` file because it makes network calls.
 */
export const task: Task<Args> = {
	Args,
	summary: 'download metadata for the given packages',
	run: async ({args, log}) => {
		const {_: package_urls, outfile} = args;

		const fetched_packages = await fetch_packages(package_urls, log);

		const root_package_json = await load_package_json();

		const packages: Package[] = root_package_json.homepage
			? [{url: root_package_json.homepage, package_json: root_package_json}].concat(
					fetched_packages,
			  )
			: fetched_packages;

		await writeFile(outfile, await format_file(outfile, JSON.stringify(packages)));

		const types_outfile = outfile + '.d.ts';
		if (!(await exists(types_outfile))) {
			await writeFile(
				types_outfile,
				`declare module '$lib/packages.json' {
	import type {Package} from '@fuz.dev/fuz_library/package.js';
	const data: Package[];
	export default data;
}
`,
			);
		}
	},
};
