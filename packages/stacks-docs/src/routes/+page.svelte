<script lang="ts">
  let { data }: { data: App.PageData } = $props();

  import { Icon, Notice } from '@stackoverflow/stacks-svelte';
  import { IconPen, IconStackLayers, IconGlyph, IconBook, IconUserStack, IconMap, IconMail, IconServiceSvelte } from '@stackoverflow/stacks-icons/icons';
  import { resolve } from '$app/paths';

  const theme = {
    'Product': {
        icon: IconStackLayers,
        iconClasses: 'bg-brand-pink fc-black',
    },
    'Copywriting': {
        icon: IconPen,
        iconClasses: 'bg-brand-blue fc-white',
    },
    'Community': {
        icon: IconUserStack,
        iconClasses: 'bg-brand-yellow fc-black',
    },
    'Brand': {
        icon: IconGlyph,
        iconClasses: 'bg-brand fc-black',
    },
    'Handbook': {
        icon: IconBook,
        iconClasses: 'bg-brand-green fc-brand-green-dark',
    },
    'Resources': {
        icon: IconMap,
        iconClasses: 'bg-brand-brown-light fc-black',
    },
    'Email': {
        icon: IconMail,
        iconClasses: 'bg-brand-purple fc-black',
    },
  }
</script>

<svelte:head>
  <title>Stack Overflow Design System (aka “Stacks”)</title>
  <style>
    main {
      background-image: url(/images/heros/home.svg);
      background-repeat: no-repeat;
      background-position: calc(100% + 120px) 0%;
      background-size: 55% auto;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      width: 100%;
      padding-bottom: 30px;
    }
  </style>
</svelte:head>

<div class="page p32 sm:p24 w100 wmx12">
  <div class="d-flex g4 ai-center mb-auto">
    <span class="s-badge fc-purple-500 bg-purple-100">v{__APP_VERSION__}</span>
    <a href="https://beta.svelte.stackoverflow.design/" class="s-badge">
      <Icon src={IconServiceSvelte} class="native" />
      v{__SVELTE_VERSION__}
    </a>
  </div>

  <h1 class="mt24 mb12">Stacks</h1>

  <p class="fs-body3 w50 sm:w100 sm:pr32 mb48 wmx5">
    The Stack Overflow Design System – resources for product designers, developers, marketers and everyone who works with Stack Overflow.
  </p>

  <div class="d-grid grid__12 g16">
    {#each data.structure?.navigation as category (category.slug)}
      <a
        class="td-none grid--col4 md:grid--col6 sm:grid--col12 d-flex fd-column p24 hmn2 bg-black-600 h:bc-black h:bg-black-500 d:bg-black-100 fc-white d:fc-black "
        href={resolve(`/${category.slug}`)}
      >
        <div class="p6 as-start {theme[category.title].iconClasses}"><Icon class="h24 w24" src={theme[category.title].icon} /></div>
        <h2 class="mt-auto fs-headline1 mb8">{category.title}</h2>
        <p class="mb0 fs-body2 fc-black-300">{category.description}</p>
      </a>
    {/each}
  </div>

  <Notice variant="info" class="s-anchors s-anchors__inherit s-anchors__underlined mt32">
      <p class="mb0">Looking for the previous version of Stacks? <a href="https://v2.stackoverflow.design/product/develop/using-stacks/">Go to the classic v2 documentation</a>.</p>
  </Notice>
</div>
