<script lang="ts">
    import Icon from "../Icon/Icon.svelte";

    interface Props {
        /**
         * recognition text (e.g., "Recognized by")
         */
        recognition?: string;

        /**
         * Link for the recognition text (e.g., link to the organization)
         */
        recognitionHref?: string;

        /**
         * Text for the recognition link
         */
        recognitionLinkText?: string;

        /**
         * Icon source for the recognition section
         */
        recognitionIcon?: string;
    }

    const {
        recognition,
        recognitionHref,
        recognitionLinkText,
        recognitionIcon,
    }: Props = $props();
</script>

{#if recognition}
    <div class="s-user-card--row s-user-card--recognition">
        {#if recognitionIcon}
            <Icon src={recognitionIcon} />
            {recognition}
            {#if recognitionHref}
                <a href={recognitionHref}>{recognitionLinkText}</a>
            {/if}
        {/if}
    </div>
{/if}
