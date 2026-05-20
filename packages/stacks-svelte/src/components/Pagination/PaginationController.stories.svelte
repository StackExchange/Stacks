<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import PaginationController from "./PaginationController.svelte";

    const { Story } = defineMeta({
        title: "Components/PaginationController",
        component: PaginationController,
    });

    const urlGenerator = (page: number) => `/page/${page}`;
</script>

<Story
    name="First page selected of many"
    args={{
        page: 1,
        totalPages: 12,
        urlGenerator,
    }}
/>

<Story
    name="Intermediate page selected of many"
    args={{
        page: 6,
        totalPages: 12,
        urlGenerator,
    }}
/>

<Story
    name="Last page selected of many"
    args={{
        page: 12,
        totalPages: 12,
        urlGenerator,
    }}
/>

<Story
    name="Intermediate page selected of few"
    args={{
        page: 2,
        totalPages: 5,
        urlGenerator,
    }}
/>

<Story
    name="Only one page"
    args={{
        page: 1,
        totalPages: 1,
        urlGenerator,
    }}
/>
