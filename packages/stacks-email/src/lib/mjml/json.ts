import * as json2mjmlModule from "json2mjml";

import type { MjmlNode } from "../types";

type Json2Mjml = (node: unknown) => string;
type Json2MjmlModule = {
    "default"?: unknown;
    "module.exports"?: unknown;
};

const isJson2Mjml = (value: unknown): value is Json2Mjml =>
    typeof value === "function";

const resolveJson2Mjml = (moduleValue: unknown): Json2Mjml => {
    if (isJson2Mjml(moduleValue)) {
        return moduleValue;
    }

    const moduleShape = moduleValue as Json2MjmlModule;
    if (isJson2Mjml(moduleShape.default)) {
        return moduleShape.default;
    }

    const defaultShape = moduleShape.default as Json2MjmlModule | undefined;
    if (isJson2Mjml(defaultShape?.default)) {
        return defaultShape.default;
    }

    if (isJson2Mjml(moduleShape["module.exports"])) {
        return moduleShape["module.exports"];
    }

    throw new Error("json2mjml export is not callable");
};

const json2mjml = resolveJson2Mjml(json2mjmlModule);

export const mjmlJsonToString = (source: MjmlNode | MjmlNode[]) => {
    const nodes = Array.isArray(source) ? source : [source];
    return nodes.map((node) => json2mjml(node as never)).join("\n");
};
