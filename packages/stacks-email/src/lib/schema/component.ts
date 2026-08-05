import { z } from "zod/v4";

import type {
    EmailComponentMeta,
    EmailTokenReference,
    MjmlNode,
} from "../types";
import { getSchemaOptionRows } from "./metadata";
import { normalizeEmailOptions } from "./normalize";
import { resolveVariantScaffold, type VariantMap } from "./variants";

export type EmailComponentDefinition<
    TOptions extends Record<string, unknown> = Record<string, unknown>,
    TReturn extends MjmlNode | MjmlNode[] = MjmlNode | MjmlNode[],
> = {
    slug: string;
    name?: string;
    description?: string;
    category?: string;
    defaultVariant: string;
    variants: VariantMap<TOptions>;
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
    TVariants extends VariantMap<
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
    const { defaultVariant, variants, getVariantDefaults, baseMeta } =
        resolveVariantScaffold<TOptions>(optionsSchema, definition);

    const meta: EmailComponentMeta = {
        ...baseMeta,
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
