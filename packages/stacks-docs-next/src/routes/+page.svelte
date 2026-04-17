<script lang="ts">
  let { data } = $props();

  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconArrowUpRightBox, IconServiceSvelte } from '@stackoverflow/stacks-icons/icons';
  import { resolve } from '$app/paths';

  import IconProduct from '$lib/assets/icons/product.svg?raw'
  import IconCopywriting from '$lib/assets/icons/copywriting.svg?raw'
  import IconBrand from '$lib/assets/icons/brand.svg?raw'
  import IconHandook from '$lib/assets/icons/handbook.svg?raw'
  import IconResources from '$lib/assets/icons/resources.svg?raw'
  import IconEmail from '$lib/assets/icons/email.svg?raw'

  const icons = {
    'Product': IconProduct,
    'Copywriting': IconCopywriting,
    'Brand': IconBrand,
    'Handbook': IconHandook,
    'Resources': IconResources,
    'Email': IconEmail,
  }
</script>

<svelte:head>
  <style>
    main {
      background-image: url(/images/heros/home.svg);
      background-repeat: no-repeat;
      background-position: calc(100% + 120px) 0%;
      background-size: 55% auto;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding-bottom: 30px;
    }
  </style>
</svelte:head>

<div class="page p32 sm:p24 wmx12 my-auto">
  <div class="d-flex g4 ai-center">
    <span class="s-badge fc-purple-500 bg-purple-100">v{__APP_VERSION__}</span>
    <a href="https://beta.svelte.stackoverflow.design/" class="s-badge">
      <Icon src={IconServiceSvelte} class="native" />
      v{__SVELTE_VERSION__}
    </a>
  </div>

  <h1 class="mt24 mb12">Stacks</h1>

  <p class="fs-body3 w50 sm:w100 sm:pr32 mb32 wmx5">
    The Stack Overflow Design System – resources for product designers, developers, marketers and everyone who works with Stack Overflow.
  </p>

  <div class="d-grid grid__12 g16">
    {#each data.structure?.navigation as category (category.slug)}
      <a
        class="td-none h:bg-black-600 grid--col4 md:grid--col6 sm:grid--col12 d-flex fd-column p24 bg-black fc-white d:bg-black-100 d:fc-black hmn2"
        href={resolve(`/${category.slug}`)}
      >
        <Icon src={icons[category.title]} />
        <h2 class="mt-auto fs-headline1 mb12">{category.title}</h2>
        <p class="mb0 fs-body2 fc-black-300">{category.description}</p>
      </a>
    {/each}

    <a
      class="td-none h:bg-white h:fc-black grid--col4 md:grid--col6 sm:grid--col12 d-flex fd-column p24 bg-yellow-100 fc-black d:fc-black hmn2"
      href="https://v2.stackoverflow.design/"
    >
      <Icon src={IconArrowUpRightBox} />
      <h2 class="mt-auto fs-headline1 lh-sm mb12">Looking for the previous version of Stacks?</h2>
      <p class="mb0 fs-body2 fc-black-400">If you are working on a classic experience you can visit the v2 documentation.</p>
    </a>
  </div>
</div>
