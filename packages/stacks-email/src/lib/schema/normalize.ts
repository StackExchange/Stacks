import { z } from "zod/v4";

import type { VariantProps } from "../types";

export const stringifyVariantProps = (
    defaults: Record<string, unknown>
): VariantProps =>
    Object.fromEntries(
        Object.entries(defaults)
            .filter(([, value]) => value !== undefined && value !== null)
            .map(([key, value]) => [key, String(value)])
    );

export const getDefinedEntries = <T extends Record<string, unknown>>(
    values: Partial<T>
): Partial<T> =>
    Object.fromEntries(
        Object.entries(values).filter(([, value]) => value !== undefined)
    ) as Partial<T>;

export const getSchemaDefaults = <T extends Record<string, unknown>>(
    schema: z.ZodObject
): Partial<T> => {
    const parsed = schema.safeParse({});
    return parsed.success
        ? getDefinedEntries(parsed.data as Partial<T>)
        : ({} as Partial<T>);
};

export const normalizeEmailOptions = <TOptions extends Record<string, unknown>>(
    schema: z.ZodObject,
    defaults: Partial<TOptions>,
    options: Partial<TOptions> = {}
): TOptions =>
    schema.parse({
        ...getDefinedEntries(defaults),
        ...getDefinedEntries(options),
    }) as TOptions;
