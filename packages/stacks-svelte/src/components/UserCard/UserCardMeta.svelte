<script lang="ts">
    interface Props {
        /**
         * Role text
         */
        role?: string;

        /**
         * Location text
         */
        location?: string;
    }

    const { role, location }: Props = $props();
</script>

{#if role || location}
    <ul class="s-user-card--group s-user-card--group__split">
        {#if role}
            <li>{role}</li>
        {/if}
        {#if location}
            <li>{location}</li>
        {/if}
    </ul>
{/if}

