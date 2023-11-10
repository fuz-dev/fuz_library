<script lang="ts">
	import {page} from '$app/stores';

	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import Library_Menu from '$lib/Library_Menu.svelte';
	import Library_Header from '$lib/Library_Header.svelte';
	import Library_Footer from '$lib/Library_Footer.svelte';
	import {set_tomes} from '$lib/tome.js';
	import {tomes} from '$routes/library/tomes.js';
	import {package_json, src_json} from '$lib/package.js';
	import {parse_package_meta} from '$lib/package_meta.js';

	const tomes_by_name = new Map(tomes.map((t) => [t.name, t]));
	set_tomes(tomes_by_name);

	$: selected_tome = tomes.find((c) => c.pathname === $page.url.pathname);
	$: tomes_related_to_selected = selected_tome?.related
		?.map((r) => tomes_by_name.get(r)!)
		.filter(Boolean);

	// TODO factor this code out and publish the layout

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main>
	<nav><Breadcrumb>🧶</Breadcrumb></nav>
	<div class="layout width_md">
		<div class="menu_wrapper">
			<div class="menu width_sm">
				<Library_Menu {tomes} />
				{#if tomes_related_to_selected}
					<Library_Menu tomes={tomes_related_to_selected} let:category>
						<h6>related {category}</h6>
					</Library_Menu>
				{/if}
			</div>
		</div>
		<Library_Header {pkg} />
		<slot />
		<section class="box">
			<Library_Footer {pkg} root_url="https://www.fuz.dev/" />
		</section>
		<section class="box">
			<Breadcrumb>🧶</Breadcrumb>
		</section>
	</div>
</main>

<style>
	main {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: var(--spacing_5);
	}
	.layout {
		position: relative;
	}
	nav {
		font-size: var(--size_1);
	}
	.menu_wrapper {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		transform: translate3d(calc(-100% - var(--spacing_sm)), 0, 0);
		display: flex;
		justify-content: center;
	}
	.menu {
		position: sticky;
		top: 0;
	}
	@media (max-width: 1200px) {
		.menu_wrapper {
			position: relative;
			transform: none;
		}
	}
	section {
		padding: var(--spacing_2);
	}
	h6 {
		margin-bottom: var(--spacing_md);
		margin-top: var(--spacing_3);
	}
	h6:first-child {
		margin-top: 0;
	}
</style>
