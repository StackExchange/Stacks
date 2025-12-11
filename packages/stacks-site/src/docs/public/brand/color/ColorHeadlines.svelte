<script lang="ts">
  import Grid from '$components/Grid.svelte';
  import GridColumn from '$components/GridColumn.svelte';

  import ColorSwatch from './ColorSwatch.svelte';

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

<Grid>
  <GridColumn>
    <svg class="d-inline-block wmx100" fill="none" height="207" viewBox="0 0 479 207" width="479">
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
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="d-flex gs12 ff-row-wrap h100 ">
      {#each themes as theme, index}
        <button
          onclick={() => selected = index}
          class={`flex--item6 d-flex fd-column ai-stretch c-pointer s-btn s-btn__unset p0 b0`}
        >
          <ColorSwatch
            color={colorsByCss[theme.highlightBackground]}
            extraClasses="flex--item mbn1"
            hover={false}
          />
           <ColorSwatch
            color={colorsByCss[theme.textBackground]}
            extraClasses="flex--item"
            hover={false}
          />
        </button>
      {/each}
    </div>
  </GridColumn>
</Grid>