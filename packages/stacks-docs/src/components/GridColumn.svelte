<script lang="ts">
  let { children, padding = true, extraClasses = "bg-black-200", ...rest } = $props();
</script>

<div class={`fl-grow1 ps-relative column ${extraClasses}`} {...rest} class:p24={padding}>
  <div class="column__inner h100">
    {@render children()}
  </div>
</div>
