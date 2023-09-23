// generated by src/lib/pkg.gen.ts

// TODO probably change to import `package.json` directly without using codegen,
// for now this is convenient to avoid the complexity (exports, types, JSON import assertion)

// TODO should this be `package_json` instead of `pkg`?

import type {PackageJson} from '@feltjs/gro/util/package_json.js';

export const pkg = {
	name: '@fuz.dev/fuz-library',
	description: 'components and helpers for Svelte and SvelteKit with Fuz',
	version: '0.0.1',
	license: 'MIT',
	type: 'module',
	homepage: 'https://library.fuz.dev/',
	repository: 'https://github.com/fuz-dev/fuz-library',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	engines: {node: '>=20.5'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	devDependencies: {
		'@changesets/changelog-git': '^0.1.14',
		'@feltjs/eslint-config': '^0.4.0',
		'@feltjs/gro': '^0.83.0',
		'@fuz.dev/fuz': '^0.69.1',
		'@grogarden/util': '^0.13.1',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.25.0',
		'@sveltejs/package': '^2.2.2',
		'@typescript-eslint/eslint-plugin': '^6.7.2',
		'@typescript-eslint/parser': '^6.7.2',
		eslint: '^8.49.0',
		'eslint-plugin-svelte': '^2.33.2',
		prettier: '^3.0.3',
		'prettier-plugin-svelte': '^3.0.3',
		svelte: '^4.2.1',
		'svelte-check': '^3.5.2',
		'svelte-preprocess-esbuild': '^3.0.1',
		tslib: '^2.6.2',
		typescript: '^5.2.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@feltjs'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./Alert.svelte': {svelte: './dist/Alert.svelte', types: './dist/Alert.svelte.d.ts'},
		'./alert.js': {default: './dist/alert.js', types: './dist/alert.d.ts'},
		'./Breadcrumbs.svelte': {
			svelte: './dist/Breadcrumbs.svelte',
			types: './dist/Breadcrumbs.svelte.d.ts',
		},
		'./Card.svelte': {svelte: './dist/Card.svelte', types: './dist/Card.svelte.d.ts'},
		'./CopyToClipboard.svelte': {
			svelte: './dist/CopyToClipboard.svelte',
			types: './dist/CopyToClipboard.svelte.d.ts',
		},
		'./devmode.js': {default: './dist/devmode.js', types: './dist/devmode.d.ts'},
		'./DevmodeControls.svelte': {
			svelte: './dist/DevmodeControls.svelte',
			types: './dist/DevmodeControls.svelte.d.ts',
		},
		'./Dialog.svelte': {svelte: './dist/Dialog.svelte', types: './dist/Dialog.svelte.d.ts'},
		'./dialog.js': {default: './dist/dialog.js', types: './dist/dialog.d.ts'},
		'./Dialogs.svelte': {svelte: './dist/Dialogs.svelte', types: './dist/Dialogs.svelte.d.ts'},
		'./FeltWindowHost.svelte': {
			svelte: './dist/FeltWindowHost.svelte',
			types: './dist/FeltWindowHost.svelte.d.ts',
		},
		'./FeltWindowTenant.svelte': {
			svelte: './dist/FeltWindowTenant.svelte',
			types: './dist/FeltWindowTenant.svelte.d.ts',
		},
		'./GithubLogo.svelte': {
			svelte: './dist/GithubLogo.svelte',
			types: './dist/GithubLogo.svelte.d.ts',
		},
		'./helpers.js': {default: './dist/helpers.js', types: './dist/helpers.d.ts'},
		'./HueInput.svelte': {svelte: './dist/HueInput.svelte', types: './dist/HueInput.svelte.d.ts'},
		'./library_item.js': {default: './dist/library_item.js', types: './dist/library_item.d.ts'},
		'./Library.svelte': {svelte: './dist/Library.svelte', types: './dist/Library.svelte.d.ts'},
		'./LibraryFooter.svelte': {
			svelte: './dist/LibraryFooter.svelte',
			types: './dist/LibraryFooter.svelte.d.ts',
		},
		'./LibraryHeader.svelte': {
			svelte: './dist/LibraryHeader.svelte',
			types: './dist/LibraryHeader.svelte.d.ts',
		},
		'./LibraryItem.svelte': {
			svelte: './dist/LibraryItem.svelte',
			types: './dist/LibraryItem.svelte.d.ts',
		},
		'./LibraryItemTitle.svelte': {
			svelte: './dist/LibraryItemTitle.svelte',
			types: './dist/LibraryItemTitle.svelte.d.ts',
		},
		'./LibraryMenu.svelte': {
			svelte: './dist/LibraryMenu.svelte',
			types: './dist/LibraryMenu.svelte.d.ts',
		},
		'./LibraryNav.svelte': {
			svelte: './dist/LibraryNav.svelte',
			types: './dist/LibraryNav.svelte.d.ts',
		},
		'./LibraryPanel.svelte': {
			svelte: './dist/LibraryPanel.svelte',
			types: './dist/LibraryPanel.svelte.d.ts',
		},
		'./LibraryVocab.svelte': {
			svelte: './dist/LibraryVocab.svelte',
			types: './dist/LibraryVocab.svelte.d.ts',
		},
		'./PackageHeader.svelte': {
			svelte: './dist/PackageHeader.svelte',
			types: './dist/PackageHeader.svelte.d.ts',
		},
		'./PendingAnimation.svelte': {
			svelte: './dist/PendingAnimation.svelte',
			types: './dist/PendingAnimation.svelte.d.ts',
		},
		'./PendingButton.svelte': {
			svelte: './dist/PendingButton.svelte',
			types: './dist/PendingButton.svelte.d.ts',
		},
		'./pkg.js': {default: './dist/pkg.js', types: './dist/pkg.d.ts'},
		'./Redirect.svelte': {svelte: './dist/Redirect.svelte', types: './dist/Redirect.svelte.d.ts'},
		'./Teleport.svelte': {svelte: './dist/Teleport.svelte', types: './dist/Teleport.svelte.d.ts'},
	},
} satisfies PackageJson;

// generated by src/lib/pkg.gen.ts
