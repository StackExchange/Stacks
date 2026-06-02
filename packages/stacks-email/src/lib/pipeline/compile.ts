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
            children: [
                {
                    tagName: "mj-wrapper",
                    attributes: {
                        "padding-top": "20px",
                        "padding-bottom": "20px",
                    },
                    children: fragment,
                },
            ],
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
};

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
}: CompileMjmlInput): CompileMjmlOutput => {
    const sourceNodes = Array.isArray(source) ? source : [source];

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
    const renderedMjml = transformTokens(
        applyTemplateProps(serializeMjml(sourceNodes), props),
        replacements
    );
    const html = transformTokens(compileResult.html, replacements);

    const componentMjml = extractComponentName
        ? extractComponentTag
            ? extractComponentTagMjml(
                  sourceNodes,
                  extractComponentTag,
                  props,
                  replacements
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
    replacements: Record<string, string>
): string | null => {
    const markup = extractTagMarkup(sourceNodes, tagName);
    if (markup === null) {
        return null;
    }

    return transformTokens(applyTemplateProps(markup, props), replacements);
};
