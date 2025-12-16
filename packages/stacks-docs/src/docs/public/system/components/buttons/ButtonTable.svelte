<script lang="ts">
  import { Button } from '@stackoverflow/stacks-svelte';
  import type { Variant, Weight } from '@stackoverflow/stacks-svelte';

  let { variant = "" } = $props();

  const titleCase = (str) => str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());

  const getVariantClass = (v) => v ? `s-btn__${v}` : null;
  const getWeightClass = (w) => w ? `s-btn__${w}` : null;

  // Base and danger support both weights, featured and tonal only support base
  const weights: Weight[] = (variant === "featured" || variant === "tonal") ? [""] : ["", "clear"];
</script>

<div class="overflow-x-auto">
  <table class="wmn5 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Type</th>
        <th scope="col" class="s-table--cell4">Class</th>
        <th scope="col" class="ta-center">Default State</th>
        <th scope="col" class="ta-center">Selected State</th>
        <th scope="col" class="ta-center">Disabled State</th>
      </tr>
    </thead>
    <tbody>
      {#each weights as weight}
        {@const variantClass = getVariantClass(variant)}
        {@const weightClass = getWeightClass(weight)}
        <tr>
          <th scope="row" class="va-middle">{titleCase(weight || "base")}</th>
          <td class="va-middle">
            <div class="d-flex g4 fw-wrap">
              <code class="stacks-code">.s-btn</code>
              {#if variantClass}
                <code class="stacks-code">.{variantClass}</code>
              {/if}
              {#if weightClass}
                <code class="stacks-code">.{weightClass}</code>
              {/if}
            </div>
          </td>
          <td class="va-middle ta-center px4">
            <Button class="ws-nowrap" {variant} {weight}>Ask question</Button>
          </td>
          <td class="va-middle ta-center px4">
            <Button class="ws-nowrap" {variant} {weight} selected aria-pressed="true">Ask question</Button>
          </td>
          <td class="va-middle ta-center px4">
            <Button class="ws-nowrap" {variant} {weight} disabled>Ask question</Button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
