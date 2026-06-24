<script>
  import Grid from '$components/Grid.svelte';
  import GridColumn from '$components/GridColumn.svelte';
</script>

<Grid>
  <GridColumn>
    <div class="ps-absolute t0 b0" style="border-left:1px dashed"></div>
    <div class="d-flex fd-column h100">
      <div class="my-auto py64 pl12">
        <div style="margin-bottom: 1em;" class="fs-display2 ff-stack-sans-headline-notch fw-regular lh-xs">
          Let’s get<br/> building.
        </div>
        <div class="lh-xs fs-body3">
          We’re excited to build<br/> knowledge with you.
        </div>
      </div>
    </div>
  </GridColumn>
  <GridColumn>  
    <div class="ps-absolute t0 b0 l50 z-base" style="border-left:1px dashed"></div>
    <div class="d-flex fd-column h100 ta-center ps-relative z-active">
      <div class="my-auto py12 bg-black-200">
        <div style="margin-bottom: 1em;" class="fs-display2 ff-stack-sans-headline-notch fw-regular lh-xs">
          Let’s get<br/> building.
        </div>
        <div class="lh-xs fs-body3">
          We’re excited to build<br/> knowledge with you.
        </div>
      </div>
    </div>
  </GridColumn>
</Grid>