<script lang="ts">
	// TODO replace with `@fuz.dev/fuz-code`, this is just stubbed to get published

	export let content: string;

	export let pre_attrs: any = undefined;
	export let code_attrs: any = undefined;

	export let lang: unknown = 'svelte';
	lang;

	export let inline = false;

	// $: grammar = lang === null ? null : Prism.languages[lang];

	// TODO do this at compile time somehow
	// $: highlighted = grammar === null ? null : content && Prism.highlight(content, grammar, lang!);
	$: markup = content;

	// TODO add `CopyToClipboard`, maybe only when not inline?
</script>

<pre class:inline {...pre_attrs}><code {...code_attrs}><slot {markup}>{content}</slot></code></pre>

<style>
	pre {
		background-color: var(--fg_1);
		border-radius: var(--border_radius_xs);
		padding: var(--spacing_xs3) var(--spacing_xs);
	}
	code {
		background-color: unset;
		/* the default `code` padding displays incorrectly wrapping the highlighted code */
		padding: 0;
	}
</style>
