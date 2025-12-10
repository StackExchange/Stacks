<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    color: {
      name: string;
      hex: string;
      cssVar?: string;
      invertLabel?: boolean;
      weight?: number;
    };
    orientation?: 'horizontal' | 'vertical';
    showHex?: boolean;
    disabled?: boolean;
    hover?: boolean;
    extraClasses?: string;
    onclick?: () => void;
    children?: Snippet;
  }

  const {
    color,
    orientation = 'horizontal',
    showHex = false,
    disabled = false,
    hover = true,
    extraClasses = '',
    onclick,
    children
  }: Props = $props();

  const textColor = color.invertLabel ? '#fff' : 'inherit';
  const element = onclick ? 'button' : 'div';
  const classes = `color color--${orientation} ${disabled ? 'color--disabled' : ''} ${!hover ? 'color--no-hover' : ''} ${extraClasses}`.trim();
</script>

<svelte:element
  this={element}
  {onclick}
  class={classes}
  style={`background: ${color.hex}; color: ${textColor}`}
>
  {#if children}
    {@render children()}
  {:else}
    <span class="color__name">{color.name}</span>
    {#if showHex}
      <span class="color__value">{color.hex}</span>
    {/if}
  {/if}
</svelte:element>

<style>
  .color {
    position: relative;
    top: 0;
    left: 0;
    transition: top 0.2s, left 0.2s;
    border: 1px solid rgba(0,0,0,0.2);
    font-weight: 400;
    line-height: 19px;
    font-family: "Stack Sans Text";
    text-align: left;
  }

  .color:hover:not(.color--disabled):not(.color--no-hover) {
    top: -3px;
    left: -3px;
  }

  .color--horizontal {
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height: auto;
  }

  .color--horizontal .color__name,
  .color--horizontal .color__value {
    vertical-align: top;
    padding: 10px;
  }

  .color--vertical {
    display: flex;
    writing-mode: sideways-lr;
    position: relative;
    transition: top 0.1s ease-out;
  }

  .color--vertical .color__name {
    vertical-align: top;
    margin-left: auto;
    padding: 0 3px 10px 0;
  }

  .color--vertical:hover:not(.color--disabled):not(.color--no-hover) {
    top: 10px;
    left: 0;
  }

  .color__name {
    font-weight: 300;
  }

  .color--disabled {
    opacity: 0.2;
    cursor: not-allowed !important;
  }

  .color--disabled:hover {
    top: 0 !important;
    left: 0 !important;
  }

  button.color {
    cursor: pointer;
    background: none;
    text-align: left;
    width: 100%;
  }
</style>
