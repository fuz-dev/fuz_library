import {base} from '$app/paths';

export const LIBRARY_PATH = '/library/';

export const to_library_path_info = (
	name: string,
	pathname: string,
): {path: string; path_is_active: boolean; path_segment: string | undefined} => {
	const path_segment = pathname.split('/').at(-1);
	const path = base + LIBRARY_PATH + name;
	const path_is_active = path_segment === name; // messy but works
	return {
		path,
		path_is_active,
		path_segment,
	};
};
