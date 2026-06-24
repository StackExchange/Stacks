<script>
  import manifest from '@stackoverflow/stacks-icons/manifest';
  import { copyToClipboard } from '$src/lib/copyToClipboard';

  import { IconServiceFigma, IconServiceGitHub, IconCheckFillCircle, IconStackCards, IconCross } from '@stackoverflow/stacks-icons/icons';
  import { SpotSearch } from '@stackoverflow/stacks-icons/spots';
  import { Icon, Button, Link, Navigation, NavigationItem, TextInput, TextArea } from '@stackoverflow/stacks-svelte';
  import { page } from '$app/state';
  import { replaceState } from '$app/navigation';
  import { browser } from '$app/environment';
  import { resolve } from '$app/paths';

  const icons = manifest.icons;
  const spots = manifest.spots;

  // variants[0] is pre-sorted to be the default by the build script
  function getDefaultVariant(entry) {
    return entry.variants[0];
  }

  // Resolve the variant props for an entry, optionally targeting a specific
  // variant by key — used when restoring state from a deep link.
  function propsFor(entry, variantKey) {
    const target = (variantKey && entry.variants.find(v => v.key === variantKey)) || getDefaultVariant(entry);
    const props = { ...(target.variantProps ?? {}) };

    for (const dim of entry.dimensions) {
      if (!(dim.key in props)) props[dim.key] = dim.values[0];
    }

    return props;
  }

  // Find the icon/spot referenced by the current URL's query params.
  // ?i=<name> is an icon, ?s=<name> is a spot — the param name disambiguates
  // the 5 names that exist as both (Award, Chat, Document, Lock, Search).
  function entryFromUrl(url) {
    const iconName = url.searchParams.get('i');
    if (iconName) return icons.find(e => e.name === iconName) ?? null;

    const spotName = url.searchParams.get('s');
    if (spotName) return spots.find(e => e.name === spotName) ?? null;

    return null;
  }

  const initialEntry = entryFromUrl(page.url);

  let search = $state('');
  let selected = $state(initialEntry);
  let selectedProps = $state(initialEntry ? propsFor(initialEntry, page.url.searchParams.get('v')) : {});
  let copied = $state('');
  let activeCodeTab = $state('Svelte');

  let filteredIcons = $derived(
    search.trim() === ''
      ? icons
      : icons.filter(e => e.name.toLowerCase().includes(search.trim().toLowerCase()))
  );

  let filteredSpots = $derived(
    search.trim() === ''
      ? spots
      : spots.filter(e => e.name.toLowerCase().includes(search.trim().toLowerCase()))
  );

  // dimensions are pre-computed and sorted by the build script
  let variants = $derived(selected?.dimensions ?? []);

  // Check if a value is compatible with current selectedProps for all OTHER dimensions
  function isCompatible(key, val) {
    return selected.variants.some(v => {
      if (v.variantProps?.[key] !== val) return false;

      return Object.entries(selectedProps).every(([k, selectedVal]) =>
        k === key || v.variantProps?.[k] === selectedVal
      );
    });
  }

  // setDimension keeps selectedProps valid, so an exact match always exists
  let selectedVariant = $derived(
    selected?.variants.find(v =>
      !v.variantProps || Object.entries(selectedProps).every(([k, val]) => v.variantProps[k] === val)
    ) ?? selected?.variants[0] ?? null
  );

  function selectEntry(entry) {
    selected = entry;
    selectedProps = propsFor(entry, null);
    copied = '';
    updateUrl();
  }

  function closeInspector() {
    selected = null;
    updateUrl();
  }

  // Reflect the current selection (icon/spot + variant) in the URL so the
  // inspector state can be deep-linked and restored on load.
  function updateUrl() {
    if (!browser) return;

    const params = [];
    if (selected) {
      params.push(`${selected.isSpot ? 's' : 'i'}=${encodeURIComponent(selected.name)}`);
      // Omit the variant param when it just echoes the icon/spot name.
      if (selectedVariant?.key && selectedVariant.key !== selected.name) {
        params.push(`v=${encodeURIComponent(selectedVariant.key)}`);
      }
    }

    const query = params.length ? `?${params.join('&')}` : '';
    // Query-only update to the current path — there is no route to resolve().
    // eslint-disable-next-line svelte/no-navigation-without-resolve
    replaceState(`${page.url.pathname}${query}`, page.state);
  }

  // On initial load, bring a deep-linked icon/spot into view within the grid.
  $effect(() => {
    if (browser && initialEntry) {
      document
        .querySelector(
          `[data-entry-name="${CSS.escape(initialEntry.name)}"][data-entry-spot="${initialEntry.isSpot}"]`
        )
        ?.scrollIntoView({ block: 'center' });
    }
  });

  function setDimension(key, value) {
    const newProps = { ...selectedProps, [key]: value };
    const compatible = selected.variants.filter(v => v.variantProps?.[key] === value);

    for (const k of Object.keys(newProps)) {
      if (k === key) continue;

      if (!compatible.some(v => v.variantProps?.[k] === newProps[k])) {
        const dim = selected.dimensions.find(d => d.key === k)?.values ?? [];

        newProps[k] = dim.find(v => compatible.some(cv => cv.variantProps?.[k] === v)) ?? newProps[k];
      }
    }

    selectedProps = newProps;
    updateUrl();
  }

  function copySuccess(e) {
    copied = e.detail?.dataset?.copyId ?? '';
    setTimeout(() => { copied = ''; }, 2000);
  }

  // Export name for usage tabs
  let exportName = $derived(selectedVariant ? selectedVariant.key : '');
</script>

<svelte:head>
  <title>Icons & Spot illustrations - Stack Overflow Design System</title>
</svelte:head>

<svelte:window on:copysuccess={copySuccess} />

<div class="d-flex">
    <div class="fl-grow1 p24 wmn0">
        <div class="d-flex g4 ai-center mb12">
            <nav class="d-flex ai-center g6 fs-body2 mr-auto" aria-label="breadcrumb">
                <a href={resolve('/resources')} class="s-link fw-bold">Resources</a>
                <span class="fc-black-300">/</span>
                <a href={resolve('/resources/icons')} class="s-link fw-bold">Icons & Spots</a>
            </nav>

            <div class="d-flex ai-center g16 fs-caption">
                <Link title="Open in Figma" href="https://www.figma.com/design/Z5yoO4WH58QDHvmxwMWhr0">
                    <Icon src={IconServiceFigma} class="native" />
                    <span class="sm:d-none">Figma</span>
                </Link>

                <Link title="View on GitHub" href="https://github.com/StackExchange/Stacks-Icons">
                    <Icon src={IconServiceGitHub} />
                    <span class="sm:d-none">GitHub</span>
                </Link>
            </div>
        </div>

        <TextInput
            id="icon-search"
            label="Search icons and spots"
            hideLabel
            type="search"
            placeholder="Search icons and spots…"
            bind:value={search}
        />

        {#snippet section(label, entries)}
            {#if entries.length > 0}
                <h2 class="fs-title fw-bold mt32 mb12">
                    {label} <span class="s-badge ml4">{entries.length}</span>
                </h2>

                <div class="icons-grid">
                    {#each entries as entry (entry.name)}
                    {@const def = getDefaultVariant(entry)}
                    <button
                        data-entry-name={entry.name}
                        data-entry-spot={entry.isSpot}
                        class="c-pointer h:bg-black-100 s-btn s-btn__unset p12 d-flex fd-column h100 {selected === entry ? 'bg-blue-100' : ''}"
                        onclick={() => selectEntry(entry)}
                    >
                        <div class="d-flex ai-center jc-center my-auto h100">
                        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                        {@html def.svg.replace('class="', `class="w100 h-auto wmx100 ${label === 'Spots' ? 'native' : ''} `)}
                        </div>
                        <div class="fs-fine mt-auto pt8">
                        {entry.name}
                        </div>
                    </button>
                    {/each}
                </div>
            {/if}
        {/snippet}

        {@render section('Icons', filteredIcons)}
        {@render section('Spots', filteredSpots)}
    </div>

    <aside class="ws3 sm:w75 ps-sticky md:ps-fixed z-nav bg-white t24 sm:t64 r0 b0 overflow-y-scroll fl-shrink0 bl bc-black-200 h-screen {!(selected && selectedVariant) ? 'md:d-none d-flex' : ''} ">
        {#if selected && selectedVariant}
            <div class="d-flex fd-column bb bc-black-200 hs3">
                <div class="d-flex jc-space-between px12">
                    <button onclick={closeInspector} type="button" title="Close inspector" class="d-none md:d-block px4 s-btn s-btn__sm s-btn__clear s-btn__icon">
                        <Icon src={IconCross} />
                    </button>

                    <h3 class="fs-title fw-bold lh-sm mb0 p16 ta-center fl1 md:ta-left">{selected.name}</h3>
                </div>

                <div class="h100 d-flex bg-white d:bg-black">
                    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                    {@html selectedVariant.svg.replace('class="', 'class="native m-auto ')}
                </div>
            </div>

            <div class="d-flex jc-space-between ai-center bg-black-100 bb bc-black-200 py6 px16">
                {exportName}

                <button type="button" title="Copy name" data-copy-id="name" class="px4 ml-auto s-btn s-btn__sm s-btn__clear s-btn__icon" use:copyToClipboard={exportName}>
                    {#if copied === 'name'}
                    <Icon src={IconCheckFillCircle} class="fc-green-400" />
                    {:else}
                    <Icon src={IconStackCards} />
                    {/if}
                </button>

                <Button title="Open in Figma" size="sm" weight="clear" icon href={selectedVariant.figmaUrl} class="px4">
                    <Icon src={IconServiceFigma} class="native" />
                </Button>
            </div>

            {#each variants as variant (variant.key)}
                <div class="py16 px16 bb bc-black-200">
                    <p class="fs-fine tt-uppercase fw-semibold fc-black-400 mb8 fl1">{variant.key}</p>
                    <div class="d-flex g4 fw-wrap">
                        {#each variant.values as val (val)}
                            {@const isActive = selectedProps[variant.key] === val}
                            {@const compatible = isCompatible(variant.key, val)}

                            <button
                            type="button"
                            disabled={!compatible}
                            class="s-btn s-btn__unset py2 px4 {isActive ? 'bg-blue-200 fc-blue-600' : compatible && 'c-pointer h:bg-black-200'} {!compatible ? 'c-not-allowed fc-black-300 bg-black-100' : ''}"
                            onclick={() => setDimension(variant.key, val)}
                            >{val}</button>
                        {/each}
                    </div>
                </div>
            {/each}

            <div class="mb16">
                <p class="fs-fine tt-uppercase fw-semibold fc-black-400 mb8 pt16 px16">Usage</p>

                <Navigation label="Base">
                    {#each ["Svelte", ".NET", "SVG"] as label (label)}
                    <NavigationItem
                        text={label}
                        selected={activeCodeTab === label}
                        onclick={() => activeCodeTab = label}
                    />
                    {/each}
                </Navigation>

                {#if activeCodeTab === 'Svelte'}
                    <p class="m16 fs-caption">If you are working in a Svelte project, you can use the <code>Icon</code> component to render the asset as an <code>svg</code> element with the appropriate classes and attributes (<a href="https://svelte.stackoverflow.design/?path=/docs/components-icon--docs" class="s-link">docs</a>).</p>

                    <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
                    import &#123; Icon &#125; from '@stackoverflow/stacks-svelte';
                    </code>

                    <p class="m16 fs-caption">Import this asset</p>

                    <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
                    import &#123; {selected?.isSpot ? 'Spot' : 'Icon'}{exportName} &#125; from "@stackoverflow/stacks-icons/{selected?.isSpot ? 'spots' : 'icons'}";
                    </code>

                    <p class="m16 fs-caption">Render this asset</p>

                    <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
                    &lt;Icon src=&#123;{selected?.isSpot ? 'Spot' : 'Icon'}{exportName}&#125; /&gt;
                    </code>
                {/if}
                {#if activeCodeTab === '.NET'}
                    <p class="m16 fs-caption">If you’re working in a .NET project, we have a helper that can be called with <code>@Svg.</code> and the icon name. By default, any icon will inherit the text color of the parent element.</p>

                    <p class="m16 fs-caption">Add the helper</p>

                    <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
                    @inject IModuleSvg Svg
                    </code>

                    <p class="m16 fs-caption">Render the asset</p>

                    <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
                    @Svg.{selectedVariant.key}
                    </code>

                    <p class="m16 fs-caption">Add CSS classes as a string:</p>

                    <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
                    @Svg.{selected?.isSpot ? 'Spot' : ''}{selectedVariant.key}.With("native fc-black-300")
                    </code>

                    <p class="m16 fs-caption">You can also add a <code>title</code> prop, which also removes <code>aria-hidden</code>.</p>

                    <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
                    @Svg.{selected?.isSpot ? 'Spot' : ''}{selectedVariant.key}.With(cssClass: "fc-danger", title: "foo")
                    </code>
                {/if}
                {#if activeCodeTab === 'SVG'}
                    <button type="button" title="Copy SVG" data-copy-id="svg" class="m12 mb0 s-btn s-btn__sm s-btn__clear s-btn__icon" use:copyToClipboard={selectedVariant.svg}>
                    {#if copied === 'svg'}
                        <Icon src={IconCheckFillCircle} class="fc-green-400" /> Copied SVG!
                    {:else}
                        <Icon src={IconStackCards} /> Copy SVG
                    {/if}
                    </button>

                    <TextArea size="sm" class="m12 hs2 ff-mono" id="asset-svg-code" label="SVG" hideLabel readonly value={selectedVariant.svg} />
                {/if}
            </div>

            <div class="fs-caption px16 pb16 fc-black-400">
                <b>Asset last updated:</b><br/>
                <time datetime={selectedVariant.updatedAt}>
                    {new Date(selectedVariant.updatedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                    })}
                </time>
            </div>
        {:else}
            <div class="s-empty-state wmx4 p48 my-auto">
                <Icon src={SpotSearch} class="native" />
                <h4 class="s-empty-state--title">Inspect an asset</h4>
                <p>Pick an icon or spot from the grid to preview its variants, copy the code, and open it in Figma.</p>
            </div>
        {/if}
    </aside>
</div>

<style>
  .icons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
    gap: 4px;
  }
</style>
