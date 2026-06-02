import json2mjml from "json2mjml";
import type { MjmlNode } from "../types";

export const mjmlJsonToString = (source: MjmlNode | MjmlNode[]) => {
    const nodes = Array.isArray(source) ? source : [source];
    return nodes.map((node) => json2mjml(node as never)).join("\n");
};
