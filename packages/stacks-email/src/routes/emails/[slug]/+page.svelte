<script lang="ts">
    import { goto } from "$app/navigation";
    import { resolve } from "$app/paths";
    import {
        Button,
        Navigation,
        NavigationItem,
        Notice,
        Select,
        SelectItem,
    } from "@stackoverflow/stacks-svelte";

    import type { CompileTarget } from "$lib/tokens";
    import TemplateSidebar from "../../../ui/TemplateSidebar.svelte";

    let { data }: { data: import("./$types").PageData } = $props();

    const targetOptions: { value: CompileTarget; label: string }[] = [
        { value: "preview", label: "Preview" },
        { value: "dotnet", label: ".NET / Razor" },
        { value: "braze", label: "Braze" },
    ];

    const tabOptions: { id: "preview" | "mjml" | "html"; label: string }[] = [
        { id: "preview", label: "Preview" },
        { id: "mjml", label: "MJML" },
        { id: "html", label: "HTML" },
    ];

    let activeTab = $state<"preview" | "mjml" | "html">("preview");
    let activeTarget = $state<CompileTarget>("preview");
    let copied = $state(false);
    let frameHeight = $state(360);
    let frame = $state<HTMLIFrameElement | null>(null);

    $effect(() => {
        activeTarget = data.target;
        copied = false;
    });

    const activeCompiled = $derived(data.compiledByTarget[activeTarget]);
    const previewHtml = $derived(data.compiledByTarget.preview.html);
    const activeCode = $derived(
        activeTab === "mjml" ? data.renderedMjml : activeCompiled.html,
    );
    const highlightedCode = $derived(
        activeTab === "mjml"
            ? data.highlightedMjml
            : activeCompiled.highlightedHtml,
    );

    const resizeFrame = () => {
        if (!frame?.contentDocument) {
            return;
        }

        const doc = frame.contentDocument;
        const bodyHeight = doc.body?.scrollHeight ?? 0;
        const htmlHeight = doc.documentElement?.scrollHeight ?? 0;
        frameHeight = Math.max(bodyHeight, htmlHeight, 220);
    };

    const syncFrame = () => {
        window.setTimeout(resizeFrame, 0);
        window.setTimeout(resizeFrame, 120);
    };

    const onTargetChange = (
        event: Event & { currentTarget: EventTarget & HTMLSelectElement },
    ) => {
        activeTarget = event.currentTarget.value as CompileTarget;
        const query = `?target=${encodeURIComponent(activeTarget)}`;
        // Query-only update after resolving the route path.
        /* eslint-disable svelte/no-navigation-without-resolve */
        void goto(
            `${resolve("/emails/[slug]", { slug: data.template.slug })}${query}`,
            {
                keepFocus: true,
                noScroll: true,
                replaceState: true,
            },
        );
        /* eslint-enable svelte/no-navigation-without-resolve */
    };

    const copyActiveCode = async () => {
        const text = activeTab === "preview" ? previewHtml : activeCode;
        await navigator.clipboard.writeText(text);
        copied = true;
        window.setTimeout(() => {
            copied = false;
        }, 1200);
    };

    $effect(() => {
        const frameSyncKey = `${activeTab}:${previewHtml.length}`;
        if (frameSyncKey) {
            syncFrame();
        }
    });
</script>

<svelte:window onresize={syncFrame} />

<main class="d-flex sm:fd-column h-screen">
    <TemplateSidebar templates={data.templates} activeSlug={data.template.slug} />

    <section class="fl-grow1 overflow-y-auto pt48">
        <div
            class="ps-fixed t0 r0 z-base bg-white bb bc-black-200 px16 py8 d-flex ai-center g8 fw-wrap"
            style="left:var(--su256)"
        >
            <Navigation class="mb0" label="Template tabs" size="sm">
                {#each tabOptions as tab (tab.id)}
                    <NavigationItem
                        text={tab.label}
                        selected={activeTab === tab.id}
                        onclick={() => (activeTab = tab.id)}
                    />
                {/each}
            </Navigation>

            <div class="d-flex ai-center fw-wrap g8 ml-auto">
                <Select
                    id={`target-${data.template.slug}`}
                    label="Target"
                    selected={activeTarget}
                    labelPlacement="left"
                    size="sm"
                    onchange={onTargetChange}
                >
                    {#each targetOptions as option (option.value)}
                        <SelectItem value={option.value} text={option.label} />
                    {/each}
                </Select>

                <Button size="xs" onclick={copyActiveCode}>
                    {copied ? "Copied" : "Copy"}
                </Button>
            </div>
        </div>

        <div class="w100 d-flex fd-column">
            {#if activeCompiled.errors.length > 0}
                <Notice variant="warning">
                    <strong>MJML reported {activeCompiled.errors.length} issue(s) for {activeTarget}.</strong>
                </Notice>
            {/if}

            <div class={activeTab === "preview" ? "d-block" : "d-flex md:fd-column"}>
                {#if activeTab !== "preview"}
                    <article
                        class="s-card p0 overflow-auto flex--item h100"
                        style="flex:0 0 33.333%;max-width:33.333%"
                    >
                        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                        {@html highlightedCode}
                    </article>
                {/if}

                <iframe
                    bind:this={frame}
                    title={`${data.template.name} preview`}
                    class={activeTab === "preview"
                        ? "w100 baw0"
                        : "baw0 flex--item"}
                    style:height={`${frameHeight}px`}
                    style:flex={activeTab === "preview" ? undefined : "1 1 66.667%"}
                    srcdoc={previewHtml}
                    onload={syncFrame}
                ></iframe>
            </div>
        </div>
    </section>
</main>
