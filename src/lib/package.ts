import type {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {strip_start, strip_end} from '@grogarden/util/string.js';

export interface Package {
	url: Url;
	package_json: PackageJson;
	name: string; // '@fuz.dev/fuz_library';
	npm_url: string; // 'https://npmjs.com/package/@fuz.dev/fuz_library';
	repo_url: string; // 'https://github.com/fuz-dev/fuz_library';
	org_url: string; // 'https://github.com/fuz-dev';
	homepage_url: string; // 'https://www.fuz.dev/';
	homepage_name: string; // 'fuz.dev';
	published: boolean;
}

export const parse_package = (url: Url, package_json: PackageJson): Package => {
	const {name} = package_json;

	// TODO think through with other presentations - Details, Summary, Card

	// TODO hacky
	const parse_repo = (r: string | null | undefined) => {
		if (!r) return null;
		return strip_start(strip_end(r, '.git'), 'git+');
	};

	const repo = parse_repo(
		package_json.repository
			? typeof package_json.repository === 'string'
				? package_json.repository
				: package_json.repository.url
			: null,
	);

	const format_host = (homepage: string): string => strip_start(new URL(homepage).host, 'www.');

	// TODO for detail view
	// const license_url = license && repository ? repository + '/blob/main/LICENSE' : null;

	const published =
		!package_json.private && !!package_json.exports && package_json.version !== '0.0.1';

	const npm_url = published
		? 'https://www.npmjs.com/package/' + encodeURIComponent(package_json.name)
		: null;

	const changelog_url = published && repo ? repo + '/blob/main/CHANGELOG.md' : null;

	// TODO proper parsing
	const repo_name = name[0] === '@' ? name.split('/')[1] : name;

	return {
		url,
		package_json,
		name,
		npm_url,
		repo_url,
		org_url,
		homepage_url,
		homepage_name,
		published,
	};
};
