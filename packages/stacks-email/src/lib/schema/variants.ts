import { z } from "zod/v4";

import type { EmailTokenReference, EmailVariant } from "../types";
import {
    getDefinedEntries,
    getSchemaDefaults,
    stringifyVariantProps,
} from "./normalize";

/** A variant is a partial set of option/prop overrides keyed by variant id. */
export type VariantMap<T extends Record<string, unknown>> = Record<
    string,
    Partial<T>
>;

type VariantScaffoldInput<T extends Record<string, unknown>> = {
    slug: string;
    name?: string;
    description?: string;
    category?: string;
    defaultVariant?: string;
    variants?: VariantMap<T>;
    tokens?: EmailTokenReference[];
};

export type VariantBaseMeta = {
    slug: string;
    name?: string;
    description?: string;
    category?: string;
    defaultVariant: string;
    variants: EmailVariant[];
    tokens?: EmailTokenReference[];
};

export type VariantScaffold<T extends Record<string, unknown>> = {
    defaultVariant: string;
    variants: VariantMap<T>;
    schemaDefaults: Partial<T>;
    getVariantDefaults: (variant: Partial<T>) => T;
    baseMeta: VariantBaseMeta;
};

/**
 * Shared scaffolding for variant-driven schema definitions (components and
 * templates). Resolves the implied `default` variant, merges schema defaults
 * with each variant's overrides, and builds the common `meta` fields. Callers
 * layer their own render contract and meta extras (e.g. a component's options
 * table, a template's preview hook) on top.
 */
export const resolveVariantScaffold = <T extends Record<string, unknown>>(
    schema: z.ZodObject,
    definition: VariantScaffoldInput<T>
): VariantScaffold<T> => {
    const schemaDefaults = getSchemaDefaults<T>(schema);
    const defaultVariant = definition.defaultVariant ?? "default";
    const variants: VariantMap<T> = {
        [defaultVariant]: {},
        ...(definition.variants ?? {}),
    };

    const getVariantDefaults = (variant: Partial<T>): T =>
        ({ ...schemaDefaults, ...getDefinedEntries(variant) }) as T;

    const baseMeta: VariantBaseMeta = {
        slug: definition.slug,
        name: definition.name,
        description: definition.description,
        category: definition.category,
        defaultVariant,
        variants: Object.entries(variants).map(([id, defaults]) => ({
            id,
            props: stringifyVariantProps(getVariantDefaults(defaults)),
        })),
        tokens: definition.tokens,
    };

    return {
        defaultVariant,
        variants,
        schemaDefaults,
        getVariantDefaults,
        baseMeta,
    };
};
