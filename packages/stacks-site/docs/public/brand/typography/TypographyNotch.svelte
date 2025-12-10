<script>
  import Grid from '$components/Grid.svelte';
  import GridColumn from '$components/GridColumn.svelte';
</script>

<Grid>
  <GridColumn>
    <div class="my12 ta-center fs-display2 ws-nowrap ff-stack-sans-headline-notch fw-medium">Headline</div>
    <div class="my12 ta-center fs-display1 ff-stack-sans-headline-notch fw-medium">Headline</div>
    <div class="my12 ta-center fs-headline2 ff-stack-sans-headline-notch fw-medium">Headline</div>
    <div class="mb24" style="border-bottom:1px dashed">20pt</div>
    <div class="my12 ta-center">Text Normal</div>
    <div class="my12 ta-center fs-caption">Text Normal</div>
  </GridColumn>
  <GridColumn extraClasses="bg-brand-beige d-flex">
    <svg height="377" viewBox="0 0 377 377" width="377" class="d-block w100 h-auto">
      <path d="m87 22h290v328h-290z" fill="#201c1d"/>
      <path d="m99.6602 35.1046h12.8207v12.6955h-12.8207z" fill="#ff5e00"/>
      <path d="m112.481 35.1045h42.0262v12.6958h-42.0262z" fill="#eee"/>
      
      <text fill="#201c1d" class="ff-stack-sans" font-size="8" letter-spacing="0em"><tspan x="115.494" y="44.0522">About Us</tspan></text>
      
      <circle cx="106.071" cy="41.4522" fill="#6e1527" r="1.8409"/>
      
      <g fill="#eee">
        <text class="ff-stack-sans-headline-notch" font-weight="300" font-size="40" letter-spacing="0em" xml:space="preserve"><tspan x="99.6602" y="173.638">The brain </tspan><tspan x="99.6602" y="209.638">power behind </tspan><tspan x="99.6602" y="245.638">progress.</tspan></text>
        
        <text class="ff-stack-sans" font-size="8" letter-spacing=".02em" xml:space="preserve"><tspan x="99.6602" y="296.434">Stack Overflow is a place for technical people and </tspan><tspan x="99.6602" y="306.434">forward-thinking businesses to share knowledge, </tspan><tspan x="99.6602" y="316.434">learn and get better. Everything is built on verified </tspan><tspan x="99.6602" y="326.434">knowledge from really experienced people, who </tspan><tspan x="99.6602" y="336.434">really love programming.</tspan></text>
        
        <text class="ff-stack-sans" font-size="13" letter-spacing="0em"><tspan x="13.1152" y="45.55">Set A</tspan></text>
        
        <text class="ff-stack-sans" font-size="13" letter-spacing="0em"><tspan x="13.1152" y="297.55">Set A</tspan></text>
        
        <text class="ff-stack-sans" font-size="13" letter-spacing="0em"><tspan x="13" y="153.55">Set B</tspan></text>
      </g>

      <path d="m57 149h19.6006" stroke="#eee"/>
      <path d="m57 41h19.6006" stroke="#eee"/>
      <path d="m57 293h19.6006" stroke="#eee"/>
    </svg>
  </GridColumn>
</Grid>