<script>
  import { Button } from '@stackoverflow/stacks-svelte';
  import type { Variant, Weight } from '@stackoverflow/stacks-svelte';

  let { variants, weights } = $props();

  const titleCase = (str) => str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());

  const getVariantClass = (v) => v ? `s-btn__${v}` : null;
  const getWeightClass = (w) => w ? `s-btn__${w}` : null;

  const getTitle = (variant, weight) => {
    const parts = [];
    if (variant) parts.push(titleCase(variant));
    else parts.push("Base");
    if (weight) parts.push(titleCase(weight));
    return parts.join(", ");
  };
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
      {#each variants as variant}
        {#each weights as weight}
          {#if !(weight === "clear" && (variant === "featured" || variant === "tonal"))}
            {@const variantClass = getVariantClass(variant)}
            {@const weightClass = getWeightClass(weight)}
            <tr>
              <th scope="row" class="va-middle">{getTitle(variant, weight)}</th>
              <td class="va-middle">
                <div class="d-flex g4 fw-wrap">
                  <code class="stacks-code">.s-btn</code>
                  {#if variantClass}
                    <code class="stacks-code">.{variantClass}</code>
                  {/if}
                  {#if weightClass}
                    <code class="stacks-code">.{weightClass}</code>
                  {/if}
                  <code class="stacks-code">.is-loading</code>
                </div>
              </td>
              <td class="va-middle ta-center px4">
                <Button class="ws-nowrap" {variant} {weight} loading>Ask question</Button>
              </td>
              <td class="va-middle ta-center px4">
                <Button class="ws-nowrap" {variant} {weight} loading selected aria-pressed="true">Ask question</Button>
              </td>
              <td class="va-middle ta-center px4">
                <Button class="ws-nowrap" {variant} {weight} loading disabled>Ask question</Button>
              </td>
            </tr>
          {/if}
        {/each}
      {/each}
    </tbody>
  </table>
</div>
