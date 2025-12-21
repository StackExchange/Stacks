<script lang="ts">
	import '../app.css';

	import { Icon, Button } from '@stackoverflow/stacks-svelte';
	import { IconLogo, IconGlyph24, IconServiceGitHub, IconMenu, IconCross } from '@stackoverflow/stacks-icons'

	import Navigation from '$components/Navigation.svelte';
	import Search from '$components/Search.svelte';
	import ThemeToggle from '$components/ThemeToggle.svelte';

	import Favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();

	let mobileMenu = $state(false)

	const year = new Date().getFullYear()
</script>

<svelte:head>
	<title>Stack Overflow</title>
	<link rel="icon" href={Favicon} />
</svelte:head>

<header class="fc-white w20 sm:w100 hmx100 h100 sm:h-auto overflow-auto ps-fixed z-nav d-flex fd-column sm:fd-column sm:ps-static sm:order-last">
	<div class="d-flex ai-center bg-black-100 pt16 px24 sm:pr6 sm:pb12 sm:pt12">
		<a href="/" title="Home" class="fc-brand-orange mr-auto">
			<Icon src={IconLogo} />
		</a>

		<Search />

		<Button class="d-none sm:d-block" onclick={() => mobileMenu = !mobileMenu} weight="clear" icon>
			<Icon src={mobileMenu ? IconCross : IconMenu} class="fc-black" />
		</Button>
	</div>

	<div class={`d-block ${mobileMenu ? '' : 'sm:d-none'}`}>
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

<main class="main bg-white hmn-screen d-flex fd-column t24 sm:t0 ps-relative">
	<div class="bg-blue-400 fc-white px24 py12">
		This is a brand focused preview – for developer reference please see <a href="https://stackoverflow.design" class="s-link fc-white s-link__underlined">the curent docs</a> or <a href="https://beta.stackoverflow.design" class="s-link fc-white s-link__underlined">the beta release</a>.
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