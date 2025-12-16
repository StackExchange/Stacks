<script lang="ts">
  import { Navigation, NavigationItem } from '@stackoverflow/stacks-svelte';

  import Grid from '$components/Grid.svelte';
  import GridColumn from '$components/GridColumn.svelte';

  import YAML from 'yaml';
  import colorsRaw from '$docs/public/brand/color/colors.yaml?raw';

  const colorsByCss = Object.fromEntries(
    YAML.parse(colorsRaw).colors.map(color => [color.cssVar, color])
  );
  
  let selected = $state(0);

  const themes = [
    {
      "name": "Green Highlight",
      "background": "--brand-color-blue-light",
      "highlightBackground": "--brand-color-green",
      "textBackground": "--brand-color-off-white",
      "textColor": "--brand-color-black"
    },
    {
      "name": "Purple Highlight",
      "background": "--brand-color-blue-light",
      "highlightBackground": "--brand-color-purple",
      "textBackground": "--brand-color-off-white",
      "textColor": "--brand-color-black"
    },
    {
      "name": "Pink Highlight",
      "background": "--brand-color-blue-light",
      "highlightBackground": "--brand-color-pink",
      "textBackground": "--brand-color-off-white",
      "textColor": "--brand-color-black"
    },
    {
      "name": "Orange & Brown",
      "background": "--brand-color-off-white",
      "highlightBackground": "--brand-color-orange",
      "textBackground": "--brand-color-beige",
      "textColor": "--brand-color-black"
    },
    {
      "name": "Orange & Yellow",
      "background": "--brand-color-off-white",
      "highlightBackground": "--brand-color-orange",
      "textBackground": "--brand-color-yellow",
      "textColor": "--brand-color-black"
    },
    {
      "name": "Yellow & Pink",
      "background": "--brand-color-off-white",
      "highlightBackground": "--brand-color-yellow",
      "textBackground": "--brand-color-pink",
      "textColor": "--brand-color-black"
    }
  ]
</script>


<Navigation class="mbn24" label="Theme" overflow="scroll">
  {#each themes as theme, index}
    <NavigationItem 
      onclick={() => selected = index}
      selected={selected === index}
      text={`${colorsByCss[theme.highlightBackground].name}`}
    >
      {#snippet trailing()}
        <span class="s-activity-indicator s-activity-indicator__sm ba ml4 mrn8" style={`background: var(${theme.textBackground})`}></span>
        <span class="s-activity-indicator s-activity-indicator__sm ba" style={`background: var(${theme.highlightBackground})`}></span>
      {/snippet}
    </NavigationItem>
  {/each}
</Navigation>

<Grid>
  <GridColumn extraClasses="ta-center bg-black-200 py64">
    <svg class="d-inline-block wmx100 mx-auto" fill="none" height="207" viewBox="0 0 479 207" width="479">
      <g fill={`var(${themes[selected].textBackground})`}>
        <path d="m0 131.653h423.445v75.23h-423.445z" />
        <path d="m0 75.2305h478.352v75.2305h-478.352z" />
      </g>
      
      <text fill={`var(${themes[selected].textColor})`} font-family="Stack Sans Headline" class="ff-stack-sans-headline" font-size="53.626" letter-spacing="0em" xml:space="preserve">
        <tspan x="16.7695" y="130.769">For technologists.</tspan>
        <tspan x="16.7695" y="186.769">For businesses.</tspan>
      </text>
      
      <path d="m0 0h418.242v75.23h-418.242z" fill={`var(${themes[selected].highlightBackground})`} />
      
      <text fill={`var(${themes[selected].textColor})`} font-family="Stack Sans Headline" class="ff-stack-sans-headline" font-size="53.626" letter-spacing="0em">
        <tspan x="16.7695" y="55.5406">For developers.</tspan>
      </text>
    </svg>
  </GridColumn>
</Grid>