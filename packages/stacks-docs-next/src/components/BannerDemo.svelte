<script lang="ts">
    import { Notice } from '@stackoverflow/stacks-svelte';

    type Variant = '' | 'info' | 'success' | 'warning' | 'danger' | 'featured' | 'activity';

    const variants: { value: Variant; label: string }[] = [
        { value: '', label: 'Base' },
        { value: 'info',     label: 'Info' },
        { value: 'success',  label: 'Success' },
        { value: 'warning',  label: 'Warning' },
        { value: 'danger',   label: 'Danger' },
        { value: 'featured', label: 'Featured' },
        { value: 'activity', label: 'Activity' },
    ];

    let selectedVariant = $state<Variant>('');
    let important = $state(false);
    let pinned = $state(false);
    let visible = $state(false);

    // ps-relative keeps the banner inline in the page; omit it when pinned
    // so position:fixed applies and the banner shows at the top of the viewport
    const extraClass = $derived(
        ['s-banner is-pinned', !pinned && 'ps-relative'].filter(Boolean).join(' ')
    );
</script>

{#if visible}
    <Notice
        variant={selectedVariant}
        {important}
        class={extraClass}
        role="alert"
        dismissible
        onDismiss={() => visible = false}
    >
        <strong>Stacks is currently frozen in read-only mode.</strong> Contact the team to restore access.
    </Notice>
{/if}

<div class="ba bc-black-225 bar-sm p16 bg-black-100 d-flex ai-center g16 fw-wrap">
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
