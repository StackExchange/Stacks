import { z } from "zod/v4";

import type {
    EmailTemplateMeta,
    EmailTokenReference,
    MjmlNode,
} from "../types";
import { resolveVariantScaffold, type VariantMap } from "./variants";

export type EmailTemplateDefinition<
    TProps extends Record<string, unknown> = Record<string, unknown>,
> = {
    slug: string;
    name?: string;
    description?: string;
    category?: string;
    defaultVariant: string;
    variants: VariantMap<TProps>;
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
    TVariants extends VariantMap<
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
    const { defaultVariant, variants, baseMeta } =
        resolveVariantScaffold<TProps>(propsSchema, definition);

    const meta: EmailTemplateMeta = baseMeta;

    return {
        ...definition,
        defaultVariant,
        variants,
        meta,
    };
};
