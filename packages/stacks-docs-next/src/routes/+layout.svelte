<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import '../app.css';

	import { Icon, Button } from '@stackoverflow/stacks-svelte';
	import { IconLogo, IconGlyph24, IconServiceGitHub, IconMenu, IconCross } from '@stackoverflow/stacks-icons'

	import Navigation from '$components/Navigation.svelte';
	import Search from '$components/Search.svelte';
	import ThemeToggle from '$components/ThemeToggle.svelte';
	import Login from '$src/components/LoginPrompt.svelte';

	import Favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();

	let mobileMenu = $state(false)

	const year = new Date().getFullYear()
</script>

<svelte:head>
	<title>Stack Overflow</title>
	<link rel="icon" href={Favicon} />
</svelte:head>

<header class="d-flex fd-column w20 sm:w100 hmx100 h-screen sm:h-auto overflow-auto ps-fixed z-nav sm:ps-static ff-stack-sans-headline">
	<div class="d-flex ai-center bg-black-100 pt32 px24 sm:pr6 sm:pb12 sm:pt12">
		<a href={resolve('/')} title="Home" class="fc-brand mr-auto">
			<Icon src={IconLogo} />
		</a>

		<Search />

		<Button class="d-none sm:d-block" onclick={() => mobileMenu = !mobileMenu} weight="clear" icon>
			<Icon src={mobileMenu ? IconCross : IconMenu} class="fc-black" />
		</Button>
	</div>

	<div class={`d-flex fd-column h100 pt16 ${mobileMenu ? '' : 'sm:d-none'}`}>
		<Navigation
			navigation={data.structure?.navigation}
		/>

		<div class="d-flex pt12 pb12 px12 mt-auto">
			<div class="w50 mr4 sm:mr0">
				<Button target="_blank" href="https://github.com/StackExchange/Stacks/" class="w100" weight="clear">
					<Icon src={IconServiceGitHub} />
					GitHub
				</Button>
			</div>
			<div class="w50 ml4 sm:ml0">
				<ThemeToggle />
			</div>
		</div>
	</div>
</header>

<main class="main bg-white d-flex fd-column t24 sm:t0 ps-relative">
	<!-- <div class="bg-blue-400 fc-white px24 py12">
		This is a brand focused preview – for developer reference please see <a href="https://stackoverflow.design" class="s-link fc-white s-link__underlined">the current docs</a> or <a href="https://beta.stackoverflow.design" class="s-link fc-white s-link__underlined">the beta release</a>.
	</div> -->

	<div class="fl-grow1">
		{#if data.needsAuth}
			<div class="my-auto">
				<Login returnUrl={page.url.pathname} />
			</div>
		{:else}
			{@render children?.()}
		{/if}
	</div>

	{#if !page.data.hideFooter}
		<footer class="d-flex sm:fd-column ai-center sm:ai-start ml32 sm:ml24 py32 fc-black-400">
			<Icon src={IconGlyph24} />
			<div class="footer__blurb ml12 sm:ml0 sm:mt12">
				© {year} Stack Exchange Inc.
				All rights reserved.
			</div>
		</footer>
	{/if}
</main>
