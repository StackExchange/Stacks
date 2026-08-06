<script lang="ts">
  import { resolve } from '$app/paths';

  let { data }: { data: App.PageData } = $props();

  const pageTitle = $derived(data.active.title ? `${data.active.title} - Stack Overflow Design System` : 'Stack Overflow Design System');
  const pageDescription = $derived(data?.metadata?.description || `Documentation for ${data.active.title} in the Stack Overflow Design System`);
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
</svelte:head>

<div class="p32 wmx12 hmn-screen">
  <h1 class="title mb24">{data?.active?.title}</h1>
  <p class="fs-body3 mb24">{data?.active?.description}</p>

  {#each data?.active?.items as subsection (subsection.slug)}
    {#if subsection.externalUrl}
      <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
      <a class="ff-stack-sans-headline s-link d-flex bb bc-black-200 fs-title ai-center py16" href={subsection.externalUrl}>
        <img width="255" height="134" class="w20 h-auto mr16 bg-black-150" src={subsection.image} alt="" />
        {subsection?.title}
      </a>
    {:else}
      <a class="ff-stack-sans-headline s-link d-flex bb bc-black-200 fs-title ai-center py16" href={resolve(`/${data?.active?.slug}/${subsection.slug}/${subsection?.items ? subsection?.items[0]?.slug : ''}` as `/${string}`)}>
        <img width="255" height="134" class="w20 h-auto mr16 bg-black-150" src={subsection.image} alt="" />
        {subsection?.title}
      </a>
    {/if}
  {/each}
</div>

<style>
    .title {
        font-size: clamp(var(--fs-title), 10vw, var(--fs-display3));
    }
</style>
