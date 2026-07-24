import type { MjmlNode, MjmlAttributeValue } from "../types";

const serializeAttributes = (
    attributes: Record<string, MjmlAttributeValue> | undefined
) => {
    if (!attributes) {
        return "";
    }
    return Object.entries(attributes)
        .map(
            ([key, value]) =>
                ` ${key}="${String(value).replaceAll('"', "&quot;")}"`
        )
        .join("");
};

const serializeNode = (node: MjmlNode, depth: number): string => {
    const indent = "  ".repeat(depth);
    const open = `<${node.tagName}${serializeAttributes(node.attributes)}>`;
    const close = `</${node.tagName}>`;
    const children = node.children ?? [];
    const content = node.content ?? "";

    // Leaf: keep content verbatim — mj-text holds raw HTML and mj-style holds CSS.
    if (children.length === 0) {
        return `${indent}${open}${content}${close}`;
    }

    const inner = children
        .map((child) => serializeNode(child, depth + 1))
        .join("\n");
    const body = content ? `${content}\n${inner}` : inner;
    return `${indent}${open}\n${body}\n${indent}${close}`;
};

/**
 * Serialize an MjmlNode tree (or list) to an MJML string. A small in-house
 * serializer (replacing the CJS `json2mjml` dependency): node content is emitted
 * verbatim so inline HTML inside `mj-text` and CSS inside `mj-style` are
 * preserved, and the tree is indented for readability.
 */
export const mjmlJsonToString = (source: MjmlNode | MjmlNode[]): string => {
    const nodes = Array.isArray(source) ? source : [source];
    return nodes.map((node) => serializeNode(node, 0)).join("\n");
};
