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

<header class="bg-black-100 fc-white w20 sm:w100 hmx100 h100 sm:h-auto overflow-auto ps-fixed br bc-black-200 z-nav d-flex fd-column">
	<div class="d-flex ai-center jc-space-between bg-black-100 pt16 pl24 sm:pb12 sm:pt12">
		<a href="/" title="Home" class="fc-orange-400">
			<Icon src={IconLogo} />
		</a>

		<Search />
	</div>
	<div class="sm:d-none">
		<Navigation
			navigation={data.structure?.navigation}
		/>
	</div>
	
	<div class="d-flex md:fd-column sm:d-none bt bc-black-200 pt12 pb12 px12 mt-auto">
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