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

	const year = new Date().getFullYear();
	const toc = $derived(page.data?.metadata?.toc || []);
</script>

<svelte:head>
	<title>Stack Overflow</title>
	<link rel="icon" href={Favicon} />
</svelte:head>

<div class="layout-root d-flex">
<header class="layout-nav d-flex fd-column fl-shrink0 overflow-auto ff-stack-sans-headline">
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

<div class="d-flex fd-column fl-grow1 wmn0">
	{#if page.data.active?.image}
		<img class="w100 h-auto" width="1030" height="540" alt="" src={page.data.active.image} />
	{/if}

	<div class="d-flex fl-grow1" class:mt24={!page.data.active?.image}>
		<main class="main bg-white d-flex fd-column wmn0">
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

		<Contents {toc} />
	</div>
</div>
</div>
