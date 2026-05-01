<script lang="ts">
  let { children } = $props();
</script>

<div class="doc-grid mb16">
  {@render children()}
</div>

<style>
  .doc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
    gap: var(--su12);
  }
  @media (max-width: 48.75rem) {
    .doc-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
