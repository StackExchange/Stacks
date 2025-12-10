<script lang="ts">
  import Contents from '$src/components/Contents.svelte';

  let { data } = $props();

  const lastUpdated = $derived(new Date(data?.metadata?.updated).toLocaleDateString());
  const toc = $derived(data?.metadata?.toc || []);
</script>

{#if data?.active?.image}
  <img class="w100 h-auto" width="1030" height="540" alt="" src={data.active.image} />
{/if}

<div class="d-flex md:fd-column mx-auto p32">
  <div class="doc flex--item9 wmn1 s-prose fs-body2">
    {#if data?.metadata?.updated}
      <p>
        <span class="badge">
          Last updated: {lastUpdated}
        </span>
      </p>
    {/if}

    <h1 class="fs-display2 ff-stack-sans-headline-notch">
      {data.active.title}
    </h1>

    {#if data.source === 'md'}
      <data.Content />
    {/if}
  </div>

  <div class="flex--item3 md:order-first ml32 md:ml0">
    <Contents {toc} />
  </div>
</div>
