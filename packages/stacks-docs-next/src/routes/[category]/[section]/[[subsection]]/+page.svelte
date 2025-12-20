<script lang="ts">
  import { IconServiceGitHub, IconServiceFigma, IconServiceSvelte } from '@stackoverflow/stacks-icons/icons';
  import { Icon, Button } from '@stackoverflow/stacks-svelte';

  import Contents from '$src/components/Contents.svelte';

  let { data } = $props();

  const lastUpdated = $derived(new Date(data?.metadata?.updated).toLocaleDateString());
  const toc = $derived(data?.metadata?.toc || []);

  const pageTitle = $derived(data.active.title ? `${data.active.title} - Stack Overflow Design System` : 'Stack Overflow Design System');
  const pageDescription = $derived(data?.metadata?.description || `Documentation for ${data.active.title} in the Stack Overflow Design System`);
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
</svelte:head>

{#if data?.active?.image}
  <img class="w100 h-auto" width="1030" height="540" alt="" src={data.active.image} />
{/if}

<div class="d-flex md:fd-column mx-auto pl32 md:pr32 sm:pl24 sm:pr24">
  <div class="doc flex--item9 wmn1 s-prose fs-body2 pt32">
    <div class="d-flex gs4 ai-start mb128">
      {#if data?.metadata?.updated}
        <div class="flex--item s-badge s-badge__new mr-auto">
          <strong>Last updated:</strong> {lastUpdated}
        </div>
      {/if}
      {#if data?.metadata?.figma}
        <Button size="sm" weight="clear" icon href={data?.metadata?.figma} class="flex--item mtn12">
          <Icon src={IconServiceFigma} class="native" />
          Figma
        </Button>
      {/if}
      {#if data?.metadata?.svelte}
        <Button size="sm" weight="clear" icon href={data?.metadata?.svelte} class="flex--item mtn12">
          <Icon src={IconServiceSvelte} class="native" />
          Svelte
        </Button>
      {/if}
    </div>  

    <h1 class="fs-display2 ff-stack-sans-headline-notch mb32">
      {data.active.title}
    </h1>

    {#if data?.metadata?.description}
      <p class="fc-dark fs-body3 mtn16 wmx5">
        {@html data.metadata.description}
      </p>
    {/if}

    {#if data.source === 'md'}
      <data.Content />
    {/if}

    {#if data.filename}
      <Button size="sm" variant="tonal" href={`https://github.com/StackExchange/Stacks/edit/develop/packages/stacks-docs${data.filename}`}>
        <Icon src={IconServiceGitHub} /> Edit on GitHub
      </Button>
    {/if}
  </div>

  <Contents {toc} />
</div>
