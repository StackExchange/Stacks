<script lang="ts">
    const variants = [
        { value: '',                   label: 'Base' },
        { value: 's-banner__info',     label: 'Info' },
        { value: 's-banner__success',  label: 'Success' },
        { value: 's-banner__warning',  label: 'Warning' },
        { value: 's-banner__danger',   label: 'Danger' },
        { value: 's-banner__featured', label: 'Featured' },
        { value: 's-banner__activity', label: 'Activity' },
    ] as const;

    let selectedVariant = $state('s-banner__info');
    let important = $state(false);
    let pinned = $state(false);
    let visible = $state(false);

    const bannerClass = $derived(
        ['s-banner', selectedVariant, important && 's-banner__important', pinned && 'is-pinned']
            .filter(Boolean).join(' ')
    );
</script>

{#if visible}
    <aside class={bannerClass} role="alert" aria-hidden="false">
        <div class="d-flex g8 ai-center jc-space-between">
            <p class="m0"><strong>Example banner</strong> — this is a system banner message.</p>
            <div class="s-banner--actions">
                <button
                    type="button"
                    class="s-banner--dismiss s-btn s-btn__muted"
                    onclick={() => visible = false}
                >
                    Dismiss
                </button>
            </div>
        </div>
    </aside>
{/if}

<div class="ba bc-black-225 bar-sm p16 d-flex ai-center g16 fw-wrap">
    <label class="d-flex ai-center g8 fs-body2">
        Style
        <select class="s-select" bind:value={selectedVariant}>
            {#each variants as v}
                <option value={v.value}>{v.label}</option>
            {/each}
        </select>
    </label>

    <label class="d-flex ai-center g6 fs-body2 c-pointer">
        <input type="checkbox" class="s-checkbox" bind:checked={important} />
        Important?
    </label>

    <label class="d-flex ai-center g6 fs-body2 c-pointer">
        <input type="checkbox" class="s-checkbox" bind:checked={pinned} />
        Pinned?
    </label>

    <button
        type="button"
        class="s-btn s-btn__filled ml-auto"
        onclick={() => visible = true}
    >
        Show example
    </button>
</div>
