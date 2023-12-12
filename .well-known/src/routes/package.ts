// generated by src/routes/package.gen.ts

import type {Package_Json} from '@grogarden/gro/package_json.js';
import type {Src_Json} from '@grogarden/gro/src_json.js';

export const package_json = {
	name: '@fuz.dev/fuz_library',
	version: '0.23.0',
	description: 'components and helpers for Svelte, SvelteKit, and Fuz',
	icon: '🧶',
	public: true,
	license: 'MIT',
	homepage: 'https://library.fuz.dev/',
	repository: 'https://github.com/fuz-dev/fuz_library',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	type: 'module',
	engines: {node: '>=20.7'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	peerDependencies: {'@grogarden/util': '*', '@sveltejs/kit': '*', svelte: '*'},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@feltjs/eslint-config': '^0.4.1',
		'@fuz.dev/fuz': '^0.81.0',
		'@fuz.dev/fuz_code': '^0.4.3',
		'@grogarden/gro': '^0.104.0',
		'@grogarden/util': '^0.18.0',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.29.0',
		'@sveltejs/package': '^2.2.3',
		'@types/node': '^20.10.4',
		'@typescript-eslint/eslint-plugin': '^6.14.0',
		'@typescript-eslint/parser': '^6.14.0',
		eslint: '^8.55.0',
		'eslint-plugin-svelte': '^2.35.1',
		prettier: '^3.1.1',
		'prettier-plugin-svelte': '^3.1.2',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.8',
		'svelte-check': '^3.6.2',
		tslib: '^2.6.2',
		typescript: '^5.3.3',
		uvu: '^0.5.6',
		zod: '^3.22.4',
	},
	eslintConfig: {root: true, extends: '@feltjs', rules: {'no-console': 1}},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./Alert.svelte': {
			svelte: './dist/Alert.svelte',
			default: './dist/Alert.svelte',
			types: './dist/Alert.svelte.d.ts',
		},
		'./alert.js': {default: './dist/alert.js', types: './dist/alert.d.ts'},
		'./Breadcrumb.svelte': {
			svelte: './dist/Breadcrumb.svelte',
			default: './dist/Breadcrumb.svelte',
			types: './dist/Breadcrumb.svelte.d.ts',
		},
		'./Card.svelte': {
			svelte: './dist/Card.svelte',
			default: './dist/Card.svelte',
			types: './dist/Card.svelte.d.ts',
		},
		'./Copy_To_Clipboard.svelte': {
			svelte: './dist/Copy_To_Clipboard.svelte',
			default: './dist/Copy_To_Clipboard.svelte',
			types: './dist/Copy_To_Clipboard.svelte.d.ts',
		},
		'./Devmode_Controls.svelte': {
			svelte: './dist/Devmode_Controls.svelte',
			default: './dist/Devmode_Controls.svelte',
			types: './dist/Devmode_Controls.svelte.d.ts',
		},
		'./devmode.js': {default: './dist/devmode.js', types: './dist/devmode.d.ts'},
		'./Github_Logo.svelte': {
			svelte: './dist/Github_Logo.svelte',
			default: './dist/Github_Logo.svelte',
			types: './dist/Github_Logo.svelte.d.ts',
		},
		'./helpers.js': {default: './dist/helpers.js', types: './dist/helpers.d.ts'},
		'./Hue_Input.svelte': {
			svelte: './dist/Hue_Input.svelte',
			default: './dist/Hue_Input.svelte',
			types: './dist/Hue_Input.svelte.d.ts',
		},
		'./Library_Footer.svelte': {
			svelte: './dist/Library_Footer.svelte',
			default: './dist/Library_Footer.svelte',
			types: './dist/Library_Footer.svelte.d.ts',
		},
		'./Library_Header.svelte': {
			svelte: './dist/Library_Header.svelte',
			default: './dist/Library_Header.svelte',
			types: './dist/Library_Header.svelte.d.ts',
		},
		'./Library_Menu.svelte': {
			svelte: './dist/Library_Menu.svelte',
			default: './dist/Library_Menu.svelte',
			types: './dist/Library_Menu.svelte.d.ts',
		},
		'./Library_Nav.svelte': {
			svelte: './dist/Library_Nav.svelte',
			default: './dist/Library_Nav.svelte',
			types: './dist/Library_Nav.svelte.d.ts',
		},
		'./Library_Panel.svelte': {
			svelte: './dist/Library_Panel.svelte',
			default: './dist/Library_Panel.svelte',
			types: './dist/Library_Panel.svelte.d.ts',
		},
		'./Library_Vocab.svelte': {
			svelte: './dist/Library_Vocab.svelte',
			default: './dist/Library_Vocab.svelte',
			types: './dist/Library_Vocab.svelte.d.ts',
		},
		'./Library.svelte': {
			svelte: './dist/Library.svelte',
			default: './dist/Library.svelte',
			types: './dist/Library.svelte.d.ts',
		},
		'./Package_Detail.svelte': {
			svelte: './dist/Package_Detail.svelte',
			default: './dist/Package_Detail.svelte',
			types: './dist/Package_Detail.svelte.d.ts',
		},
		'./package_meta.js': {default: './dist/package_meta.js', types: './dist/package_meta.d.ts'},
		'./Package_Summary.svelte': {
			svelte: './dist/Package_Summary.svelte',
			default: './dist/Package_Summary.svelte',
			types: './dist/Package_Summary.svelte.d.ts',
		},
		'./Pending_Animation.svelte': {
			svelte: './dist/Pending_Animation.svelte',
			default: './dist/Pending_Animation.svelte',
			types: './dist/Pending_Animation.svelte.d.ts',
		},
		'./Pending_Button.svelte': {
			svelte: './dist/Pending_Button.svelte',
			default: './dist/Pending_Button.svelte',
			types: './dist/Pending_Button.svelte.d.ts',
		},
		'./Redirect.svelte': {
			svelte: './dist/Redirect.svelte',
			default: './dist/Redirect.svelte',
			types: './dist/Redirect.svelte.d.ts',
		},
		'./Teleport.svelte': {
			svelte: './dist/Teleport.svelte',
			default: './dist/Teleport.svelte',
			types: './dist/Teleport.svelte.d.ts',
		},
		'./Tome_Detail.svelte': {
			svelte: './dist/Tome_Detail.svelte',
			default: './dist/Tome_Detail.svelte',
			types: './dist/Tome_Detail.svelte.d.ts',
		},
		'./Tome_Title.svelte': {
			svelte: './dist/Tome_Title.svelte',
			default: './dist/Tome_Title.svelte',
			types: './dist/Tome_Title.svelte.d.ts',
		},
		'./tome.js': {default: './dist/tome.js', types: './dist/tome.d.ts'},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@fuz.dev/fuz_library',
	version: '0.23.0',
	modules: {
		'./Alert.svelte': {path: 'Alert.svelte', declarations: []},
		'./alert.js': {
			path: 'alert.ts',
			declarations: [
				{name: 'Alert_Status', kind: 'type'},
				{name: 'Alert_Status_Options', kind: 'type'},
				{name: 'alert_status_options', kind: 'variable'},
			],
		},
		'./Breadcrumb.svelte': {path: 'Breadcrumb.svelte', declarations: []},
		'./Card.svelte': {path: 'Card.svelte', declarations: []},
		'./Copy_To_Clipboard.svelte': {path: 'Copy_To_Clipboard.svelte', declarations: []},
		'./Devmode_Controls.svelte': {path: 'Devmode_Controls.svelte', declarations: []},
		'./devmode.js': {
			path: 'devmode.ts',
			declarations: [
				{name: 'get_devmode', kind: 'function'},
				{name: 'set_devmode', kind: 'function'},
			],
		},
		'./Github_Logo.svelte': {path: 'Github_Logo.svelte', declarations: []},
		'./helpers.js': {
			path: 'helpers.ts',
			declarations: [
				{name: 'LIBRARY_PATH', kind: 'variable'},
				{name: 'to_library_path_info', kind: 'function'},
			],
		},
		'./Hue_Input.svelte': {path: 'Hue_Input.svelte', declarations: []},
		'./Library_Footer.svelte': {path: 'Library_Footer.svelte', declarations: []},
		'./Library_Header.svelte': {path: 'Library_Header.svelte', declarations: []},
		'./Library_Menu.svelte': {path: 'Library_Menu.svelte', declarations: []},
		'./Library_Nav.svelte': {path: 'Library_Nav.svelte', declarations: []},
		'./Library_Panel.svelte': {path: 'Library_Panel.svelte', declarations: []},
		'./Library_Vocab.svelte': {path: 'Library_Vocab.svelte', declarations: []},
		'./Library.svelte': {path: 'Library.svelte', declarations: []},
		'./Package_Detail.svelte': {path: 'Package_Detail.svelte', declarations: []},
		'./package_meta.js': {
			path: 'package_meta.ts',
			declarations: [
				{name: 'Package', kind: 'type'},
				{name: 'Package_Meta', kind: 'type'},
				{name: 'parse_package_meta', kind: 'function'},
				{name: 'parse_repo_name', kind: 'function'},
				{name: 'format_host', kind: 'function'},
				{name: 'parse_org_url', kind: 'function'},
			],
		},
		'./Package_Summary.svelte': {path: 'Package_Summary.svelte', declarations: []},
		'./Pending_Animation.svelte': {path: 'Pending_Animation.svelte', declarations: []},
		'./Pending_Button.svelte': {path: 'Pending_Button.svelte', declarations: []},
		'./Redirect.svelte': {path: 'Redirect.svelte', declarations: []},
		'./Teleport.svelte': {path: 'Teleport.svelte', declarations: []},
		'./Tome_Detail.svelte': {path: 'Tome_Detail.svelte', declarations: []},
		'./Tome_Title.svelte': {path: 'Tome_Title.svelte', declarations: []},
		'./tome.js': {
			path: 'tome.ts',
			declarations: [
				{name: 'Tome', kind: 'variable'},
				{name: 'init_tome', kind: 'function'},
				{name: 'get_tomes', kind: 'function'},
				{name: 'set_tomes', kind: 'function'},
				{name: 'get_tome', kind: 'function'},
			],
		},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
