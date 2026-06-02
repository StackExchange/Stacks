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

const parseHeadChildren = (source: string) => {
    const head = parseMjml(`<mj-head>${source}</mj-head>`);

    return head?.children ?? [];
};

export const hasMjmlDocument = (source: string) => {
    const root = parseMjml(source);

    return root ? isTag(root, "mjml") : false;
};

export const injectHeadContent = (source: string, headContent: string) => {
    const root = parseMjml(source);
    if (!root || !isTag(root, "mjml")) {
        return null;
    }

    const headChildren = parseHeadChildren(headContent);
    if (headChildren.length === 0) {
        return serializeMjml(root);
    }

    const children = root.children ?? [];
    const headIndex = children.findIndex((child) => isTag(child, "mj-head"));
    const nextChildren =
        headIndex === -1
            ? [
                  {
                      tagName: "mj-head",
                      attributes: {},
                      children: headChildren,
                  },
                  ...children,
              ]
            : children.map((child, index) =>
                  index === headIndex
                      ? {
                            ...child,
                            children: [
                                ...(child.children ?? []),
                                ...headChildren,
                            ],
                        }
                      : child
              );

    return serializeMjml({
        ...root,
        children: nextChildren,
    });
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
