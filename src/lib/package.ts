import type {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';

export interface Package {
	url: Url;
	package_json: PackageJson;
}
