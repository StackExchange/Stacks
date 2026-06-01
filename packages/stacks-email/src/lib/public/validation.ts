import { z } from "zod/v4";

import type { CompileTarget } from "../../../tokens";

const compileTargetValues = ["preview", "dotnet", "braze"] as const satisfies readonly CompileTarget[];

const slugSchema = z
    .string({ error: "`slug` must be a non-empty string." })
    .trim()
    .min(1, { error: "`slug` must be a non-empty string." });

export const compileTargetSchema = z.enum(compileTargetValues, {
    error: "`target` must be one of `preview`, `dotnet`, or `braze`.",
});

export const emailRenderableKindSchema = z.enum(["component", "template"], {
    error: "`kind` must be `component` or `template`.",
});

export const compileComponentInputSchema = z.object({
    slug: slugSchema,
    target: compileTargetSchema,
});

const compilePropsSchema = z.record(z.string(), z.string()).optional();

export const compileTemplateInputSchema = z.object({
    slug: slugSchema,
    target: compileTargetSchema,
    props: compilePropsSchema,
});

export const compileEmailRenderableInputSchema = z.object({
    kind: emailRenderableKindSchema,
    slug: slugSchema,
    target: compileTargetSchema,
    props: compilePropsSchema,
});
