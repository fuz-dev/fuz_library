import type {UserConfig} from 'vite';
import {sveltekit} from '@sveltejs/kit/vite';
import {fuz_code_vite_plugins} from '@fuz.dev/code/fuz_code_vite_plugins.js';

const config: UserConfig = {
	plugins: [sveltekit(), ...fuz_code_vite_plugins],
	ssr: {noExternal: ['@fuz.dev/fuz']},
};

export default config;
