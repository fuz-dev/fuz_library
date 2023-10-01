import {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {strip_end} from '@grogarden/util/string.js';
import type {Logger} from '@grogarden/util/log.js';

import type {Package} from '$lib/package.js';

/* eslint-disable no-await-in-loop */
export const fetch_packages = async (urls: Url[], log?: Logger): Promise<Package[]> => {
	const packages: Package[] = [];
	for (const url of urls) {
		const package_json_url = strip_end(url, '/') + '/.well-known/package.json';
		log?.info('fetching', package_json_url);
		const res = await fetch(package_json_url, {
			headers: {'content-type': 'application/json', accept: 'application/json'},
		});
		const json = await res.json();
		const package_json = PackageJson.parse(json);
		packages.push({url, package_json});
		// TODO delay?
	}
	return packages;
};
