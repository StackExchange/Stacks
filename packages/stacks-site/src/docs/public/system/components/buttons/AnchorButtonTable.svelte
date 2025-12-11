<script>
  import { Button } from '@stackoverflow/stacks-svelte';

  let { data } = $props();

  const getButtonProps = (btn) => {
    const props = { href: '#', class: 'ws-nowrap' };

    if (btn.variant === 's-btn__danger') props.variant = 'danger';
    if (btn.variant === 's-btn__featured') props.variant = 'featured';
    if (btn.variant === 's-btn__tonal') props.variant = 'tonal';
    if (btn.modifier === 's-btn__clear') props.weight = 'clear';

    return props;
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
      {#each data as btn}
        {@const buttonProps = getButtonProps(btn)}
        <tr>
          <th scope="row" class="va-middle">{btn.title}</th>
          <td class="va-middle">
            <div class="d-flex g4 fw-wrap">
              <code class="stacks-code">.s-btn</code>
              {#if btn.variant}
                <code class="stacks-code">.{btn.variant}</code>
              {/if}
              {#if btn.modifier}
                <code class="stacks-code">.{btn.modifier}</code>
              {/if}
            </div>
          </td>
          <td class="va-middle ta-center px4">
            <Button {...buttonProps}>Ask question</Button>
          </td>
          <td class="va-middle ta-center px4">
            <Button {...buttonProps} selected aria-pressed="true">Ask question</Button>
          </td>
          <td class="va-middle ta-center px4">
            <Button {...buttonProps} disabled>Ask question</Button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
