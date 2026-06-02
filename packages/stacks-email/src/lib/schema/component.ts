import { z } from "zod/v4";

import type {
    EmailComponentMeta,
    EmailTokenReference,
    MjmlNode,
} from "../types";
import { getSchemaOptionRows } from "./metadata";
import {
    getDefinedEntries,
    getSchemaDefaults,
    normalizeEmailOptions,
    stringifyVariantProps,
} from "./normalize";

type ComponentVariantMap<TOptions extends Record<string, unknown>> = Record<
    string,
    Partial<TOptions>
>;

export type EmailComponentDefinition<
    TOptions extends Record<string, unknown> = Record<string, unknown>,
    TReturn extends MjmlNode | MjmlNode[] = MjmlNode | MjmlNode[],
> = {
    slug: string;
    name?: string;
    description?: string;
    category?: string;
    defaultVariant: string;
    variants: ComponentVariantMap<TOptions>;
    variantOption?: { description: string };
    tokens?: EmailTokenReference[];
    htmlExtraction?: EmailComponentMeta["htmlExtraction"];
    render: (input: { variant: string; options: TOptions }) => TReturn;
    meta: EmailComponentMeta;
    optionsSchema: z.ZodObject;
    component: (variant: string, options?: Partial<TOptions>) => TReturn;
};

export const defineEmailComponent = <
    TOptionsSchema extends z.ZodObject,
    TVariants extends ComponentVariantMap<
        z.output<TOptionsSchema> & Record<string, unknown>
    >,
    TReturn extends MjmlNode | MjmlNode[],
>(definition: {
    slug: string;
    name?: string;
    description?: string;
    category?: string;
    defaultVariant?: string;
    variants?: TVariants;
    optionsSchema: TOptionsSchema;
    variantOption?: { description: string };
    tokens?: EmailTokenReference[];
    htmlExtraction?: EmailComponentMeta["htmlExtraction"];
    render: (input: {
        variant: string;
        options: z.output<TOptionsSchema> & Record<string, unknown>;
    }) => TReturn;
}): EmailComponentDefinition<
    z.output<TOptionsSchema> & Record<string, unknown>,
    TReturn
> => {
    type TOptions = z.output<TOptionsSchema> & Record<string, unknown>;
    const { optionsSchema } = definition;
    const schemaDefaults = getSchemaDefaults<TOptions>(optionsSchema);
    const defaultVariant = definition.defaultVariant ?? "default";
    const variants: ComponentVariantMap<TOptions> = {
        [defaultVariant]: {},
        ...(definition.variants ?? {}),
    };

    const getVariantDefaults = (variant: Partial<TOptions>): TOptions =>
        ({ ...schemaDefaults, ...getDefinedEntries(variant) }) as TOptions;

    const meta: EmailComponentMeta = {
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
        options: [
            {
                argument: "variant",
                type: Object.keys(variants)
                    .map((variant) => `"${variant}"`)
                    .join(" | "),
                description:
                    definition.variantOption?.description ??
                    "Selects the variant.",
            },
            ...getSchemaOptionRows(optionsSchema),
        ],
        htmlExtraction: definition.htmlExtraction,
    };

    const component = (variant: string, options: Partial<TOptions> = {}) => {
        const variantDefaults =
            variants[variant] ?? variants[defaultVariant] ?? variants.default;
        const normalizedOptions = normalizeEmailOptions<TOptions>(
            optionsSchema,
            getVariantDefaults(variantDefaults),
            options
        );
        return definition.render({ variant, options: normalizedOptions });
    };

    return {
        ...definition,
        defaultVariant,
        variants,
        meta,
        component,
    };
};
