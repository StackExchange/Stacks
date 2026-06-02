import * as json2mjmlModule from "json2mjml";

import type { MjmlNode } from "../types";

type Json2Mjml = (node: unknown) => string;

// json2mjml is a old CJS module; depending on the bundler's interop the callable
// can land directly on the namespace or nested under one or more `default`s.

const resolveJson2Mjml = (value: unknown): Json2Mjml => {
    let candidate = value;
    while (
        candidate &&
        typeof candidate === "object" &&
        "default" in candidate
    ) {
        candidate = (candidate as { default: unknown }).default;
    }
    if (typeof candidate !== "function") {
        throw new Error("json2mjml export is not callable");
    }
    return candidate as Json2Mjml;
};

const json2mjml = resolveJson2Mjml(json2mjmlModule);

export const mjmlJsonToString = (source: MjmlNode | MjmlNode[]) => {
    const nodes = Array.isArray(source) ? source : [source];
    return nodes.map((node) => json2mjml(node)).join("\n");
};
