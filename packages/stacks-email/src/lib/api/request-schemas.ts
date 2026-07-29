import { z } from "zod/v4";

import { normalizeAssetBaseUrl } from "../assets";
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
    .transform((value, context) => {
        try {
            return normalizeAssetBaseUrl(value);
        } catch {
            context.addIssue({
                code: "custom",
                message:
                    "`assetBaseUrl` must be an absolute http(s) URL without credentials, a query, or a fragment.",
            });
            return z.NEVER;
        }
    })
    .optional();

export const compileComponentInputSchema = z.object({
    slug: slugSchema,
    target: compileTargetSchema,
    props: z
        .record(z.string(), z.union([z.string(), z.boolean()]))
        .optional(),
    assetBaseUrl: assetBaseUrlSchema,
});

const compilePropsSchema = z.record(z.string(), z.string()).optional();

export const compileTemplateInputSchema = z.object({
    slug: slugSchema,
    target: compileTargetSchema,
    props: compilePropsSchema,
    assetBaseUrl: assetBaseUrlSchema,
});

export const compileEmailRenderableInputSchema = z.discriminatedUnion("kind", [
    compileComponentInputSchema.extend({ kind: z.literal("component") }),
    compileTemplateInputSchema.extend({ kind: z.literal("template") }),
]);
