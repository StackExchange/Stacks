<script lang="ts">
    import Badge, { type UserType } from "../Badge/Badge.svelte";
    interface Props {
        /**
         * The type of user badge
         */
        type: UserType;
    }
    const { type }: Props = $props();
</script>

<li>
    <Badge text={type} type="user" userType={type} size="sm" />
</li>
