import type {Task} from '@grogarden/gro';
import {z} from 'zod';
import {writeFile} from 'node:fs/promises';

import {fetch_packages} from '$lib/packages';

// TODO refactor/rename
export const package_urls = [
	// 'https://www.fuz.dev/',
	'https://www.grogarden.org/',
	'https://code.fuz.dev/',
	// 'https://felt.dev/',
];

export const Args = z
	.object({
		_: z.array(z.string(), {description: 'package URLs'}).default(package_urls),
	})
	.strict();
export type Args = z.infer<typeof Args>;

// TODO BLOCK retrieve data from ${package_url}/.well-known/package.json

export const task: Task<Args> = {
	Args,
	summary: 'downloads metadata for the given packages',
	run: async ({args}) => {
		const {_: urls} = args;

		console.log(`urls`, urls);

		const packages = await fetch_packages(package_urls);
		console.log(`packages`, packages);

		await writeFile('./src/lib/packages.json', JSON.stringify(packages, null, '\t'));
	},
};
