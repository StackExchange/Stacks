<script lang="ts">
  import YAML from 'yaml';
  import colorsRaw from '$docs/public/brand/colors.yaml?raw';
  import ColorSwatch from './ColorSwatch.svelte';

  const colors = YAML.parse(colorsRaw).colors.filter(i => !i.hideHierarchy);
</script>

<div class="colors wmx100">
  {#each colors as color}
    <ColorSwatch
      {color}
      orientation="vertical"
      hover={false}
      extraClasses={`color--weight-${color.weight}`}
    />
  {/each}
</div>

<style>
  .colors {
    display: flex;
    gap: 12px;
  }
  :global(.color--vertical) {
    height: 300px;
  }
  :global(.color--weight-1) { flex-grow: 200; }
  :global(.color--weight-2) { flex-grow: 15; }
  :global(.color--weight-3) { flex-grow: 1; }
</style>
