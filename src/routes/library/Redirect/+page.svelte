<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import Redirect from '$lib/Redirect.svelte';
	import TomeDetails from '$lib/TomeDetails.svelte';
	import {tomes_by_name} from '$lib/tome';

	const LIBRARY_ITEM_NAME = 'Redirect';
	const tome = tomes_by_name.get(LIBRARY_ITEM_NAME)!;
</script>

<TomeDetails {tome}>
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
</TomeDetails>

<style>
	section {
		/* TODO make standard across library pages */
		padding: var(--spacing_xl2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
