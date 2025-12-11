<script lang="ts">
	import '../app.css';

	import { Icon } from '@stackoverflow/stacks-svelte';
	import { IconLogo, IconGlyph24 } from '@stackoverflow/stacks-icons'

	import Navigation from '$components/Navigation.svelte';
	import Search from '$components/Search.svelte';
	import ThemeToggle from '$components/ThemeToggle.svelte';

	import Favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();

	const year = new Date().getFullYear()
</script>

<svelte:head>
	<title>Stack Overflow</title>
	<link rel="icon" href={Favicon} />
</svelte:head>

<header class="w20 sm:w100 hmx100 h100 sm:h-auto overflow-auto ps-fixed br bc-black-200 z-nav">
	<div class="d-flex ai-center jc-space-between bb bc-black-200 bg-white py16 px24 sm:pb12 sm:pt12">
		<a href="/" title="Home" class="fc-black h:fc-orange-400">
			<Icon src={IconLogo} />
		</a>

		<Search />
	</div>
	<div class="sm:d-none h100 d-flex fd-column">
		<Navigation
			navigation={data.structure?.navigation}
		/>
		<ThemeToggle />
	</div>
</header>

<main>
	<div class="bg-blue-100 px24 py12">
		This is a preview, you can find the <a href="https://stackoverflow.design" class="s-link s-link__underlined">current version here.</a>
	</div>

	{@render children?.()}

	<footer class="d-flex ai-center mt64 ml32 pb32 fc-black-400">
		<Icon src={IconGlyph24} />
		<div class="footer__blurb ml12">
			© {year} Stack Exchange Inc.
			All rights reserved.
		</div>
	</footer>
</main>

