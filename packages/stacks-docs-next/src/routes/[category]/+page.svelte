<script lang="ts">
  let { data } = $props();
</script>

<div class="p32 hmn-screen">
  <h1 class="mb24">{data?.active?.title}</h1>
  <p class="fs-body3 mb24">{data?.active?.description}</p>

  {#each data?.active?.items as subsection}
    <a class="ff-stack-sans-headline d-flex bb bc-black-200 fs-title ai-center py16" href={subsection.externalUrl || `/${data?.active?.slug}/${subsection.slug}/`}>
      <img width="255" height="134" class="w20 h-auto mr16 bg-black-150" src={subsection.image} alt="Thumbnail" />
      {subsection?.title}
    </a>
  {/each}
</div>
