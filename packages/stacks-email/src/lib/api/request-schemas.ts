import { z } from "zod/v4";

import { targetNames, type CompileTarget } from "../tokens";

const compileTargetValues = targetNames as [CompileTarget, ...CompileTarget[]];
const compileTargetList = compileTargetValues.map((target) => `\`${target}\``);

const slugSchema = z
    .string({ error: "`slug` must be a non-empty string." })
    .trim()
    .min(1, { error: "`slug` must be a non-empty string." });

export const compileTargetSchema = z.enum(compileTargetValues, {
    error: `\`target\` must be one of ${compileTargetList.join(", ")}.`,
});

export const emailRenderableKindSchema = z.enum(["component", "template"], {
    error: "`kind` must be `component` or `template`.",
});

export const assetBaseUrlSchema = z
    .string()
    .refine((value) => value === "" || /^https?:\/\//.test(value), {
        error: "`assetBaseUrl` must be an absolute http(s) URL.",
    })
    .optional();

export const compileComponentInputSchema = z.object({
    slug: slugSchema,
    target: compileTargetSchema,
    assetBaseUrl: assetBaseUrlSchema,
});

const compilePropsSchema = z.record(z.string(), z.string()).optional();

export const compileTemplateInputSchema = z.object({
    slug: slugSchema,
    target: compileTargetSchema,
    props: compilePropsSchema,
    assetBaseUrl: assetBaseUrlSchema,
});

export const compileEmailRenderableInputSchema = z.object({
    kind: emailRenderableKindSchema,
    slug: slugSchema,
    target: compileTargetSchema,
    props: compilePropsSchema,
    assetBaseUrl: assetBaseUrlSchema,
});
