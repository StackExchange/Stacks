import mjml2html from "mjml";

import {
    applyTemplateProps,
    extractBetweenMarkers,
    extractTagMarkup,
    serializeMjml,
    wrapComponentWithMarkers,
    wrapTagWithMarkers,
} from "./template";

import { mjmlConfigNodes } from "../mjml/config";
import { targets, tokens, type CompileTarget } from "../tokens";
import { transformTokens } from "./transform";
import type { MjmlNode } from "../types";
import { normalizeAssetBaseUrl, resolveAssetUrls } from "../assets";

type MjmlCompileResult = {
    html: string;
    errors: {
        line: number | undefined;
        message: string;
        tagName?: string;
    }[];
};

const mjml2htmlSync = mjml2html as unknown as (
    mjml: string,
    options?: {
        validationLevel?: "strict" | "soft" | "skip";
        keepComments?: boolean;
        minify?: boolean;
    }
) => MjmlCompileResult;

const escapePreviewText = (value: string) =>
    value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

const previewNode = (previewText: string | undefined): MjmlNode | null => {
    const normalizedPreviewText = previewText?.trim();
    if (!normalizedPreviewText) {
        return null;
    }

    return {
        tagName: "mj-preview",
        content: escapePreviewText(normalizedPreviewText),
    };
};

const buildHeadChildren = (previewText: string | undefined): MjmlNode[] => {
    const preview = previewNode(previewText);

    return preview ? [preview, ...mjmlConfigNodes] : [...mjmlConfigNodes];
};

const isDocumentRoot = (nodes: MjmlNode[]) =>
    nodes.length === 1 && nodes[0].tagName.toLowerCase() === "mjml";

const bodyChildTags = new Set(["mj-hero", "mj-raw", "mj-section", "mj-wrapper"]);
const sectionChildTags = new Set(["mj-column", "mj-group", "mj-raw"]);

const wrapFragmentForBody = (fragment: MjmlNode[]): MjmlNode[] => {
    if (fragment.every((node) => bodyChildTags.has(node.tagName.toLowerCase()))) {
        return fragment;
    }

    if (
        fragment.every((node) =>
            sectionChildTags.has(node.tagName.toLowerCase())
        )
    ) {
        return [{ tagName: "mj-section", children: fragment }];
    }

    return [
        {
            tagName: "mj-section",
            children: [{ tagName: "mj-column", children: fragment }],
        },
    ];
};

const wrapFragmentWithPreviewPadding = (fragment: MjmlNode[]): MjmlNode[] => {
    const bodyChildren = wrapFragmentForBody(fragment);

    if (
        bodyChildren.some(
            (node) => node.tagName.toLowerCase() === "mj-wrapper"
        )
    ) {
        return bodyChildren;
    }

    return [
        {
            tagName: "mj-wrapper",
            attributes: {
                "padding-top": "20px",
                "padding-bottom": "20px",
            },
            children: bodyChildren,
        },
    ];
};

const wrapInDocument = (
    fragment: MjmlNode[],
    previewText: string | undefined
): MjmlNode => ({
    tagName: "mjml",
    children: [
        { tagName: "mj-head", children: buildHeadChildren(previewText) },
        {
            tagName: "mj-body",
            attributes: {
                "background-color": tokens.color.bodyBackground,
            },
            children: wrapFragmentWithPreviewPadding(fragment),
        },
    ],
});

const injectHead = (
    documentNode: MjmlNode,
    previewText: string | undefined
): MjmlNode => {
    const headChildren = buildHeadChildren(previewText);
    const children = documentNode.children ?? [];
    const headIndex = children.findIndex((child) => isMjHead(child));

    if (headIndex === -1) {
        return {
            ...documentNode,
            children: [
                { tagName: "mj-head", children: headChildren },
                ...children,
            ],
        };
    }

    return {
        ...documentNode,
        children: children.map((child, index) =>
            index === headIndex
                ? {
                      ...child,
                      children: [...(child.children ?? []), ...headChildren],
                  }
                : child
        ),
    };
};

const isMjHead = (node: MjmlNode) => node.tagName.toLowerCase() === "mj-head";

export type CompileMjmlInput = {
    source: MjmlNode | MjmlNode[];
    target: CompileTarget;
    props?: Record<string, string>;
    previewText?: string;
    extractComponentName?: string;
    extractComponentTag?: string;
    assetBaseUrl?: string;
};

// Fallback asset host when neither an explicit arg nor the env var is set. Pass
// `assetBaseUrl: ""` to opt back into root-relative output.
const DEFAULT_ASSET_BASE_URL = "https://email.stackoverflow.design";

export type CompileMjmlOutput = {
    html: string;
    componentHtml: string | null;
    componentMjml: string | null;
    mjml: string;
    renderedMjml: string;
    errors: {
        line: number | undefined;
        message: string;
        tagName?: string;
    }[];
};

export const compileMjml = ({
    source,
    target,
    props = {},
    previewText,
    extractComponentName,
    extractComponentTag,
    assetBaseUrl,
}: CompileMjmlInput): CompileMjmlOutput => {
    const sourceNodes = Array.isArray(source) ? source : [source];

    // Explicit arg wins; otherwise the env var; otherwise the canonical host.
    // `??` (not `||`) so an explicit "" still forces root-relative output.
    const resolvedAssetBaseUrl = normalizeAssetBaseUrl(
        assetBaseUrl ??
            process.env.STACKS_EMAIL_ASSET_BASE_URL ??
            DEFAULT_ASSET_BASE_URL
    );

    // Component compiles insert extraction markers around the renderable so the
    // compiled component HTML can be sliced back out (always a fragment, never a
    // full `<mjml>` document).
    const renderableNodes = extractComponentName
        ? extractComponentTag
            ? wrapTagWithMarkers(
                  sourceNodes,
                  extractComponentName,
                  extractComponentTag
              )
            : wrapComponentWithMarkers(sourceNodes, extractComponentName)
        : sourceNodes;

    const documentNode = isDocumentRoot(renderableNodes)
        ? injectHead(renderableNodes[0], previewText)
        : wrapInDocument(renderableNodes, previewText);

    // Serialize exactly once. The source tree is never parsed back into nodes,
    // so inline markup inside `mj-text` content (e.g. `<strong>` in a `<li>`) is
    // preserved verbatim instead of being collapsed by mjml-parser-xml.
    const fullMjml = applyTemplateProps(serializeMjml(documentNode), props);

    const compileResult = mjml2htmlSync(fullMjml, {
        validationLevel: "soft",
        keepComments: true,
        minify: false,
    });

    const replacements = targets[target].tokens;
    const renderedMjml = resolveAssetUrls(
        transformTokens(
            applyTemplateProps(serializeMjml(sourceNodes), props),
            replacements
        ),
        resolvedAssetBaseUrl
    );
    const html = resolveAssetUrls(
        transformTokens(compileResult.html, replacements),
        resolvedAssetBaseUrl
    );

    const componentMjml = extractComponentName
        ? extractComponentTag
            ? extractComponentTagMjml(
                  sourceNodes,
                  extractComponentTag,
                  props,
                  replacements,
                  resolvedAssetBaseUrl
              )
            : renderedMjml.trim()
        : null;
    const componentHtml = extractComponentName
        ? extractBetweenMarkers(html, extractComponentName)
        : null;

    return {
        html,
        componentMjml,
        componentHtml,
        mjml: fullMjml,
        renderedMjml,
        errors: compileResult.errors.map((issue) => ({
            line: issue.line,
            message: issue.message,
            tagName: issue.tagName,
        })),
    };
};

const extractComponentTagMjml = (
    sourceNodes: MjmlNode[],
    tagName: string,
    props: Record<string, string>,
    replacements: Record<string, string>,
    assetBaseUrl: string
): string | null => {
    const markup = extractTagMarkup(sourceNodes, tagName);
    if (markup === null) {
        return null;
    }

    return resolveAssetUrls(
        transformTokens(applyTemplateProps(markup, props), replacements),
        assetBaseUrl
    );
};
