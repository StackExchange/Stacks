<script lang="ts">
  import { resolve } from '$app/paths';

  let { data }: { data: App.PageData } = $props();
</script>

<div class="p32 wmx12 hmn-screen">
  <h1 class="mb24">{data?.active?.title}</h1>
  <p class="fs-body3 mb24">{data?.active?.description}</p>

  {#each data?.active?.items as subsection (subsection.slug)}
    {#if subsection.externalUrl}
      <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
      <a class="ff-stack-sans-headline s-link d-flex bb bc-black-200 fs-title ai-center py16" href={subsection.externalUrl}>
        <img width="255" height="134" class="w20 h-auto mr16 bg-black-150" src={subsection.image} alt="Thumbnail" />
        {subsection?.title}
      </a>
    {:else}
      <a class="ff-stack-sans-headline s-link d-flex bb bc-black-200 fs-title ai-center py16" href={resolve(`/${data?.active?.slug}/${subsection.slug}/${subsection?.items ? subsection?.items[0]?.slug : ''}` as `/${string}`)}>
        <img width="255" height="134" class="w20 h-auto mr16 bg-black-150" src={subsection.image} alt="Thumbnail" />
        {subsection?.title}
      </a>
    {/if}
  {/each}
</div>
