<script lang="ts">
    interface Props {
        /**
         * Job designation text
         */
        designation?: string;

        /**
         * Location text
         */
        location?: string;
    }

    const { designation, location }: Props = $props();
</script>

{#if designation || location}
    <ul class="s-user-card--group s-user-card--group__split">
        {#if designation}
            <li>{designation}</li>
        {/if}
        {#if location}
            <li>{location}</li>
        {/if}
    </ul>
{/if}
