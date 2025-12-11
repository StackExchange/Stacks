<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  import Grid from '$components/Grid.svelte';
  import GridColumn from '$components/GridColumn.svelte';

  import { Navigation, NavigationItem, Icon } from '@stackoverflow/stacks-svelte';
  import { SpotLoading } from '@stackoverflow/stacks-icons'

  // Available font weights
  const fontWeights = [
    { label: 'Extralight', file: 'StackSansHeadline-Extralight.otf', weight: 200 },
    { label: 'Light', file: 'StackSansHeadline-Light.otf', weight: 300 },
    { label: 'Regular', file: 'StackSansHeadline-Regular.otf', weight: 400 },
    { label: 'Medium', file: 'StackSansHeadline-Medium.otf', weight: 500 },
    { label: 'Bold', file: 'StackSansHeadline-Bold.otf', weight: 700 }
  ];

  let selectedWeight = $state(fontWeights[2]);

  let font = $state(null);
  let loading = $state(true);
  let switching = $state(false);
  let selectedGlyph = $state(null);
  let glyphIndex = $state(-1);
  let showPoints = $state(false);
  let showMetrics = $state(true);

  // All available characters from font
  let availableChars = $state([]);

  // SVG viewBox and metrics
  let unitsPerEm = $state(1000);

  function buildCharacterList() {
    if (!font) return;

    const chars = [];
    const seen = new Set();

    // Iterate through all glyphs in the font
    for (let i = 0; i < font.numGlyphs; i++) {
      const glyph = font.glyphs.get(i);

      // Get all unicode values for this glyph
      const unicodes = glyph.unicodes || (glyph.unicode ? [glyph.unicode] : []);

      for (const code of unicodes) {
        if (seen.has(code)) continue;
        seen.add(code);
        chars.push({ char: String.fromCharCode(code), code });
      }
    }

    // Sort by unicode value
    availableChars = chars.sort((a, b) => a.code - b.code);
  }

  async function loadFont(fontPath, isInitialLoad = false) {
    if (isInitialLoad) {
      loading = true;
    } else {
      switching = true;
    }

    try {
      // Load opentype.js from CDN
      if (!window.opentype) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/opentype.js/1.3.4/opentype.min.js';
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      // Load the font file
      font = await window.opentype.load(fontPath);

      // Set unitsPerEm
      unitsPerEm = font.unitsPerEm;

      // Build character list from the loaded font
      buildCharacterList();

      loading = false;
      switching = false;

      // Select 'A' as default, or first available character
      const defaultChar = availableChars.find(c => c.char === 'A');
      if (defaultChar) {
        selectGlyphByChar('A');
      } else if (availableChars.length > 0) {
        selectGlyphByChar(availableChars[0].char);
      }
    } catch (err) {
      console.error('Font loading error:', err);
      loading = false;
      switching = false;
    }
  }

  function handleWeightChange(weight) {
    if (selectedWeight.file === weight.file) return;

    selectedWeight = weight;

    const fontPath = `/fonts/${weight.file}`;

    loadFont(fontPath, false);
  }

  function selectGlyphByChar(char) {
    if (!font) return;

    const glyph = font.charToGlyph(char);
    
    if (!glyph) return;

    selectedGlyph = glyph;
    glyphIndex = glyph.index;
  }

  function formatUnicode(unicode) {
    const hex = unicode.toString(16).toUpperCase();
    return hex.length > 4 ? hex.padStart(6, '0') : hex.padStart(4, '0');
  }

  let glyphInfo = $derived(selectedGlyph ? {
    name: selectedGlyph.name,
    unicodes: selectedGlyph.unicodes || []
  } : null);

  // Reactive SVG calculations
  let glyphPath = $derived(selectedGlyph ? selectedGlyph.getPath(0, 0, unitsPerEm).toPathData() : '');

  // Typography metrics
  let metrics = $derived(font ? {
    baseline: 0,
    ascender: font.tables.hhea.ascender,
    descender: font.tables.hhea.descender,
    capHeight: font.tables.os2?.sCapHeight || 0,
    xHeight: font.tables.os2?.sxHeight || 0
  } : null);

  // Simple static viewBox - SVG native scaling handles the rest
  const viewBox = '0 -1100 1500 1500';

  // Calculate horizontal offset to center the glyph
  let glyphCenterOffset = $derived.by(() => {
    if (!selectedGlyph) return 0;
    return (1500 - selectedGlyph.advanceWidth) / 2;
  });

  onMount(async () => {
    const initialFontPath = `/fonts/${selectedWeight.file}`;
    loadFont(initialFontPath, true);
  });
</script>

<div>
  {#key selectedWeight.file}
    <Navigation class="ws-nowrap" label="Font weight" overflow="scroll">
      {#each fontWeights as weight (weight.file)}
        <NavigationItem
          text={weight.label}
          selected={selectedWeight.file === weight.file}
          onclick={() => handleWeightChange(weight)}
        />
      {/each}
    </Navigation>

    <Grid>
      <GridColumn extraClasses="bg-orange-400">
        {#if loading}
          <div class="ta-center p32">
            <div class="fs-headline2 fc-medium">Loading font...</div>
          </div>
        {:else if !font}
          <div class="ta-center p32">
            <div class="fs-headline2 fc-danger">Failed to load font</div>
            <div class="fs-body2 fc-medium mt8">Check the font path in FONT_CONFIG</div>
          </div>
        {:else}
        
        {#if switching}
          <Icon src={SpotLoading} class="ps-absolute t0 r0" />
        {/if}

        <div transition:fade={{ duration: 200 }} class="mb16">
          <div class="svg-container">
            <svg
              viewBox={viewBox}
              preserveAspectRatio="xMidYMid meet"
            >
              {#if selectedGlyph && metrics}
                {#if showMetrics}
                  <g class="metrics">
                    <!-- Baseline at y=0 -->
                    <line x1="0" y1="0" x2="100%" y2="0" stroke="var(--black)" stroke-width="2" stroke-dasharray="10 10" />
                    <text x="0" y="-10" font-size="40" fill="var(--black)">Baseline</text>

                    <!-- Ascender (negative Y = above baseline) -->
                    <line x1="0" y1={-metrics.ascender} x2="100%" y2={-metrics.ascender} stroke="var(--black)" stroke-width="2" stroke-dasharray="10 10" />
                    <text x="0" y={-metrics.ascender - 10} font-size="40" fill="var(--black)">Ascender</text>

                    <!-- Descender (descender is negative, so -descender is positive Y = below baseline) -->
                    <line x1="0" y1={-metrics.descender} x2="100%" y2={-metrics.descender} stroke="var(--black)" stroke-width="2" stroke-dasharray="10 10" />
                    <text x="0" y={-metrics.descender + 50} font-size="40" fill="var(--black)">Descender</text>

                    <!-- Cap Height -->
                    {#if metrics.capHeight}
                      <line x1="0" y1={-metrics.capHeight} x2="100%" y2={-metrics.capHeight} stroke="var(--black)" stroke-width="2" stroke-dasharray="10 10" />
                      <text x="0" y={-metrics.capHeight - 10} font-size="40" fill="var(--black)">Cap Height</text>
                    {/if}

                    <!-- x-Height -->
                    {#if metrics.xHeight}
                      <line x1="0" y1={-metrics.xHeight} x2="100%" y2={-metrics.xHeight} stroke="var(--black)" stroke-width="2" stroke-dasharray="10 10" />
                      <text x="0" y={-metrics.xHeight - 10} font-size="40" fill="var(--black)">x-Height</text>
                    {/if}
                  </g>
                {/if}

                <g transform="translate({glyphCenterOffset}, 0)">
                  <line x1="0" y1="0" x2="0" y2="50" stroke="var(--black-600)" stroke-width="4" />
                  <text x="0" y="80" font-size="40" fill="var(--black-600)" text-anchor="middle">0</text>

                  <line x1={selectedGlyph.advanceWidth} y1="0" x2={selectedGlyph.advanceWidth} y2="50" stroke="var(--black-600)" stroke-width="4" />
                  <text x={selectedGlyph.advanceWidth} y="80" font-size="40" fill="var(--black-600)" text-anchor="middle">{selectedGlyph.advanceWidth}</text>

                  <path
                    d={glyphPath}
                    fill="var(--black-700)"
                    stroke={showPoints ? 'var(--orange-400)' : 'none'}
                    stroke-width={showPoints ? '3' : '0'}
                  />
                </g>
              {/if}
            </svg>
          </div>
        </div>

        {#if glyphInfo}
          <div class="fw-bold">{glyphInfo.name} / {glyphInfo.unicodes.map(formatUnicode).join(', ')}</div>
        {/if}

        {/if}
      </GridColumn>

      <GridColumn extraClasses="bg-white" padding={false}>
        <div class="d-flex ff-row-wrap ai-start jc-start">
          {#each availableChars as { char, code }}
            <button
              class="char-cell h:bg-black-200"
              class:is-selected={selectedGlyph?.unicode === code}
              onclick={() => selectGlyphByChar(char)}
              style="font-family: 'Stack Sans Headline', sans-serif; font-weight: {selectedWeight.weight};"
            >
              {char}
            </button>
          {/each}
        </div>
      </GridColumn>
    </Grid>
  {/key}
</div>

<style>
  .char-cell {
    aspect-ratio: 1;
    outline: 0;
    border: 1px solid ;
    width: 25px;
    background: var(--black-100);
    margin: 0 -1px -1px 0;
    cursor: pointer;
    padding: 0;
  }
  .char-cell.is-selected {
    background: var(--orange-400);
  }
</style>
