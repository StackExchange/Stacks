<script lang="ts">
  const weights = [
    'Extralight',
    'Light',
    'Regular',
    'Medium',
    'Bold',
  ];

  let selected = $state(weights[2]);
  let notch = $state(true);
</script>

<div class="mt32 sample">
  <nav class="sample__select">
    {#each weights as weight}
      <label class:active={selected === weight}>
        <input
          type="radio"
          name="type-weight"
          value={weight}
          bind:group={selected}
        >
          {weight}
        </label>
    {/each}
  </nav>
  <div class={`sample__type weight--${selected} ${notch && 'style--notch'}`}>
    Overflow
  </div>
  <div class="bg-black fc-white as-start ai-center g8">
    <label class="s-label fc-white us-none px8" for="toggle-notch">Enable Notch</label>
    <input class="s-toggle-switch bar0" id="toggle-notch" type="checkbox" bind:checked={notch}>
  </div>
</div>

<style>
  .sample {
    aspect-ratio: 16 / 9;
    background: var(--brand-color-orange);
    display: flex;
    flex-direction: column;
  }
  .sample__select {
    display: flex;
    justify-items: center;
    margin: 30px auto -30px;
    gap: 5px;
  }
  .sample__select label {
    border: 1px solid;
    padding: 5px 10px;
    cursor: pointer;
    background: rgba(0,0,0,0.1);
  }
  .sample__select label:hover {
    background: rgba(255,255,255,0.1);
  }
  .sample__select label.active {
    background: #fff
  }
  .sample__select input {
    visibility: hidden;
    position: absolute;
  }
  .sample__type {
    margin: auto;
    font-size: 150px;
    transition: font-weight 0.3s ease;
    font-family: "Stack Sans Headline";
  }
  .weight--Extralight { font-weight: 200; }
  .weight--Light { font-weight: 300; }
  .weight--Regular { font-weight: 400; }
  .weight--Medium { font-weight: 600; }
  .weight--Bold { font-weight: 700; }
  .style--notch { font-feature-settings: "ss01" 1; }
</style>
