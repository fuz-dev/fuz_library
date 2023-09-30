import type {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';

export interface Package {
	url: Url;
	package_json: PackageJson;
	npm_url: string; // 'https://npmjs.com/package/@fuz.dev/fuz_library';
	name: string; // '@fuz.dev/fuz_library';
	repo_url: string; // 'https://github.com/fuz-dev/fuz_library';
	org_url: string; // 'https://github.com/fuz-dev';
	homepage_url: string; // 'https://www.fuz.dev/';
	homepage_name: string; // 'fuz.dev';
}
