<script lang="ts">
	import '../app.css';

	import { Icon } from '@stackoverflow/stacks-svelte';
	import { IconLogo, IconGlyph24 } from '@stackoverflow/stacks-icons'

	import Navigation from '$components/Navigation.svelte';
	import Search from '$components/Search.svelte';
	import Favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();

	const year = new Date().getFullYear()
</script>

<svelte:head>
	<title>Stack Overflow</title>
	<link rel="icon" href={Favicon} />
</svelte:head>

<header class="sidebar hmx100 h100 overflow-auto ps-fixed br bc-black-200">
	<a class="d-block fc-black p24 bb bc-black-200" href="/" title="Home">
		<Icon src={IconLogo} />
	</a>

	<div class="p12">
		<Search />
	</div>

	<Navigation
		navigation={data.structure?.navigation}
	/>
</header>

<main>
	<div class="bg-blue-100 px24 py12">
		This is a preview, you can find the <a href="https://stackoverflow.design" class="s-link s-link__underlined">current version here.</a>
	</div>

	{@render children?.()}
</main>

<footer class="d-flex ai-center p24 fc-black-400">
	<Icon src={IconGlyph24} />
	<div class="footer__blurb ml12">
		© {year} Stack Exchange Inc.
		All rights reserved.
	</div>
</footer>
