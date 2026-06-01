import json2mjmlModule from "json2mjml";

import type { MjmlNode } from "./types";

export const mjmlJsonToString = (source: MjmlNode | MjmlNode[]) => {
    const json2mjml =
        typeof json2mjmlModule === "function"
            ? json2mjmlModule
            : (json2mjmlModule as { default?: (node: unknown) => string })
                  .default;

    if (typeof json2mjml !== "function") {
        throw new Error("json2mjml export is not callable");
    }

    const nodes = Array.isArray(source) ? source : [source];

    return nodes.map((node) => json2mjml(node as never)).join("\n");
};
