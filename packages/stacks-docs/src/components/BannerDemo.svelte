<script lang="ts">
    import { Icon, Select, SelectItem, Checkbox } from '@stackoverflow/stacks-svelte';
    import { IconAlert, IconCross } from '@stackoverflow/stacks-icons/icons';

    const variants = [
        { value: '',                   label: 'Base' },
        { value: 's-banner__info',     label: 'Info' },
        { value: 's-banner__success',  label: 'Success' },
        { value: 's-banner__warning',  label: 'Warning' },
        { value: 's-banner__danger',   label: 'Danger' },
        { value: 's-banner__featured', label: 'Featured' },
        { value: 's-banner__activity', label: 'Activity' },
    ] as const;

    let selectedVariant = $state('s-banner__warning');
    let important = $state(true);
    let pinned = $state(true);
    let visible = $state(false);

    const bannerClass = $derived(
        ['s-banner', selectedVariant, important && 's-banner__important', pinned && 'is-pinned']
            .filter(Boolean).join(' ')
    );
</script>

{#if visible}
    <aside class={bannerClass} role="alert" aria-hidden="false">
        <span class="s-banner--icon"><Icon src={IconAlert} /></span>
        <span><strong>Stacks is currently frozen in read-only mode.</strong> Contact the team to restore access.</span>
        <div class="s-banner--actions">
            <button type="button" class="s-link s-banner--dismiss" onclick={() => visible = false}>
                <Icon src={IconCross} />
            </button>
        </div>
    </aside>
{/if}

<div class="ba bc-black-225 bar-sm p16 bg-black-100 d-flex ai-center g16 fw-wrap">
    <Select id="banner-style" label="Style" bind:selected={selectedVariant} labelPlacement="left">
        {#each variants as v (v.value)}
            <SelectItem value={v.value} text={v.label} />
        {/each}
    </Select>

    <Checkbox id="banner-important" name="banner-important" label="Important?" bind:checked={important} />

    <Checkbox id="banner-pinned" name="banner-pinned" label="Pinned?" bind:checked={pinned} />

    <button
        type="button"
        class="s-btn s-btn__filled ml-auto"
        onclick={() => visible = true}
    >
        Show example
    </button>
</div>
