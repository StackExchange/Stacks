<script lang="ts">
  import { IconServiceGitHub, IconServiceFigma, IconServiceSvelte, IconCheckFillCircle, IconLink, IconCodeBox } from '@stackoverflow/stacks-icons/icons';
  import { Icon, Button, Link } from '@stackoverflow/stacks-svelte';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';

  let { data } = $props();
  let copied = $state(false);

  const lastUpdated = $derived(new Date(data?.metadata?.updated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }));

  const pageTitle = $derived(data.active.title ? `${data.active.title} - Stack Overflow Design System` : 'Stack Overflow Design System');
  const pageDescription = $derived(data?.metadata?.description || `Documentation for ${data.active.title} in the Stack Overflow Design System`);

  async function copyPageUrl() {
    await navigator.clipboard.writeText(page.url.href);
    copied = true;
    setTimeout(() => { copied = false; }, 2000);
  }
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  {#if data.source === 'legacy'}
    <script src="/legacy/docs.js"></script>
  {/if}
</svelte:head>


<article class="w100 pl32 md:pr32 sm:pl24 sm:pr24">
  <div class="doc wmn0 wmx9 fs-body2 pt24">
    <div class="d-flex g4 ai-center {data?.active?.image ? 'mb128' : 'mb24'}">
      <nav class="d-flex ai-center g6 fs-body2 mr-auto" aria-label="breadcrumb">
        {#each data.breadcrumb as crumb, index (crumb.label)}
          {#if index !== 0}<span class="fc-black-300">/</span>{/if}
          <a href={resolve(crumb.path)} class="s-link fw-bold">{crumb.label}</a>
        {/each}
        <Button title="Copy link to this page" link icon class="d-inline-flex fc-black-400 h:fc-black-600 ml4" onclick={copyPageUrl}>
          {#if copied}
            <Icon src={IconCheckFillCircle} class="fc-green-400 w16 h16" />
          {:else}
            <Icon src={IconLink} class="w16 h16" />
          {/if}
        </Button>
      </nav>

      <div class="d-flex ai-center g16 fs-caption">
        {#if data?.metadata?.js}
          <Link href="#javascript">
            <Icon src={IconCodeBox} class="fc-green-400" />
            <span class="sm:d-none">JavaScript</span>
          </Link>
        {/if}

        {#if data?.metadata?.figma}
          <Link title="Open in Figma" href={data?.metadata?.figma}>
            <Icon src={IconServiceFigma} class="native" />
            <span class="sm:d-none">Figma</span>
          </Link>
        {/if}

        {#if data?.metadata?.svelte}
          <Link title="Svelte component docs" href={data?.metadata?.svelte}>
            <Icon src={IconServiceSvelte} class="native" />
            <span class="sm:d-none">Svelte</span>
          </Link>
        {/if}

        {#if data.filename}
          <Link title="Edit on GitHub" href={`https://github.com/StackExchange/Stacks/edit/main/packages/stacks-docs-next${data.filename}`}>
            <Icon src={IconServiceGitHub} />
            <span class="sm:d-none">Edit</span>
          </Link>
        {/if}
      </div>
    </div>  

    <header>
      {#if data?.metadata?.updated && page.params.category !== 'system'}
        <time datetime={data?.metadata?.updated} class="d-block mb24 fs-body1 fc-black-400">
          Last updated: <strong>{lastUpdated}</strong>
        </time>
      {/if}

      <h1 class="fs-display2 ff-stack-sans-headline-notch fw-bold">
        {data.active.title}
      </h1>

      {#if data?.metadata?.description}
        <p class="docs-copy fc-black-500 fs-title mtn16">
          <!-- eslint-disable-next-line svelte/no-at-html-tags -->
          {@html data.metadata.description}
        </p>
      {/if}
    </header>

    {#if data.source === 'md'}
      <data.Content />
    {:else if data.source === 'legacy'}
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html data.html}
    {/if}
  </div>
</article>
