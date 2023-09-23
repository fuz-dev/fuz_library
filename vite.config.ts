import type {UserConfig} from 'vite';
import {sveltekit} from '@sveltejs/kit/vite';
// TODO enable once published
// import {fuz_code_vite_plugins} from '@fuz.dev/fuz-code/fuz_code_vite_plugins.js';

const config: UserConfig = {
	plugins: [sveltekit()], // TODO enable once published `, ...fuz_code_vite_plugins`
	ssr: {noExternal: ['@fuz.dev/fuz']},
};

export default config;
