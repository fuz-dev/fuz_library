import {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {strip_end} from '@grogarden/util/string.js';

export interface PackageItem {
	host: Url;
	package_json: PackageJson;
}

/* eslint-disable no-await-in-loop */

export const fetch_packages = async (hosts: Url[]): Promise<PackageItem[]> => {
	const packages: PackageItem[] = [];
	for (const host of hosts) {
		const url = strip_end(host, '/') + '/.well-known/package.json';
		const res = await fetch(url, {
			headers: {'content-type': 'application/json', accept: 'application/json'},
		});
		const json = await res.json();
		const package_json = PackageJson.parse(json);
		packages.push({host, package_json});
		// TODO delay?
	}
	return packages;
};
