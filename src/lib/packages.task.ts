import type {Task} from '@grogarden/gro';
import {load_package_json} from '@grogarden/gro/package_json.js';
import {z} from 'zod';
import {writeFile} from 'node:fs/promises';
import {Url} from '@grogarden/gro/paths.js';

import {fetch_packages} from '$lib/fetch_packages.js';
import type {PackageItem} from '$lib/package_item.js';

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
	summary: 'downloads metadata for the given packages',
	run: async ({args}) => {
		const {_: package_urls} = args;

		const root_package_json = await load_package_json();

		const fetched_packages = await fetch_packages(package_urls);

		const packages: PackageItem[] = [
			{host: 'https://library.fuz.dev/', package_json: root_package_json},
		].concat(fetched_packages);

		await writeFile('./src/lib/packages.json', JSON.stringify(packages, null, '\t'));
	},
};
