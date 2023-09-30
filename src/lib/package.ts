import type {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';

// TODO rename ? `Tome` was `LibraryItem`

export interface Package {
	host: Url;
	package_json: PackageJson;
}
