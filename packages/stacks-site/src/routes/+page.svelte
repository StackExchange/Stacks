<script lang="ts">
  let { data } = $props();

  import { Icon } from '@stackoverflow/stacks-svelte';

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
    body {
      background: url(/images/heros/home.svg) no-repeat;
      background-position: calc(100% + 100px) 0%;
      background-size: 55% auto;
      display: flex;
      flex-direction: column;
      padding-bottom: 30px;
    }
  </style>
</svelte:head>

<div class="p32">
  <p>
    <span class="s-badge s-badge__new">v{__APP_VERSION__}</span>
  </p>

  <h1 class="mt24 mb12">Stacks</h1>

  <p class="fs-body3 w50 mb32">
    The Stack Overflow Design System – resources for product designers, developers, marketers and everyone who works with Stack Overflow.
  </p>

  <div class="d-grid grid__12 g16">
    {#each data.structure?.navigation as category, index}
      <a
        class={`grid--col4 md:grid--col6 sm:grid--col12 d-flex fd-column p24 bg-black fc-white hmn2`}
        href={category.slug}
      >
        <Icon src={icons[category.title]} />
        <h2 class="mt-auto fs-headline1 mb12">{category.title}</h2>
        <p class="mb0 fs-body2 fc-black-300">{category.description}</p>
      </a>
    {/each}
  </div>
</div>
