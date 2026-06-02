import parseMjmlSource from "mjml-parser-xml";

import { mjmlJsonToString } from "../mjml/json";
import type { MjmlNode } from "../types";

type ParsedMjmlNode = MjmlNode & {
    attributes?: MjmlNode["attributes"];
    children?: ParsedMjmlNode[];
};

const markerStart = (name: string) => `<!-- START ${name} -->`;
const markerEnd = (name: string) => `<!-- END ${name} -->`;

const isMjmlNode = (value: unknown): value is ParsedMjmlNode =>
    typeof value === "object" &&
    value !== null &&
    "tagName" in value &&
    typeof (value as { tagName?: unknown }).tagName === "string";

const parseMjml = (source: string) => {
    try {
        const parsed = parseMjmlSource(source);

        return isMjmlNode(parsed) ? parsed : null;
    } catch {
        return null;
    }
};

const isTag = (node: ParsedMjmlNode, tagName: string) =>
    node.tagName.toLowerCase() === tagName.toLowerCase();

const rawMarkerNode = (content: string): MjmlNode => ({
    tagName: "mj-raw",
    content,
});

const serializeMjml = (source: MjmlNode | MjmlNode[]) =>
    mjmlJsonToString(source).trim();

const findFirstTag = (
    node: ParsedMjmlNode,
    tagName: string
): ParsedMjmlNode | null => {
    if (isTag(node, tagName)) {
        return node;
    }

    for (const child of node.children ?? []) {
        const match = findFirstTag(child, tagName);
        if (match) {
            return match;
        }
    }

    return null;
};

const wrapFirstTagNode = (
    node: ParsedMjmlNode,
    name: string,
    tagName: string
): { nodes: MjmlNode[]; found: boolean } => {
    if (isTag(node, tagName)) {
        return {
            nodes: [
                rawMarkerNode(markerStart(name)),
                node,
                rawMarkerNode(markerEnd(name)),
            ],
            found: true,
        };
    }

    let found = false;
    const children = (node.children ?? []).flatMap((child) => {
        if (found) {
            return [child];
        }

        const wrapped = wrapFirstTagNode(child, name, tagName);
        found = wrapped.found;

        return wrapped.nodes;
    });

    return {
        nodes: [
            {
                ...node,
                children,
            },
        ],
        found,
    };
};

export const hasMjmlDocument = (source: string) => {
    const root = parseMjml(source);

    return root ? isTag(root, "mjml") : false;
};

const mjmlOpenTagPattern = /<mjml\b[^>]*>/i;
const headCloseTagPattern = /<\/mj-head\s*>/i;

/**
 * Insert head content into an `<mjml>` document via string splicing.
 */
export const injectHeadContent = (source: string, headContent: string) => {
    if (!hasMjmlDocument(source)) {
        return null;
    }

    const trimmedHead = headContent.trim();
    if (!trimmedHead) {
        return source;
    }

    const headClose = source.match(headCloseTagPattern);
    if (headClose?.index !== undefined) {
        return (
            source.slice(0, headClose.index) +
            `${trimmedHead}\n` +
            source.slice(headClose.index)
        );
    }

    const mjmlOpen = source.match(mjmlOpenTagPattern);
    if (mjmlOpen?.index !== undefined) {
        const insertAt = mjmlOpen.index + mjmlOpen[0].length;
        return (
            source.slice(0, insertAt) +
            `\n<mj-head>\n${trimmedHead}\n</mj-head>` +
            source.slice(insertAt)
        );
    }

    return null;
};

export const applyTemplateProps = (
    source: string,
    props: Record<string, string>
) =>
    Object.entries(props).reduce(
        (next, [key, value]) =>
            next.replaceAll(`{{${key}}}`, String(value ?? "")),
        source
    );

export const wrapComponentWithMarkers = (mjml: string, name: string) => `
<mj-raw>${markerStart(name)}</mj-raw>
${mjml}
<mj-raw>${markerEnd(name)}</mj-raw>
`;

export const wrapTagWithMarkers = (
    mjml: string,
    name: string,
    tagName: string
) => {
    const root = parseMjml(mjml);
    if (!root) {
        return wrapComponentWithMarkers(mjml, name);
    }

    const wrapped = wrapFirstTagNode(root, name, tagName);

    return wrapped.found
        ? serializeMjml(wrapped.nodes)
        : wrapComponentWithMarkers(mjml, name);
};

export const extractBetweenMarkers = (source: string, name: string) => {
    const startMarker = markerStart(name);
    const endMarker = markerEnd(name);
    const start = source.indexOf(startMarker);
    if (start === -1) {
        return null;
    }

    const contentStart = start + startMarker.length;
    const end = source.indexOf(endMarker, contentStart);
    if (end === -1) {
        return null;
    }

    return source.slice(contentStart, end).trim();
};

export const extractTagMarkup = (source: string, tagName: string) => {
    const root = parseMjml(source);
    if (!root) {
        return null;
    }

    const tag = findFirstTag(root, tagName);

    return tag ? serializeMjml(tag) : null;
};
