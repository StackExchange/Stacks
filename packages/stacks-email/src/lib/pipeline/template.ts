import { mjmlJsonToString } from "../mjml/json";
import type { MjmlNode } from "../types";

const markerStart = (name: string) => `<!-- START ${name} -->`;
const markerEnd = (name: string) => `<!-- END ${name} -->`;

const isTag = (node: MjmlNode, tagName: string) =>
    node.tagName.toLowerCase() === tagName.toLowerCase();

const rawMarkerNode = (content: string): MjmlNode => ({
    tagName: "mj-raw",
    content,
});

export const serializeMjml = (source: MjmlNode | MjmlNode[]) =>
    mjmlJsonToString(source).trim();

const findFirstTag = (node: MjmlNode, tagName: string): MjmlNode | null => {
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
    node: MjmlNode,
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

    return { nodes: [{ ...node, children }], found };
};

/** Wrap an entire fragment with extraction markers as sibling nodes. */
export const wrapComponentWithMarkers = (
    nodes: MjmlNode[],
    name: string
): MjmlNode[] => [
    rawMarkerNode(markerStart(name)),
    ...nodes,
    rawMarkerNode(markerEnd(name)),
];

/**
 * Wrap the first node matching `tagName` with extraction markers, preserving
 * the surrounding structure. Falls back to wrapping the whole fragment when no
 * matching tag is found.
 */
export const wrapTagWithMarkers = (
    nodes: MjmlNode[],
    name: string,
    tagName: string
): MjmlNode[] => {
    let found = false;
    const wrappedNodes = nodes.flatMap((node) => {
        if (found) {
            return [node];
        }

        const wrapped = wrapFirstTagNode(node, name, tagName);
        found = wrapped.found;

        return wrapped.nodes;
    });

    return found ? wrappedNodes : wrapComponentWithMarkers(nodes, name);
};

/** Serialize the first node matching `tagName` within a fragment. */
export const extractTagMarkup = (
    nodes: MjmlNode[],
    tagName: string
): string | null => {
    for (const node of nodes) {
        const match = findFirstTag(node, tagName);
        if (match) {
            return serializeMjml(match);
        }
    }

    return null;
};

/** Slice the compiled HTML between a component's start/end marker comments. */
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

export const applyTemplateProps = (
    source: string,
    props: Record<string, string>
) =>
    Object.entries(props).reduce(
        (next, [key, value]) =>
            next.replaceAll(`{{${key}}}`, String(value ?? "")),
        source
    );
