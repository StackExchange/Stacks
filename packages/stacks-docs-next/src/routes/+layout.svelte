<script lang="ts">
	import '../app.css';

	import { Icon, Button } from '@stackoverflow/stacks-svelte';
	import { IconLogo, IconGlyph24, IconServiceGitHub } from '@stackoverflow/stacks-icons'

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

<header class="fc-white w20 sm:w100 hmx100 h100 sm:h-auto overflow-auto ps-fixed z-nav d-flex fd-column">
	<div class="d-flex ai-center jc-space-between bg-black-100 pt16 pl24 sm:pb12 sm:pt12">
		<a href="/" title="Home" class="fc-brand-orange">
			<Icon src={IconLogo} />
		</a>

		<Search />
	</div>
	<div class="sm:d-none">
		<Navigation
			navigation={data.structure?.navigation}
		/>
	</div>
	
	<div class="d-flex md:fd-column sm:d-none pt12 pb12 px12 mt-auto">
		<div class="flex--item6 mr4 sm:mr0">
			<Button rel="external" target="_blank" href="https://github.com/StackExchange/Stacks/" class="w100" weight="clear">
				<Icon src={IconServiceGitHub} />
				GitHub
			</Button>
		</div>
		<div class="flex--item6 ml4 sm:ml0">
			<ThemeToggle />
		</div>
	</div>
</header>

<main class="main bg-white hmn-screen d-flex fd-column">
	<div class="bg-blue-400 fc-white px24 py12">
		This is a preview focused on branding – for developer reference please see the <a href="https://stackoverflow.design" class="s-link fc-white s-link__underlined">curent version</a> or <a href="https://beta.stackoverflow.design" class="s-link fc-white s-link__underlined">beta version</a>.
	</div>

	<div class="my-auto">
	{@render children?.()}
	</div>

	<footer class="d-flex ai-center ml32 py32 fc-black-400">
		<Icon src={IconGlyph24} />
		<div class="footer__blurb ml12">
			© {year} Stack Exchange Inc.
			All rights reserved.
		</div>
	</footer>
</main>

<style>
main {
	position: relative;
	top: 24px;
}
</style>