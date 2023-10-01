import type {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {strip_start, strip_end} from '@grogarden/util/string.js';

export interface Package {
	url: Url;
	package_json: PackageJson;
}

export interface PackageMeta {
	url: Url;
	package_json: PackageJson;
	name: string; // '@fuz.dev/fuz_library';
	repo_name: string; // fuz_library
	repo_url: Url | null; // 'https://github.com/fuz-dev/fuz_library';
	homepage_url: Url | null; // 'https://www.fuz.dev/';
	npm_url: Url | null; // 'https://npmjs.com/package/@fuz.dev/fuz_library';
	changelog_url: Url | null;
	published: boolean;
}

export const parse_package_meta = (url: Url, package_json: PackageJson): PackageMeta => {
	const {name} = package_json;

	// TODO think through with other presentations - Details, Summary, Card

	// TODO hacky
	const parse_repo = (r: string | null | undefined) => {
		if (!r) return null;
		return strip_start(strip_end(r, '.git'), 'git+');
	};

	const repo_url = parse_repo(
		package_json.repository
			? typeof package_json.repository === 'string'
				? package_json.repository
				: package_json.repository.url
			: null,
	);

	const homepage_url = package_json.homepage ?? null;

	// TODO for detail view
	// const license_url = license && repository ? repository + '/blob/main/LICENSE' : null;

	const published =
		!package_json.private && !!package_json.exports && package_json.version !== '0.0.1';

	const npm_url = published
		? 'https://www.npmjs.com/package/' + encodeURIComponent(package_json.name)
		: null;

	const changelog_url = published && repo_url ? repo_url + '/blob/main/CHANGELOG.md' : null;

	// TODO proper parsing
	const repo_name = name[0] === '@' ? name.split('/')[1] : name;

	return {
		url,
		package_json,
		name,
		repo_name,
		repo_url,
		homepage_url,
		npm_url,
		// org_url,
		changelog_url,
		published,
	};
};

export const format_host = (url: string): string => strip_start(new URL(url).host, 'www.');

export const parse_org_url = (pkg: PackageMeta): string | null => {
	const {repo_name, repo_url} = pkg;
	const suffix = '/' + encodeURIComponent(repo_name);
	if (repo_url?.endsWith(suffix)) {
		return strip_end(repo_url, suffix);
	}
	return null;
};
