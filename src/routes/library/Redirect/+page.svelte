<script lang="ts">
	import Redirect from '$lib/Redirect.svelte';
	import LibraryItem from '$lib/LibraryItem.svelte';
	import Code from '$routes/Code.svelte';

	const LIBRARY_ITEM_NAME = 'Redirect';
</script>

<LibraryItem name={LIBRARY_ITEM_NAME}>
	<div class="box prose">
		<p>
			Adds a redirect for a page using <a
				href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections#html_redirections"
				>a meta tag</a
			>
			with
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#http-equiv"
				>the <code>refresh</code> header</a
			>. Includes a rendered link and JS navigation fallback.
		</p>
		<aside class="width_sm">
			Please note: <code>auto={'{'}false}</code> is only used here to prevent the page from redirecting!
			Normally you wouldn't include it as a prop.
		</aside>
		<section>
			<Code content={`<Redirect auto={false} />`} />
			<Redirect auto={false} />
		</section>
		<section>
			<Code
				content={`<Redirect
	host="https://www.felt.dev"
	path="/library"
	let:url
	auto={false}
>
	the redirect url is {url}
</Redirect>`}
			/>
			<Redirect host="https://www.felt.dev" path="/library" let:url auto={false}>
				the redirect url is {url}
			</Redirect>
		</section>
	</div>
</LibraryItem>

<style>
	section {
		/* TODO make standard across library pages */
		padding: var(--spacing_xl2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
