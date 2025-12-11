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
      "background": "--brand-color-black",
      "icon": "--brand-color-orange",
    },
    {
      "background": "--brand-color-beige",
      "icon": "--brand-color-yellow-dark",
    },
    {
      "background": "--brand-color-pink",
      "icon": "--brand-color-pink-dark",
    },
    {
      "background": "--brand-color-green",
      "icon": "--brand-color-green-dark",
    },
    {
      "background": "--brand-color-blue",
      "icon": "--brand-color-blue-light",
    },
    {
      "background": "--brand-color-purple",
      "icon": "--brand-color-purple-dark",
    },
    {
      "background": "--brand-color-blue-light",
      "icon": "--brand-color-orange",
    },
    {
      "background": "--brand-color-orange",
      "icon": "--brand-color-orange-medium",
    }
  ]
</script>

<Grid>
  <GridColumn>
    <div class="d-flex gs16 gsx flex__fl-equal mb16">
      <div class="flex--item"></div>
      <div class="flex--item mln16">
        Icon color
      </div>
      <div class="flex--item mln16">
        Square color
      </div>
    </div>

    {#each themes as theme}
      <div class="d-flex gs16 gsx flex__fl-equal mt16">
        <div class="flex--item">
          <svg class="d-block w100 h-auto" viewBox="0 0 328 94">
            <rect width="94" height="94" fill={colorsByCss[theme.background].hex} />
            <circle cx="47" cy="47" r="12" fill={colorsByCss[theme.icon].hex} />
            <rect width="234" height="94" x="94" fill="#EEEEEE"/>
            <text fill="#201C1D" xml:space="preserve" style="white-space: pre" font-family="Stack Sans Headline" class="ff-stack-sans-headline" font-size="72" letter-spacing="0em"><tspan x="114" y="72.4">Stack</tspan></text>
          </svg>
        </div>
        <ColorSwatch
          color={colorsByCss[theme.background]}
          extraClasses="flex--item"
          hover={false}
        />
        <ColorSwatch
          color={colorsByCss[theme.icon]}
          extraClasses="flex--item"
          hover={false}
        />
      </div>
    {/each}
  </GridColumn>
</Grid>
