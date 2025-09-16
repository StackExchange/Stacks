<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Skeleton from "./Skeleton.svelte";

    const { Story } = defineMeta({
        title: "Components/Skeleton",
        component: Skeleton,
    });
</script>

<Story name="Base" />
<Story name="AI" args={{ variant: "ai" }} />
