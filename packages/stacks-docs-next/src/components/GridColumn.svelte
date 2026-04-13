<script lang="ts">
  import { getContext } from 'svelte';

  let { children, padding = true, extraClasses = "bg-black-200", ...rest } = $props();

  getContext('columnCount').update((i: number) => i + 1)
</script>

<div class={`flex--item ps-relative column ${extraClasses}`} {...rest} class:p24={padding}>
  <div class="column__inner h100">
    {@render children()}
  </div>
</div>
