<script lang="ts">
  import Gallery from '$components/Gallery.svelte';

  import { Icon } from '@stackoverflow/stacks-svelte';
	import { IconLogo } from '@stackoverflow/stacks-icons'

  const sizes = [
    'Square',
    'Vertical',
    'Horizontal',
  ]

  let index = $state(0)

  function onChange(i) {
    index = i
  }
</script>

<Gallery controls={sizes} {onChange}>
  <div class="wrap d:fc-white">
    <div class={`lockup lockup--${sizes[index]}`}>
      <div class="logo logo--tl"><Icon src={IconLogo} /></div>
      <div class="logo logo--tr"><Icon src={IconLogo} /></div>
      <div class="logo logo--bl"><Icon src={IconLogo} /></div>
      <div class="logo logo--br"><Icon src={IconLogo} /></div>

      <div class="lockup__guide"></div>
      <div class="lockup__guide lockup__guide--vert"></div>
      <div class="lockup__guide lockup__guide--grid"></div>
      <div class="lockup__guide lockup__guide--grid2"></div>
    </div>
  </div>
</Gallery>

<style>
  .wrap {
    background: var(--brand-color-gray-200);
    aspect-ratio: 16 / 9;
    display: flex;
  }
  .lockup {
    transition: width 0.3s ease-out;
    display: flex;
    background: var(--brand-color-white);
    width: 100%;
    height: 364px;
    margin: auto;
    position: relative;
  }
  .lockup.lockup--Square {
    width: 364px;
  }
  .lockup.lockup--Horizontal {
    width: 667px;
  }
  .lockup.lockup--Vertical {
    width: 268px;
  }

  .logo {
    position: absolute;
    display: inline-block;
    line-height: 0;
    width: calc(50% - 15px);
  }
  .logo--tl { top: 15px; left: 15px }
  .logo--tr { top: 15px; right: 15px; text-align: right }
  .logo--bl { bottom: 15px; left: 15px }
  .logo--br { bottom: 15px; right: 15px; text-align: right }

  :global(.lockup.lockup--Square .logo svg) {
    width: 80%;
    height: auto;
  }
  :global(.lockup.lockup--Horizontal .logo svg) {
    width: 60%;
    height: auto;
  }
  :global(.lockup.lockup--Vertical .logo svg) {
    width: 50%;
    height: auto;
  }

  .lockup__guide {
    border: 1px dashed var(--brand-color-orange);
    position: absolute;
    top: 15px; right: 0; bottom: 15px; left: 0
  }
  .lockup__guide.lockup__guide--vert {
    top: 0; right: 15px; bottom: 0; left: 15px
  }

  .lockup__guide.lockup__guide--grid {
    top: 0; right: 0; bottom: 0; left: 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    height: 50%;
  }
  .lockup__guide.lockup__guide--grid2 {
    top: 0; right: 0; bottom: 0; left: 0;
    border-left: 0;
    border-top: 0;
    border-bottom: 0;
    width: 50%;
  }
</style>

