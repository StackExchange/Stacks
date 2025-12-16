<script lang="ts">
  import YAML from 'yaml';
  import colorsRaw from '$docs/public/brand/color/colors.yaml?raw';

  const colors = YAML.parse(colorsRaw).colors.filter(i => !i.hideHierarchy);
</script>

<div class="colors wmx100">
  {#each colors as color}
    <div class={`color color--weight-${color.weight}`}  style={`background: ${color.hex}; color: ${color.invertLabel ? '#fff' : '#000'}`}>
      <div class="color__name">{color.name}</div>
    </div>
  {/each}
</div>

<style>
  .colors {
    display: flex;
  }
  .color {
    height: 300px;
    display: flex;
    writing-mode: sideways-lr;
    position: relative;
    transition: top 0.1s ease-out;
  }
  .color__name {
    vertical-align: top;
    margin-left: auto;
    padding: 0 3px 10px 0;
  }
  .color--weight-1 { flex-grow: 200; }
  .color--weight-2 { flex-grow: 15; }
  .color--weight-3 { flex-grow: 1; }
</style>
