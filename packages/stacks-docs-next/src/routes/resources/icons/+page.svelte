<script>
  import manifest from './manifest.json';
  import { copyToClipboard } from '$src/lib/copyToClipboard';

  import { IconServiceFigma, IconCheckFillCircle, IconStackCards } from '@stackoverflow/stacks-icons/icons';
  import { Icon, Button, Navigation, NavigationItem, TextInput } from '@stackoverflow/stacks-svelte';

  let search = $state('');
  let selected = $state(null);
  let selectedProps = $state({});
  let copied = $state('');
  let activeCodeTab = $state('Svelte');

  const icons = Object.entries(manifest.icons).map(([name, data]) => ({
    name,
    figmaName: data.figmaName,
    variants: data.variants,
    isSpot: false,
  }));

  const spots = Object.entries(manifest.spots).map(([name, data]) => ({
    name,
    figmaName: data.figmaName,
    variants: data.variants,
    isSpot: true,
  }));

  function getDefaultVariant(entry) {
    return (
      entry.variants.find(v => v.variantProps?.Size === 'Default' && v.variantProps?.Style === 'Default') ??
      entry.variants.find(v => v.variantProps?.Size === 'Default') ??
      entry.variants[0]
    );
  }

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

  function sortValues(values) {
    return [...values].sort((a, b) => {
      if (a === 'Default') return -1;
      if (b === 'Default') return 1;
      return a.localeCompare(b, undefined, { numeric: true });
    });
  }

  // Variants: unique keys with >1 possible value, all values sorted
  let variants = $derived.by(() => {
    if (!selected) return [];
    const allKeys = new Set();

    for (const v of selected.variants) {
      if (v.variantProps) Object.keys(v.variantProps).forEach(k => allKeys.add(k));
    }

    return [...allKeys].flatMap(key => {
      const allValues = [...new Set(
        selected.variants.map(v => v.variantProps?.[key]).filter(Boolean)
      )];
      return allValues.length > 1 ? [{ key, values: sortValues(allValues) }] : [];
    });
  });

  // Check if a value is compatible with current selectedProps for all OTHER dimensions
  function isCompatible(key, val) {
    return selected.variants.some(v => {
      if (v.variantProps?.[key] !== val) return false;
      return Object.entries(selectedProps).every(([k, selectedVal]) =>
        k === key || v.variantProps?.[k] === selectedVal
      );
    });
  }

  // The currently active variant, matching selectedProps as closely as possible
  let selectedVariant = $derived.by(() => {
    if (!selected) return null;

    let best = selected.variants[0];
    let bestScore = -1;

    for (const v of selected.variants) {
      if (!v.variantProps) return v;
      const score = Object.entries(selectedProps).filter(([k, val]) => v.variantProps?.[k] === val).length;
      if (score > bestScore) { bestScore = score; best = v; }
    }

    return best;
  });

  function selectEntry(entry) {
    selected = entry;
    const def = getDefaultVariant(entry);
    selectedProps = { ...(def.variantProps ?? {}) };
    copied = '';
  }

  function setDimension(key, value) {
    const newProps = { ...selectedProps, [key]: value };

    // For each other dimension, check if its current value is still compatible
    // with the newly set key/value. If not, reset it to 'Default' or first available.
    const compatibleVariants = selected.variants.filter(v => v.variantProps?.[key] === value);
    for (const k of Object.keys(newProps)) {
      if (k === key) continue;
      const stillValid = compatibleVariants.some(v => v.variantProps?.[k] === newProps[k]);
      if (!stillValid) {
        const available = sortValues([...new Set(
          compatibleVariants.map(v => v.variantProps?.[k]).filter(Boolean)
        )]);
        newProps[k] = available[0] ?? newProps[k];
      }
    }

    selectedProps = newProps;
  }

  function copySuccess(e) {
    copied = e.detail?.dataset?.copyId ?? '';
    setTimeout(() => { copied = ''; }, 2000);
  }

  // Export name for usage tabs
  let exportName = $derived(selectedVariant ? selectedVariant.key : '');
</script>

<svelte:window on:copysuccess={copySuccess} />

<div class="d-flex">
  <div class="fl-grow1 p24 wmn0">
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
              class="flex--item icon-cell c-pointer h:bg-black-100 s-btn s-btn__unset p12 d-flex fd-column h100 {selected?.name === entry.name ? 'bg-blue-100' : ''}"
              onclick={() => selectEntry(entry)}
            >
              <div class="d-flex ai-center jc-center my-auto h100">
                {@html def.svg.replace('class="', `class="w100 h-auto wmx100 ${label === 'Spots' ? 'native' : ''} `)}
              </div>
              <div class="fs-caption mt-auto pt8">
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

  <aside class="ws3 ps-sticky t0 overflow-y-scroll fl-shrink0 bl bc-black-200 h-screen">
    {#if selected && selectedVariant}
      <div class="d-flex fd-column bb bc-black-200 hs3">
        <div class="d-flex jc-space-between ai-center p6">
          <button type="button" title="Copy SVG" data-copy-id="svg" class="s-btn s-btn__sm s-btn__clear s-btn__icon" use:copyToClipboard={selectedVariant.svg}>
            {#if copied === 'svg'}
              <Icon src={IconCheckFillCircle} class="fc-green-400" />
            {:else}
              <Icon src={IconStackCards} />
            {/if}
          </button>
          <h3 class="fs-title fw-bold mb4 ta-center lh-sm mt8">
            {selected.name}
          </h3>
          <Button title="Open in Figma" size="sm" weight="clear" icon href={selectedVariant.figmaUrl} class="flex--item">
            <Icon src={IconServiceFigma} class="native" />
          </Button>
        </div>

        <div class="h100 d-flex bg-white d:bg-black">
          {@html selectedVariant.svg.replace('class="', 'class="native m-auto ')}
        </div>
      </div>

      <div class="d-flex jc-space-between ai-center bg-black-100 bb bc-black-200 py6 px16">
        {exportName}

        <button type="button" title="Copy name" data-copy-id="name" class="s-btn s-btn__sm s-btn__clear s-btn__icon" use:copyToClipboard={exportName}>
          {#if copied === 'name'}
            <Icon src={IconCheckFillCircle} class="fc-green-400" />
          {:else}
            <Icon src={IconStackCards} />
          {/if}
        </button>
      </div>

      {#each variants as variant}
        <div class="py16 px16 bb bc-black-200">
          <p class="section-label mb8 fl1">{variant.key}</p>
          <div class="d-flex g4 fw-wrap">
            {#each variant.values as val}
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
        <p class="section-label mb8 pt16 px16">Usage</p>

        <Navigation label="Base">
          {#each ["Svelte", ".NET"] as label (label)}
            <NavigationItem
              text={label}
              selected={activeCodeTab === label}
              onclick={() => activeCodeTab = label}
            />
          {/each}
        </Navigation>

        {#if activeCodeTab === 'Svelte'}
          <p class="m16 fs-caption">If you are working in a Svelte project, you can use the <code>Icon</code> component to render an icon. This component will render the icon as an <code>svg</code> element with the appropriate classes and attributes (<a href="https://svelte.stackoverflow.design/?path=/docs/components-icon--docs" class="s-link">docs</a>).</p>

          <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
            import &#123; Icon &#125; from '@stackoverflow/stacks-svelte';
          </code>

          <p class="m16 fs-caption">Import this icon</p>

          <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
            import &#123; Icon{exportName} &#125; from "@stackoverflow/stacks-icons/{selected?.isSpot ? 'spots' : 'icons'}";
          </code>

          <p class="m16 fs-caption">Render the icon</p>

          <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
            &lt;Icon src=&#123;Icon{exportName}&#125; /&gt;
          </code>
        {:else}
          <p class="m16 fs-caption">If you're working in a dotnet project, we have a helper that can be called with <code>@Svg.</code> and the icon name. By default, any icon will inherit the text color of the parent element.</p>

          <p class="m16 fs-caption">Add the helper</p>

          <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
            @inject IModuleSvg Svg
          </code>

          <p class="m16 fs-caption">Render the icon</p>

          <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
            @Svg.{selectedVariant.key}
          </code>

          <p class="m16 fs-caption">Add CSS classes as a string:</p>

          <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
            @Svg.{selectedVariant.key}.With("native fc-black-300")
          </code>

          <p class="m16 fs-caption">You can also add a <code>title</code> prop, which also removes <code>aria-hidden</code>.</p>

          <code class="d-block bg-black-100 ow-anywhere py12 px16 fs-caption">
            @Svg.{selectedVariant.key}.With(cssClass: "fc-danger", title: "foo")
          </code>
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
    {/if}
  </aside>
</div>

<style>
  .icons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
    gap: 4px;
  }

  .icon-cell {
    gap: 6px;
    outline: 0;
  }

  .section-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--theme-secondary-font-color, #6a737c);
  }
</style>
