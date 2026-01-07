<script lang="ts">
    interface Props {
        /**
         * bio text
         */
        bio?: string;
    }

    const { bio }: Props = $props();
</script>

<div class="s-user-card--bio">
    {bio}
</div>
