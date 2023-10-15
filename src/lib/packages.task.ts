import type {Task} from '@grogarden/gro';
import type {PackageJson} from '@grogarden/gro/package_json.js';
import {z} from 'zod';
import {readFile, writeFile} from 'node:fs/promises';
import {Url} from '@grogarden/gro/paths.js';
import {format_file} from '@grogarden/gro/format_file.js';
import {exists} from '@grogarden/gro/exists.js';

import {fetch_packages} from '$lib/fetch_packages.js';
import type {Package} from '$lib/package_meta.js';

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

		const local_package_json_path = 'static/.well-known/package.json'; // TODO read svelte config
		let local_package_json: PackageJson | undefined;
		if (await exists(local_package_json_path)) {
			try {
				local_package_json = JSON.parse(await readFile(local_package_json_path, 'utf8'));
			} catch (err) {}
		}

		const packages: Package[] = local_package_json?.homepage
			? [{url: local_package_json.homepage, package_json: local_package_json}].concat(
					fetched_packages,
			  )
			: fetched_packages;

		await writeFile(outfile, await format_file(JSON.stringify(packages), {filepath: outfile}));

		const types_outfile = outfile + '.d.ts';
		if (!(await exists(types_outfile))) {
			await writeFile(
				types_outfile,
				`declare module '$lib/packages.json' {
	import type {Package} from '@fuz.dev/fuz_library/package_meta.js';
	const data: Package[];
	export default data;
}
`,
			);
		}
	},
};
