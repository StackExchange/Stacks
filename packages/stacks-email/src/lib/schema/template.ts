import { z } from "zod/v4";

import type {
    EmailTemplateMeta,
    EmailTokenReference,
    MjmlNode,
} from "../types";
import {
    getDefinedEntries,
    getSchemaDefaults,
    stringifyVariantProps,
} from "./normalize";

type TemplateVariantMap<TProps extends Record<string, unknown>> = Record<
    string,
    Partial<TProps>
>;

export type EmailTemplateDefinition<
    TProps extends Record<string, unknown> = Record<string, unknown>,
> = {
    slug: string;
    name?: string;
    description?: string;
    category?: string;
    defaultVariant: string;
    variants: TemplateVariantMap<TProps>;
    propsSchema: z.ZodObject;
    tokens?: EmailTokenReference[];
    preview?: (input: { variant: string; props: TProps }) => {
        name?: string;
        description?: string;
        previewText?: string;
    };
    renderDocument: (input: { variant: string; props: TProps }) => MjmlNode;
    meta: EmailTemplateMeta;
};

export const defineEmailTemplate = <
    TPropsSchema extends z.ZodObject,
    TVariants extends TemplateVariantMap<
        z.output<TPropsSchema> & Record<string, unknown>
    >,
>(definition: {
    slug: string;
    name?: string;
    description?: string;
    category?: string;
    defaultVariant?: string;
    variants?: TVariants;
    propsSchema: TPropsSchema;
    tokens?: EmailTokenReference[];
    preview?: (input: {
        variant: string;
        props: z.output<TPropsSchema> & Record<string, unknown>;
    }) => {
        name?: string;
        description?: string;
        previewText?: string;
    };
    renderDocument: (input: {
        variant: string;
        props: z.output<TPropsSchema> & Record<string, unknown>;
    }) => MjmlNode;
}): EmailTemplateDefinition<
    z.output<TPropsSchema> & Record<string, unknown>
> => {
    type TProps = z.output<TPropsSchema> & Record<string, unknown>;
    const { propsSchema } = definition;
    const schemaDefaults = getSchemaDefaults<TProps>(propsSchema);
    const defaultVariant = definition.defaultVariant ?? "default";
    const variants: TemplateVariantMap<TProps> = {
        [defaultVariant]: {},
        ...(definition.variants ?? {}),
    };

    const getVariantDefaults = (variant: Partial<TProps>): TProps =>
        ({ ...schemaDefaults, ...getDefinedEntries(variant) }) as TProps;

    const meta: EmailTemplateMeta = {
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
        ...definition,
        defaultVariant,
        variants,
        meta,
    };
};
