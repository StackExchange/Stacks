<script>
  import Grid from '$components/Grid.svelte';
  import GridColumn from '$components/GridColumn.svelte';
</script>

<Grid>
  <GridColumn>
    <div class="mt96 mx32 ps-relative">
      <div class="ta-center fs-fine mb8">1920px</div>
      <div class="bg-white ps-relative" style="aspect-ratio: 16 / 9;">
        <div class="w100 h12" style="background:rgba(0,0,0,0.2)"></div>
        <div class="w100 h12 ps-absolute b0" style="background:rgba(0,0,0,0.2)"></div>
        <div class="w12 h100 ps-absolute r0 t0" style="background:rgba(0,0,0,0.2)"></div>
        <div class="w12 h100 ps-absolute l0 t0" style="background:rgba(0,0,0,0.2)"></div>
      </div>
      <div class="ps-absolute l100 t50 fs-fine ml8">1080px</div>

      <div class="fs-fine mt12">
        1920 + 1080 = 3000<br/>
        2% of 3000 = 60px Margin
      </div>
    </div>
  </GridColumn>
  <GridColumn>
    <div class=" mx32 ps-relative">
      <div class="ta-center fs-fine mb8">1080px</div>
      <div class="bg-white ps-relative" style="aspect-ratio: 4 / 5;">
        <div class="w100 h12" style="background:rgba(0,0,0,0.2)"></div>
        <div class="w100 h12 ps-absolute b0" style="background:rgba(0,0,0,0.2)"></div>
        <div class="w12 h100 ps-absolute r0 t0" style="background:rgba(0,0,0,0.2)"></div>
        <div class="w12 h100 ps-absolute l0 t0" style="background:rgba(0,0,0,0.2)"></div>
      </div>
      <div class="ps-absolute l100 t50 fs-fine ml8">1350px</div>

      <div class="fs-fine mt12">
        1080 + 1350 = 2430<br/>
        2% of 2430 =48.6px Margin
      </div>
    </div>
  </GridColumn>
</Grid>

Not to scale