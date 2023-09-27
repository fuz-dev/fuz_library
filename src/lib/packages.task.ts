import type {Task} from '@grogarden/gro';
import {load_package_json} from '@grogarden/gro/package_json.js';
import {z} from 'zod';
import {writeFile} from 'node:fs/promises';

import {fetch_packages, type PackageItem} from '$lib/packages';

// TODO refactor/rename
export const package_hosts = [
	// TODO add more
	// 'https://www.fuz.dev/',
	'https://www.grogarden.org/',
	'https://template.fuz.dev/',
	'https://code.fuz.dev/',
	// 'https://www.felt.dev/',
];

export const Args = z
	.object({
		_: z
			.array(z.string(), {description: 'package host URLs, the paths containing .well-known'})
			.default(package_hosts),
	})
	.strict();
export type Args = z.infer<typeof Args>;

export const task: Task<Args> = {
	Args,
	summary: 'downloads metadata for the given packages',
	run: async ({args}) => {
		const {_: urls} = args;

		console.log(`urls`, urls);

		const root_package_json = await load_package_json();

		const fetched_packages = await fetch_packages(package_hosts);

		const packages: PackageItem[] = [
			{host: 'https://library.fuz.dev/', package_json: root_package_json},
		].concat(fetched_packages);

		await writeFile('./src/lib/packages.json', JSON.stringify(packages, null, '\t'));
	},
};
