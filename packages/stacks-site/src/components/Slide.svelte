<script lang="ts">
  import { getContext } from 'svelte';
  let { extraClasses, children } = $props();

  const gallery = getContext('gallery');

  let id = gallery.register();

  const isActive = $derived(gallery.index === id);
</script>

{#if isActive}
  <div class="slide">
    {@render children()}
  </div>
{/if}
