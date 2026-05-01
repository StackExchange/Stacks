<script lang="ts">
  import YAML from 'yaml';
  import colorsRaw from '$docs/public/brand/color/colors.yaml?raw';
  import ColorSwatch from './ColorSwatch.svelte';
  
  const colors = YAML.parse(colorsRaw).colors;

  const { business = false } = $props()
</script>

<div class="colors">
  {#each colors as color (color.cssVar)}
    <ColorSwatch
      {color}
      showHex={true}
      disabled={business && !color.business}
      extraClasses={`color--weight-${color.weight} ba-color`}
      hover={false}
    />
  {/each}
</div>

<style>
  .colors {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 10px;
    grid-auto-rows: 120px;
  }
  :global(.color--weight-1) { grid-column: span 2; grid-row: span 2; }
  :global(.color--weight-2) { grid-column: span 2; grid-row: span 1; }
  :global(.color--weight-3) { grid-column: span 1; grid-row: span 1; }
</style>
