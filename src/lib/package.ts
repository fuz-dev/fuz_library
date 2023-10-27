import type {PackageJson} from '@grogarden/gro/package_json.js';

export const package_json = {
	name: '@fuz.dev/fuz_library',
	description: 'components and helpers for Svelte, SvelteKit, and Fuz',
	version: '0.15.1',
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
	dependencies: {'@grogarden/util': '^0.15.2'},
	peerDependencies: {'@sveltejs/kit': '*', svelte: '*'},
	devDependencies: {
		'@changesets/changelog-git': '^0.1.14',
		'@feltjs/eslint-config': '^0.4.1',
		'@fuz.dev/fuz': '^0.75.2',
		'@fuz.dev/fuz_code': '^0.3.2',
		'@grogarden/gro': '^0.96.1',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.27.1',
		'@sveltejs/package': '^2.2.2',
		'@types/node': '^20.8.9',
		'@typescript-eslint/eslint-plugin': '^6.9.0',
		'@typescript-eslint/parser': '^6.9.0',
		eslint: '^8.52.0',
		'eslint-plugin-svelte': '^2.34.0',
		prettier: '^3.0.3',
		'prettier-plugin-svelte': '^3.0.3',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.2',
		'svelte-check': '^3.5.2',
		tslib: '^2.6.2',
		typescript: '^5.2.2',
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
		'./CopyToClipboard.svelte': {
			svelte: './dist/CopyToClipboard.svelte',
			default: './dist/CopyToClipboard.svelte',
			types: './dist/CopyToClipboard.svelte.d.ts',
		},
		'./devmode.js': {default: './dist/devmode.js', types: './dist/devmode.d.ts'},
		'./DevmodeControls.svelte': {
			svelte: './dist/DevmodeControls.svelte',
			default: './dist/DevmodeControls.svelte',
			types: './dist/DevmodeControls.svelte.d.ts',
		},
		'./GithubLogo.svelte': {
			svelte: './dist/GithubLogo.svelte',
			default: './dist/GithubLogo.svelte',
			types: './dist/GithubLogo.svelte.d.ts',
		},
		'./helpers.js': {default: './dist/helpers.js', types: './dist/helpers.d.ts'},
		'./HueInput.svelte': {
			svelte: './dist/HueInput.svelte',
			default: './dist/HueInput.svelte',
			types: './dist/HueInput.svelte.d.ts',
		},
		'./Library.svelte': {
			svelte: './dist/Library.svelte',
			default: './dist/Library.svelte',
			types: './dist/Library.svelte.d.ts',
		},
		'./LibraryFooter.svelte': {
			svelte: './dist/LibraryFooter.svelte',
			default: './dist/LibraryFooter.svelte',
			types: './dist/LibraryFooter.svelte.d.ts',
		},
		'./LibraryHeader.svelte': {
			svelte: './dist/LibraryHeader.svelte',
			default: './dist/LibraryHeader.svelte',
			types: './dist/LibraryHeader.svelte.d.ts',
		},
		'./LibraryMenu.svelte': {
			svelte: './dist/LibraryMenu.svelte',
			default: './dist/LibraryMenu.svelte',
			types: './dist/LibraryMenu.svelte.d.ts',
		},
		'./LibraryNav.svelte': {
			svelte: './dist/LibraryNav.svelte',
			default: './dist/LibraryNav.svelte',
			types: './dist/LibraryNav.svelte.d.ts',
		},
		'./LibraryPanel.svelte': {
			svelte: './dist/LibraryPanel.svelte',
			default: './dist/LibraryPanel.svelte',
			types: './dist/LibraryPanel.svelte.d.ts',
		},
		'./LibraryVocab.svelte': {
			svelte: './dist/LibraryVocab.svelte',
			default: './dist/LibraryVocab.svelte',
			types: './dist/LibraryVocab.svelte.d.ts',
		},
		'./package_meta.js': {default: './dist/package_meta.js', types: './dist/package_meta.d.ts'},
		'./package.gen.js': {default: './dist/package.gen.js', types: './dist/package.gen.d.ts'},
		'./package.js': {default: './dist/package.js', types: './dist/package.d.ts'},
		'./PackageDetail.svelte': {
			svelte: './dist/PackageDetail.svelte',
			default: './dist/PackageDetail.svelte',
			types: './dist/PackageDetail.svelte.d.ts',
		},
		'./PackageSummary.svelte': {
			svelte: './dist/PackageSummary.svelte',
			default: './dist/PackageSummary.svelte',
			types: './dist/PackageSummary.svelte.d.ts',
		},
		'./PendingAnimation.svelte': {
			svelte: './dist/PendingAnimation.svelte',
			default: './dist/PendingAnimation.svelte',
			types: './dist/PendingAnimation.svelte.d.ts',
		},
		'./PendingButton.svelte': {
			svelte: './dist/PendingButton.svelte',
			default: './dist/PendingButton.svelte',
			types: './dist/PendingButton.svelte.d.ts',
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
		'./tome.js': {default: './dist/tome.js', types: './dist/tome.d.ts'},
		'./TomeDetail.svelte': {
			svelte: './dist/TomeDetail.svelte',
			default: './dist/TomeDetail.svelte',
			types: './dist/TomeDetail.svelte.d.ts',
		},
		'./TomeTitle.svelte': {
			svelte: './dist/TomeTitle.svelte',
			default: './dist/TomeTitle.svelte',
			types: './dist/TomeTitle.svelte.d.ts',
		},
	},
} satisfies PackageJson;
