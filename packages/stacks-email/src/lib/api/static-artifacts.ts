import { compileEmailRenderable, type EmailRenderableKind } from "./compile";
import { getEmailCatalog, type EmailCatalog } from "./catalog";
import {
    isCompileTarget,
    targetNames,
    targets,
    type CompileTarget,
} from "../tokens";
import { transformTokens } from "../pipeline/transform";

export type StaticEmailManifestRecord = {
    kind: EmailRenderableKind;
    slug: string;
    target: CompileTarget;
    meta: EmailCatalog[`${EmailRenderableKind}s`][number];
    errors: ReturnType<typeof compileEmailRenderable>["errors"];
    files: {
        documentHtml: string;
        documentMjml: string;
        displayHtml: string;
        displayMjml: string;
    };
};

export type StaticEmailManifest = {
    generatedAt: string;
    basePath: string;
    records: Record<string, StaticEmailManifestRecord>;
    catalog: EmailCatalog;
};

type EmailArtifactKind =
    | "documentHtml"
    | "documentMjml"
    | "displayHtml"
    | "displayMjml";

type EmailArtifactFileExtension = "html" | "mjml";
type EmailArtifactFileVariant = "fragment" | "full";

type ParsedEmailArtifactFile = {
    target: CompileTarget;
    variant?: EmailArtifactFileVariant;
    extension: EmailArtifactFileExtension;
};

export type StaticEmailArtifactRouteEntry = {
    kind: EmailRenderableKind;
    slug: string;
    file: string;
};

export type StaticEmailArtifactsOptions = {
    basePath?: string;
};

export const defaultStaticEmailArtifactsBasePath = "/email/compiled";

const renderableKinds = ["component", "template"] as const;

const manifestCacheByBasePath = new Map<string, StaticEmailManifest>();

const normalizeBasePath = (basePath = defaultStaticEmailArtifactsBasePath) =>
    basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;

const toRecordKey = (
    kind: EmailRenderableKind,
    slug: string,
    target: CompileTarget
) => `${kind}:${slug}:${target}`;

const toUrlPath = (
    basePath: string,
    kind: EmailRenderableKind,
    slug: string,
    file: string
) => `${basePath}/${kind}/${slug}/${file}`;

const getCatalogItems = (catalog: EmailCatalog, kind: EmailRenderableKind) =>
    kind === "component" ? catalog.components : catalog.templates;

const isEmailArtifactFileExtension = (
    value: string
): value is EmailArtifactFileExtension => value === "html" || value === "mjml";

const isEmailArtifactFileVariant = (
    value: string
): value is EmailArtifactFileVariant =>
    value === "fragment" || value === "full";

const parseEmailArtifactFile = (
    file: string
): ParsedEmailArtifactFile | null => {
    const parts = file.split(".");
    if (parts.length !== 2 && parts.length !== 3) {
        return null;
    }

    const [target, maybeVariantOrExtension, maybeExtension] = parts;
    if (!isCompileTarget(target)) {
        return null;
    }

    if (parts.length === 2) {
        return isEmailArtifactFileExtension(maybeVariantOrExtension)
            ? { target, extension: maybeVariantOrExtension }
            : null;
    }

    if (
        !maybeExtension ||
        !isEmailArtifactFileVariant(maybeVariantOrExtension) ||
        !isEmailArtifactFileExtension(maybeExtension)
    ) {
        return null;
    }

    return {
        target,
        variant: maybeVariantOrExtension,
        extension: maybeExtension,
    };
};

const getCompiledRecord = (
    kind: EmailRenderableKind,
    slug: string,
    target: CompileTarget
) => {
    const compiled = compileEmailRenderable({ kind, slug, target });
    const documentMjml = transformTokens(compiled.mjml, targets[target].tokens);

    return {
        compiled,
        documentMjml,
        displayHtml:
            compiled.kind === "component" && compiled.componentHtml
                ? compiled.componentHtml
                : compiled.html,
        displayMjml:
            compiled.kind === "component" && compiled.componentMjml
                ? compiled.componentMjml
                : compiled.renderedMjml,
    };
};

const createManifestRecord = (
    basePath: string,
    kind: EmailRenderableKind,
    slug: string,
    target: CompileTarget
): StaticEmailManifestRecord => {
    const { compiled } = getCompiledRecord(kind, slug, target);
    const documentHtmlFile = `${target}.html`;
    const documentMjmlFile = `${target}.full.mjml`;
    const displayHtmlFile =
        kind === "component" ? `${target}.fragment.html` : documentHtmlFile;
    const displayMjmlFile = `${target}.mjml`;

    return {
        kind,
        slug,
        target,
        meta: compiled.meta,
        errors: compiled.errors,
        files: {
            documentHtml: toUrlPath(basePath, kind, slug, documentHtmlFile),
            documentMjml: toUrlPath(basePath, kind, slug, documentMjmlFile),
            displayHtml: toUrlPath(basePath, kind, slug, displayHtmlFile),
            displayMjml: toUrlPath(basePath, kind, slug, displayMjmlFile),
        },
    };
};

export const getStaticEmailManifest = (
    options: StaticEmailArtifactsOptions = {}
): StaticEmailManifest => {
    const basePath = normalizeBasePath(options.basePath);
    const cachedManifest = manifestCacheByBasePath.get(basePath);

    if (cachedManifest) {
        return cachedManifest;
    }

    const catalog = getEmailCatalog();
    const records: StaticEmailManifest["records"] = {};

    for (const kind of renderableKinds) {
        for (const item of getCatalogItems(catalog, kind)) {
            for (const target of targetNames) {
                records[toRecordKey(kind, item.slug, target)] =
                    createManifestRecord(basePath, kind, item.slug, target);
            }
        }
    }

    const manifest = {
        generatedAt: new Date().toISOString(),
        basePath,
        records,
        catalog,
    };

    manifestCacheByBasePath.set(basePath, manifest);

    return manifest;
};

export const getStaticEmailArtifactEntries =
    (): StaticEmailArtifactRouteEntry[] => {
        const catalog = getEmailCatalog();
        const entries: StaticEmailArtifactRouteEntry[] = [];

        for (const kind of renderableKinds) {
            for (const item of getCatalogItems(catalog, kind)) {
                for (const target of targetNames) {
                    entries.push(
                        { kind, slug: item.slug, file: `${target}.html` },
                        { kind, slug: item.slug, file: `${target}.full.mjml` },
                        { kind, slug: item.slug, file: `${target}.mjml` }
                    );

                    if (kind === "component") {
                        entries.push({
                            kind,
                            slug: item.slug,
                            file: `${target}.fragment.html`,
                        });
                    }
                }
            }
        }

        return entries;
    };

export const getStaticEmailArtifact = (
    kind: string,
    slug: string,
    file: string
) => {
    if (kind !== "component" && kind !== "template") {
        throw new Error(`Unknown email kind: ${kind}`);
    }

    const parsedFile = parseEmailArtifactFile(file);
    if (!parsedFile) {
        throw new Error(`Unknown email artifact file: ${file}`);
    }

    const { compiled, displayHtml, displayMjml, documentMjml } =
        getCompiledRecord(kind, slug, parsedFile.target);

    let artifactKind: EmailArtifactKind;
    if (parsedFile.extension === "html") {
        artifactKind =
            parsedFile.variant === "fragment" ? "displayHtml" : "documentHtml";
    } else {
        artifactKind =
            parsedFile.variant === "full" ? "documentMjml" : "displayMjml";
    }

    if (kind !== "component" && artifactKind === "displayHtml") {
        throw new Error(
            `Templates do not have fragment HTML artifacts: ${file}`
        );
    }

    const contentsByKind: Record<EmailArtifactKind, string> = {
        documentHtml: compiled.html,
        documentMjml,
        displayHtml,
        displayMjml,
    };

    return {
        contents: contentsByKind[artifactKind],
        contentType:
            parsedFile.extension === "html"
                ? "text/html; charset=utf-8"
                : "text/plain; charset=utf-8",
    };
};
