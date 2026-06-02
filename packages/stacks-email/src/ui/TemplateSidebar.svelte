<script lang="ts">
    import { Navigation, NavigationItem } from "@stackoverflow/stacks-svelte";

    import type { EmailTemplateCatalogItem } from "$lib/api/templates";

    type TemplateCategory = EmailTemplateCatalogItem["category"];

    let {
        templates,
        activeSlug = "",
    }: {
        templates: EmailTemplateCatalogItem[];
        activeSlug?: string;
    } = $props();

    const categoryOrder: TemplateCategory[] = [
        "Transactional",
        "Marketing",
        "Onboarding",
    ];

    const templateGroups = $derived.by(() =>
        categoryOrder
            .map((category) => ({
                category,
                items: templates.filter((template) => template.category === category),
            }))
            .filter((group) => group.items.length > 0),
    );
</script>

<aside class="ws2 fl-shrink0 sm:w100 ba bc-black-200 bg-white">
    <header class="p16 bb bc-black-200">
        <h1 class="fs-title fw-bold m0">Inbox Overflow</h1>
        <p class="m0 mt4 fs-caption fc-black-500">
            A collection of Stack Overflow authored email templates. <a class="s-link" href="https://stackoverflow.design/email">See the documentation</a> for more details.
        </p>
    </header>

    <div class="p12 overflow-y-auto sm:h-auto">
        {#each templateGroups as group (group.category)}
            <p class="m0 mt12 mb4 px8 fs-caption tt-uppercase fc-black-400 fw-bold">
                {group.category}
            </p>
            <Navigation
                label={`${group.category} email templates`}
                orientation="vertical"
            >
                {#each group.items as template (template.slug)}
                    <NavigationItem
                        text={template.name}
                        href={`/emails/${template.slug}`}
                        selected={activeSlug === template.slug}
                    />
                {/each}
            </Navigation>
        {/each}
    </div>
</aside>
