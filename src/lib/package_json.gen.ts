import type {Gen} from '@grogarden/gro';
import {to_root_path} from '@grogarden/gro/paths.js';
import {load_package_json} from '@grogarden/gro/package_json.js';

// TODO this is temporary, see the comments generated below

export const gen: Gen = async ({origin_id}) => {
	const package_json = await load_package_json();
	const serialized = JSON.stringify(package_json, null, 2);

	const gen_info = `// generated by ${to_root_path(origin_id)}`;
	const package_json_ts = `${gen_info}

// TODO probably change to import \`package.json\` directly without using codegen,
// for now this is convenient to avoid the complexity (exports, types, JSON import assertion)

// TODO should this be \`package_json\` instead of \`package_json\`? problem is "package" is a reserved word

import type {PackageJson} from '@grogarden/gro/package_json.js';

export const package_json = ${serialized} satisfies PackageJson;

${gen_info}`;

	return [
		package_json_ts,
		{
			filename: '../static/.well-known/package.json',
			content: serialized,
		},
	];
};
