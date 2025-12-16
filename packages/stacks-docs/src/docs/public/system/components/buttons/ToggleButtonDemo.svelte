<script>
  import { Button } from '@stackoverflow/stacks-svelte';

  let button1Pressed = $state(false);
  let button2Pressed = $state(true);

  function toggleButton1() {
    button1Pressed = !button1Pressed;
  }

  function toggleButton2() {
    button2Pressed = !button2Pressed;
  }
</script>

<div class="d-flex g4 fw-wrap">
  <Button
    selected={button1Pressed}
    aria-pressed={button1Pressed}
    title="Click to toggle this button's state"
    onclick={toggleButton1}
  >
    Initially unselected toggle button
  </Button>
  <Button
    selected={button2Pressed}
    aria-pressed={button2Pressed}
    title="Click to toggle this button's state"
    onclick={toggleButton2}
  >
    Initially selected toggle button
  </Button>
</div>
