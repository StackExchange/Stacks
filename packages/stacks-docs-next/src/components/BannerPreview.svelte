<script lang="ts">
    import { Icon } from '@stackoverflow/stacks-svelte';
    import { IconAlert, IconCross } from '@stackoverflow/stacks-icons/icons';

    type Variant = 'info' | 'success' | 'warning' | 'danger' | 'featured' | 'activity';

    interface Props {
        variant?: Variant;
        important?: boolean;
        class?: string;
    }

    let { variant, important = false, class: extraClass = '' }: Props = $props();

    const bannerClass = $derived(
        ['s-banner is-pinned ps-relative', variant && `s-banner__${variant}`, important && 's-banner__important', extraClass]
            .filter(Boolean).join(' ')
    );
</script>

<aside class={bannerClass} role="presentation" aria-hidden="false" style="z-index: 1;">
    <span class="s-banner--icon"><Icon src={IconAlert} /></span>
    <span>
        <strong>Stacks is currently frozen in read-only mode.</strong> Contact the team to restore access.
    </span>
    <div class="s-banner--actions">
        <button type="button" class="s-link s-banner--dismiss"><Icon src={IconCross} /></button>
    </div>
</aside>
