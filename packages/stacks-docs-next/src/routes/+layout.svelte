<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import '../app.css';

	import { Icon, Button } from '@stackoverflow/stacks-svelte';
	import { IconLogo, IconGlyph24, IconServiceGitHub, IconMenu, IconCross } from '@stackoverflow/stacks-icons'

	import Navigation from '$components/Navigation.svelte';
	import Contents from '$components/Contents.svelte';
	import Search from '$components/Search.svelte';
	import ThemeToggle from '$components/ThemeToggle.svelte';
	import Login from '$src/components/LoginPrompt.svelte';

	import Favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();

	let mobileMenu = $state(false);

	$effect(() => {
		document.body.style.overflow = mobileMenu ? 'hidden' : '';
		return () => { document.body.style.overflow = ''; };
	});

	const year = new Date().getFullYear();
	const toc = $derived(page.data?.metadata?.toc || []);
</script>

<svelte:head>
	<title>Stack Overflow</title>
	<link rel="icon" href={Favicon} />
</svelte:head>

<div class="layout-root d-flex sm:fd-column">
<header class="d-flex fd-column fl-shrink0 overflow-auto ff-stack-sans-headline w20 wmn2 wmx3 ps-sticky t0 h-screen z-nav-fixed bg-black-100 sm:h-auto sm:hmx-screen sm:overflow-hidden sm:w100 sm:wmn-initial sm:wmx-initial" class:menu-open={mobileMenu}>
	<div class="d-flex ai-center pt32 px24 sm:pr6 sm:pb12 sm:pt12">
		<a href={resolve('/')} title="Home" class="fc-brand mr-auto">
			<Icon src={IconLogo} />
		</a>

		<Search />

		<Button class="d-none sm:d-block" onclick={() => mobileMenu = !mobileMenu} weight="clear" icon>
			<Icon src={mobileMenu ? IconCross : IconMenu} class="fc-black" />
		</Button>
	</div>

	<div class={`d-flex fd-column h100 pt16 sm:fl-grow1 ${mobileMenu ? 'overflow-auto' : 'sm:d-none'}`}>
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

<div class="d-flex fd-column fl-grow1 wmn0">
	{#if page.data.active?.image}
		<div class="layout-hero w100 hmx6 bg-cover bg-bottom bg-no-repeat" style="background-image: url({page.data.active.image})"></div>
	{/if}

	<div class="d-flex fl-grow1 bg-white sm:mt0" class:mt24={!page.data.active?.image}>
		<main class="main d-flex fd-column wmn0">
			<div class="d-flex fd-column fl-grow1">
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

		<Contents {toc} />
	</div>
</div>
</div>

<style>
	@media (max-width: 48.75rem) {
		header.menu-open {
			position: fixed !important;
			top: 0;
			left: 0;
			width: 100% !important;
			max-width: 100% !important;
			height: 100dvh !important;
			max-height: 100dvh !important;
			overflow: hidden !important;
		}
	}
</style>
