import {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {strip_end} from '@grogarden/util/string.js';
import type {Logger} from '@grogarden/util/log.js';

import type {Package} from '$lib/package.js';

/* eslint-disable no-await-in-loop */

export const fetch_packages = async (hosts: Url[], log?: Logger): Promise<Package[]> => {
	const packages: Package[] = [];
	for (const host of hosts) {
		const url = strip_end(host, '/') + '/.well-known/package.json';
		log?.info('fetching', url);
		const res = await fetch(url, {
			headers: {'content-type': 'application/json', accept: 'application/json'},
		});
		const json = await res.json();
		const package_json = PackageJson.parse(json);
		packages.push({url: host, package_json});
		// TODO delay?
	}
	return packages;
};
