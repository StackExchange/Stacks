<script module lang="ts">
    type EmailRenderableKind = "component" | "template";
    type CompileTarget = "preview" | "dotnet" | "braze";

    type CatalogToken = {
        token: string;
        description: string;
    };

    type CatalogItem = {
        slug: string;
        name: string;
        description: string;
        category: string;
        tokens: CatalogToken[];
    };

    type CatalogResponse = {
        components: CatalogItem[];
        templates: CatalogItem[];
    };

    type StaticEmailManifestRecord = {
        kind: EmailRenderableKind;
        slug: string;
        target: CompileTarget;
        meta: CatalogItem;
        errors: { line?: number; message: string; tagName?: string }[];
        files: {
            documentHtml: string;
            documentMjml: string;
            displayHtml: string;
            displayMjml: string;
        };
    };

    type StaticEmailManifest = {
        generatedAt: string;
        basePath: string;
        records: Record<string, StaticEmailManifestRecord>;
        catalog: CatalogResponse;
    };

    let staticManifestPromise: Promise<StaticEmailManifest> | null = null;
    const staticFilePromises = new Map<string, Promise<string>>();

    const fetchText = (url: string) => {
        const existing = staticFilePromises.get(url);
        if (existing) {
            return existing;
        }

        const promise = fetch(url).then(async (response) => {
            if (!response.ok) {
                throw new Error(`Unable to load static email artifact: ${url}`);
            }

            return response.text();
        });
        staticFilePromises.set(url, promise);
        return promise;
    };

    const loadStaticManifest = async (): Promise<StaticEmailManifest> => {
        if (!staticManifestPromise) {
            staticManifestPromise = fetch("/email/compiled/manifest.json").then(
                async (response) => {
                    if (!response.ok) {
                        throw new Error("Unable to load static email manifest.");
                    }

                    return (await response.json()) as StaticEmailManifest;
                },
            );
        }

        return staticManifestPromise;
    };

    const loadCatalog = async (): Promise<CatalogResponse> =>
        (await loadStaticManifest()).catalog;
</script>

<script lang="ts">
    import { onMount } from "svelte";
    import hljs from "highlight.js";
    import {
        Button,
        Navigation,
        NavigationItem,
        Select,
        SelectItem,
    } from "@stackoverflow/stacks-svelte";

    type PreviewViewport = "desktop" | "mobile";
    type EmbedTabId = "preview" | "mjml" | "html" | "usage";

    type CompileResponse = {
        kind: EmailRenderableKind;
        html: string;
        componentHtml?: string | null;
        componentMjml?: string | null;
        renderedMjml: string;
        errors: { line?: number; message: string; tagName?: string }[];
        meta: CatalogItem;
    };

    interface Props {
        kind: EmailRenderableKind;
        slug: string;
        title?: string;
        defaultTarget?: CompileTarget;
        showTokens?: boolean;
    }

    let {
        kind,
        slug,
        title = "",
        defaultTarget = "preview",
        showTokens = true,
    }: Props = $props();

    const targetOptions: { value: CompileTarget; label: string }[] = [
        { value: "preview", label: "Preview" },
        { value: "dotnet", label: ".NET / Razor" },
        { value: "braze", label: "Braze" },
    ];

    const tabOptions: { id: EmbedTabId; label: string }[] = [
        { id: "preview", label: "Preview" },
        { id: "mjml", label: "MJML" },
        { id: "html", label: "HTML" },
        { id: "usage", label: "Usage" },
    ];

    const viewportOptions: { id: PreviewViewport; label: string }[] = [
        { id: "desktop", label: "Desktop" },
        { id: "mobile", label: "Mobile" },
    ];

    const mobilePreviewWidth = 390;

    let activeTarget = $state<CompileTarget>("preview");
    let activeTab = $state<EmbedTabId>("preview");
    let previewViewport = $state<PreviewViewport>("desktop");
    let catalogItem = $state<CatalogItem | null>(null);
    let compiled = $state<CompileResponse | null>(null);
    let loading = $state(true);
    let errorMessage = $state("");
    let copied = $state(false);
    let frameHeight = $state(0);
    let frame = $state<HTMLIFrameElement | null>(null);

    const resizeFrame = () => {
        if (!frame?.contentDocument) {
            return;
        }

        const doc = frame.contentDocument;
        const bodyHeight = doc.body?.scrollHeight ?? 0;
        const htmlHeight = doc.documentElement?.scrollHeight ?? 0;
        frameHeight = Math.max(bodyHeight, htmlHeight);
    };

    const syncFrame = () => {
        if (!compiled) {
            return;
        }

        window.setTimeout(resizeFrame, 0);
        window.setTimeout(resizeFrame, 120);
    };

    const loadStaticCompile = async (): Promise<CompileResponse> => {
        const manifest = await loadStaticManifest();
        const record = manifest.records[`${kind}:${slug}:${activeTarget}`];

        if (!record) {
            throw new Error(
                `No static email artifact found for ${kind} "${slug}" targeting "${activeTarget}".`
            );
        }

        const [html, displayHtml, displayMjml] = await Promise.all([
            fetchText(record.files.documentHtml),
            fetchText(record.files.displayHtml),
            fetchText(record.files.displayMjml),
        ]);

        return {
            kind: record.kind,
            html,
            componentHtml: record.kind === "component" ? displayHtml : null,
            componentMjml: record.kind === "component" ? displayMjml : null,
            renderedMjml: displayMjml,
            errors: record.errors,
            meta: record.meta,
        };
    };

    const compile = async () => {
        if (!catalogItem) {
            return;
        }

        loading = true;
        errorMessage = "";

        try {
            compiled = await loadStaticCompile();
            syncFrame();
        } catch (error) {
            errorMessage =
                error instanceof Error
                    ? error.message
                    : "Failed to load email preview.";
            compiled = null;
        } finally {
            loading = false;
        }
    };

    const initialize = async () => {
        loading = true;
        errorMessage = "";
        activeTarget = defaultTarget;

        try {
            const catalog = await loadCatalog();
            const records = kind === "component" ? catalog.components : catalog.templates;
            const item = records.find((record) => record.slug === slug) ?? null;

            if (!item) {
                throw new Error(`No ${kind} found for slug "${slug}".`);
            }

            catalogItem = item;
            await compile();
        } catch (error) {
            errorMessage =
                error instanceof Error
                    ? error.message
                    : "Unable to initialize email embed.";
            loading = false;
        }
    };

    const selectTarget = async (target: CompileTarget) => {
        activeTarget = target;
        await compile();
    };

    const onTargetChange = async (
        event: Event & { currentTarget: EventTarget & HTMLSelectElement },
    ) => {
        await selectTarget(event.currentTarget.value as CompileTarget);
    };

    const getHtmlForDisplay = (payload: CompileResponse) =>
        payload.kind === "component" && payload.componentHtml
            ? payload.componentHtml
            : payload.html;

    const getMjmlForDisplay = (payload: CompileResponse) =>
        payload.kind === "component" && payload.componentMjml
            ? payload.componentMjml
            : payload.renderedMjml;

    const getActiveCode = (
        payload: CompileResponse,
        tab: "mjml" | "html",
    ) => (tab === "mjml" ? getMjmlForDisplay(payload) : getHtmlForDisplay(payload));

    const usageCode = $derived.by(
        () => `import { compileEmailRenderable } from "@stackoverflow/stacks-email";

const compiled = compileEmailRenderable({
    kind: "${kind}",
    slug: "${slug}",
    target: "${activeTarget}",
});

console.log(compiled.html);`
    );

    const ensureIframeBaseHref = (html: string) => {
        if (typeof window === "undefined" || /<base\b/i.test(html)) {
            return html;
        }

        const baseTag = `<base href="${window.location.origin}/">`;

        if (/<head\b[^>]*>/i.test(html)) {
            return html.replace(/<head\b([^>]*)>/i, `<head$1>${baseTag}`);
        }

        return `${baseTag}${html}`;
    };

    const previewSrcdoc = $derived.by(() =>
        compiled ? ensureIframeBaseHref(compiled.html) : ""
    );

    const highlightedCodeBlock = $derived.by(() => {
        if (activeTab === "preview") {
            return "";
        }

        const language = activeTab === "usage" ? "typescript" : "xml";
        const resolvedLanguage = hljs.getLanguage(language)
            ? language
            : "plaintext";
        const code =
            activeTab === "usage"
                ? usageCode
                : compiled
                  ? getActiveCode(compiled, activeTab)
                  : "";
        const highlighted = hljs.highlight(code, {
            language: resolvedLanguage,
        }).value;

        return `<pre class="s-code-block email-code m0"><code class="language-${resolvedLanguage}">${highlighted}</code></pre>`;
    });

    const copyActiveCode = async () => {
        if (activeTab !== "usage" && !compiled) {
            return;
        }

        const text =
            activeTab === "usage"
                ? usageCode
                : activeTab === "mjml" || activeTab === "html"
                ? getActiveCode(compiled, activeTab)
                : compiled.html;
        await navigator.clipboard.writeText(text);
        copied = true;
        window.setTimeout(() => {
            copied = false;
        }, 1200);
    };

    onMount(() => {
        void initialize();
    });

    $effect(() => {
        previewViewport;

        if (activeTab === "preview" && compiled) {
            syncFrame();
        }
    });
</script>

<section>
    <div class="d-flex ai-center fw-wrap g8 mbn2 bt bc-black-200">
        <Navigation class="mr-auto mb0 as-end" label="Email output tabs">
            {#each tabOptions as tab (tab.id)}
                <NavigationItem
                    text={tab.label}
                    selected={activeTab === tab.id}
                    onclick={() => (activeTab = tab.id)}
                />
            {/each}
        </Navigation>

        <Select
            id={`email-target-${kind}-${slug}`}
            label={null}
            selected={activeTarget}
            size="sm"
            onchange={onTargetChange}
        >
            {#each targetOptions as option (option.value)}
                <SelectItem value={option.value} text={option.label} />
            {/each}
        </Select>

        {#if activeTab === "preview"}
            <Navigation class="mb0" label="Preview viewport" size="sm">
                {#each viewportOptions as viewport (viewport.id)}
                    <NavigationItem
                        text={viewport.label}
                        selected={previewViewport === viewport.id}
                        onclick={() => (previewViewport = viewport.id)}
                    />
                {/each}
            </Navigation>
        {/if}

        {#if activeTab !== "preview" && (compiled || activeTab === "usage")}
            <Button size="xs" onclick={copyActiveCode}>
                {copied ? "Copied" : "Copy"}
            </Button>
        {/if}
    </div>

    {#if loading}
        <p class="m0 fs-caption fc-black-500">Compiling…</p>
    {:else if errorMessage}
        <p class="m0 fs-caption fc-red-500">{errorMessage}</p>
    {:else if compiled}
        {#if activeTab === "preview"}
            <div
                class="w100 email-preview-shell"
                class:mx-auto={previewViewport === "mobile"}
                style:max-width={
                    previewViewport === "mobile"
                        ? `${mobilePreviewWidth}px`
                        : "100%"
                }
            >
                <iframe
                    bind:this={frame}
                    title={`${catalogItem?.name ?? slug} preview`}
                    style:height={`${frameHeight}px`}
                    frameBorder="0"
                    class="w100 ba bc-black-200 d-block"
                    scrolling="no"
                    srcdoc={previewSrcdoc}
                    onload={resizeFrame}
                ></iframe>
            </div>
        {:else}
            {@html highlightedCodeBlock}
        {/if}

        {#if showTokens && catalogItem && catalogItem.tokens.length > 0}
            <ul class="m0 pt8 pl16">
                {#each catalogItem.tokens as token (token.token)}
                    <li class="fs-caption mb4">
                        <code>[[{token.token}]]</code> — {token.description}
                    </li>
                {/each}
            </ul>
        {/if}
    {/if}
</section>

<style>
    .email-preview-shell {
        transition: max-width 180ms cubic-bezier(0.2, 0, 0, 1);
        will-change: max-width;
    }

    @media (prefers-reduced-motion: reduce) {
        .email-preview-shell {
            transition: none;
        }
    }
</style>
