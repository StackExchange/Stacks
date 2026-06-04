import { templateDefinitions } from "../registry";
import type { CompileTarget } from "../tokens";
import type { EmailTemplateMeta, MjmlNode } from "../types";
import { compileMjml, type CompileMjmlOutput } from "../pipeline/compile";
import { compileTemplateInputSchema } from "./request-schemas";
import { expandVariantRecords } from "./records";
import { normalizeEmailOptions, type EmailTemplateDefinition } from "../schema";

type ExpandedTemplateRecord = {
    catalog: EmailTemplateCatalogItem;
    renderDocument: (props: Record<string, string>) => MjmlNode;
    resolvePreviewText: (props: Record<string, string>) => string;
};

export type EmailTemplateCatalogItem = {
    slug: string;
    name: string;
    description: string;
    category: string;
    tokens: NonNullable<EmailTemplateMeta["tokens"]>;
    options: NonNullable<EmailTemplateMeta["options"]>;
};

export type CompileTemplateInput = {
    slug: string;
    target: CompileTarget;
    props?: Record<string, string>;
};

export type CompileTemplateOutput = CompileMjmlOutput & {
    kind: "template";
    slug: string;
    meta: EmailTemplateCatalogItem;
};

const DEFAULT_TEMPLATE_CATEGORY = "Transactional";
const DEFAULT_TEMPLATE_PREVIEW_TEXT = "Stack Overflow update";

const TEMPLATE_PREVIEW_TOKEN: NonNullable<EmailTemplateMeta["tokens"]>[number] =
    {
        token: "PREVIEW_TEXT",
        description:
            "Inbox preheader text inserted into `<mj-preview>` for all template compiles.",
    };

const withSharedTemplateTokens = (
    tokens: NonNullable<EmailTemplateMeta["tokens"]>
) => {
    const uniqueByToken = new Map<string, (typeof tokens)[number]>();

    for (const token of [TEMPLATE_PREVIEW_TOKEN, ...tokens]) {
        if (!uniqueByToken.has(token.token)) {
            uniqueByToken.set(token.token, token);
        }
    }

    return [...uniqueByToken.values()];
};

const expandedTemplateRecords = expandVariantRecords({
    definitions: templateDefinitions,
    defaultCategory: DEFAULT_TEMPLATE_CATEGORY,
    getMeta: (definition): EmailTemplateMeta => definition.meta,
    formatName: ({ baseName, variantName, hasMultipleVariants }) =>
        hasMultipleVariants ? variantName : baseName,
    createRecord: ({
        definition,
        meta,
        variant,
        slug,
        name,
        description,
        baseName,
        tokens,
    }): ExpandedTemplateRecord => {
        const catalog = {
            slug,
            name,
            description,
            // Group by the base template (e.g. "Transactional", "Newsletter")
            // so each template's variants nest under it, rather than lumping
            // every template under one default category.
            category: baseName,
            tokens: withSharedTemplateTokens(tokens),
            options: meta.options ?? [],
        };
        // Each template has its own props shape, so `definition` is a union
        // across the registered templates. Treat it as the base definition
        // (props = Record<string, unknown>) for this generic machinery.
        const def = definition as EmailTemplateDefinition;
        const variantId = variant.id as keyof typeof def.variants & string;
        type DefinitionProps = Parameters<
            typeof def.renderDocument
        >[0]["props"];
        const defaults =
            def.variants[variantId] ?? def.variants[def.defaultVariant] ?? {};
        const resolveProps = (inputProps: Record<string, string>) =>
            normalizeEmailOptions<DefinitionProps>(
                def.propsSchema,
                defaults as Partial<DefinitionProps>,
                inputProps as Partial<DefinitionProps>
            );

        return {
            catalog,
            renderDocument: (inputProps) =>
                def.renderDocument({
                    variant: variantId,
                    props: resolveProps(inputProps),
                }),
            resolvePreviewText: (inputProps) => {
                const props = resolveProps(inputProps);
                const preview = def.preview?.({
                    variant: variantId,
                    props,
                });

                return (
                    preview?.previewText?.trim() ||
                    catalog.description.trim() ||
                    catalog.name.trim() ||
                    DEFAULT_TEMPLATE_PREVIEW_TEXT
                );
            },
        };
    },
});

const templateBySlug = new Map(
    expandedTemplateRecords.map(
        (record) => [record.catalog.slug, record] as const
    )
);

export const listEmailTemplates = () =>
    expandedTemplateRecords.map((record) => record.catalog);

export const getEmailTemplateMeta = (slug: string) => {
    const record = templateBySlug.get(slug);
    if (!record) {
        return null;
    }
    return record.catalog;
};

export const compileEmailTemplate = ({
    slug,
    target,
    props = {},
}: CompileTemplateInput): CompileTemplateOutput => {
    const parsedInput = compileTemplateInputSchema.parse({
        slug,
        target,
        props,
    });
    const record = templateBySlug.get(parsedInput.slug);

    if (!record) {
        throw new Error(`Unknown email template slug: ${parsedInput.slug}`);
    }

    const inputProps = parsedInput.props ?? {};
    const result = compileMjml({
        source: record.renderDocument(inputProps),
        target: parsedInput.target,
        props: {},
        previewText: record.resolvePreviewText(inputProps),
    });

    return {
        ...result,
        kind: "template",
        slug: parsedInput.slug,
        meta: record.catalog,
    };
};
