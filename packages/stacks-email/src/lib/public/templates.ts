import { mjmlJsonToString } from "../../../mjml-json";
import {
    BODY_LIST_ITEM_MARGIN,
    BODY_LIST_MARGIN,
    BODY_LIST_PADDING,
    BODY_PARAGRAPH_MARGIN,
} from "../../../mjml-config";
import { templateDefinitions } from "../../../registry";
import { renderTemplateVariantSource } from "../../../variants";
import type { CompileTarget } from "../../../tokens";
import type {
    EmailTemplateCategory,
    EmailTemplateMeta,
    EmailTemplateModule,
    EmailTemplateVariant,
} from "../../../types";
import MarkdownIt from "markdown-it";
import { compileMjml, type CompileMjmlOutput } from "../pipeline/compile";
import { compileTemplateInputSchema } from "./validation";

type ExpandedTemplateRecord = {
    slug: string;
    name: string;
    description: string;
    category: EmailTemplateCategory;
    tokens: NonNullable<EmailTemplateMeta["tokens"]>;
    variantProps: Record<string, string>;
    variant: EmailTemplateVariant;
    template: EmailTemplateModule;
};

export type EmailTemplateCatalogItem = {
    slug: string;
    name: string;
    description: string;
    category: EmailTemplateCategory;
    tokens: NonNullable<EmailTemplateMeta["tokens"]>;
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

const DEFAULT_TEMPLATE_CATEGORY: EmailTemplateCategory = "Transactional";
const DEFAULT_TEMPLATE_PREVIEW_TEXT = "Stack Overflow update";

const TEMPLATE_PREVIEW_TOKEN: NonNullable<EmailTemplateMeta["tokens"]>[number] = {
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

const markdown = new MarkdownIt({
    html: false,
    breaks: true,
    linkify: true,
    typographer: true,
});

markdown.renderer.rules.link_open = (tokenList, index, options, env, self) => {
    tokenList[index].attrJoin("class", "link");
    return self.renderToken(tokenList, index, options);
};

markdown.renderer.rules.paragraph_open = (
    tokenList,
    index,
    options,
    env,
    self
) => {
    const hasAnotherParagraph = tokenList
        .slice(index + 1)
        .some((token) => token.type === "paragraph_open");

    tokenList[index].attrSet(
        "style",
        `margin:${hasAnotherParagraph ? BODY_PARAGRAPH_MARGIN : "0"};`
    );

    return self.renderToken(tokenList, index, options);
};

markdown.renderer.rules.bullet_list_open = (
    tokenList,
    index,
    options,
    env,
    self
) => {
    tokenList[index].attrSet(
        "style",
        `margin:${BODY_LIST_MARGIN};padding:${BODY_LIST_PADDING};`
    );

    return self.renderToken(tokenList, index, options);
};

markdown.renderer.rules.list_item_open = (
    tokenList,
    index,
    options,
    env,
    self
) => {
    const hasAnotherListItem = tokenList
        .slice(index + 1)
        .some((token) => token.type === "list_item_open");

    tokenList[index].attrSet(
        "style",
        `margin:${hasAnotherListItem ? BODY_LIST_ITEM_MARGIN : "0"};`
    );

    return self.renderToken(tokenList, index, options);
};

const renderBodyMarkdown = (value: string) => {
    const content = value.trim();

    if (!content) {
        return "";
    }

    return markdown.render(content).trim();
};

const resolveTemplateCompileProps = (
    record: ExpandedTemplateRecord,
    inputProps: Record<string, string>
) => {
    const compileProps = { ...inputProps };
    const defaultBodyMarkdown = record.variantProps.BODY_DEFAULT_MARKDOWN;

    if (typeof compileProps.BODY_MARKDOWN === "string") {
        compileProps.BODY_CONTENT = renderBodyMarkdown(compileProps.BODY_MARKDOWN);
    } else if (typeof compileProps.BODY_CONTENT !== "string") {
        compileProps.BODY_CONTENT = renderBodyMarkdown(defaultBodyMarkdown ?? "");
    }

    if (typeof compileProps.PREVIEW_TEXT !== "string") {
        compileProps.PREVIEW_TEXT =
            record.description.trim() ||
            record.name.trim() ||
            DEFAULT_TEMPLATE_PREVIEW_TEXT;
    }

    return compileProps;
};

const renderTemplateSource = (
    record: ExpandedTemplateRecord,
    compileProps: Record<string, string>
) => {
    const variant: EmailTemplateVariant = {
        ...record.variant,
        props: {
            ...record.variant.props,
            ...compileProps,
        },
    };
    const source = mjmlJsonToString(record.template.document(variant));
    return renderTemplateVariantSource(
        {
            meta: record.template.meta,
            source,
        },
        variant
    );
};

const toLabel = (value: string) =>
    value
        .split(/[-_]/g)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

const expandTemplateRecords = (): ExpandedTemplateRecord[] =>
    templateDefinitions
        .flatMap((definition) => {
            const { meta } = definition;
            return meta.variants.map((variant, index) => {
                const isDefault =
                    variant.id === meta.defaultVariant ||
                    (!meta.defaultVariant && index === 0);
                const slug = isDefault
                    ? meta.slug
                    : `${meta.slug}-${variant.id}`;
                const baseName = meta.name ?? toLabel(meta.slug);
                const baseDescription = meta.description ?? "";
                const variantName = variant.name ?? toLabel(variant.id);
                const variantDescription = variant.description ?? baseDescription;

                return {
                    slug,
                    name:
                        meta.variants.length > 1
                            ? variantName
                            : baseName,
                    description:
                        meta.variants.length > 1
                            ? variantDescription
                            : baseDescription,
                    category: meta.category ?? DEFAULT_TEMPLATE_CATEGORY,
                    tokens: meta.tokens ?? [],
                    variantProps: variant.props,
                    variant,
                    template: definition,
                };
            });
        })
        .sort((a, b) => a.name.localeCompare(b.name));

const expandedTemplateRecords = expandTemplateRecords();

const templateBySlug = new Map(
    expandedTemplateRecords.map((record) => [record.slug, record] as const)
);

const toCatalogItem = (
    record: ExpandedTemplateRecord
): EmailTemplateCatalogItem => ({
    slug: record.slug,
    name: record.name,
    description: record.description,
    category: record.category,
    tokens: withSharedTemplateTokens(record.tokens),
});

export const listEmailTemplates = () =>
    expandedTemplateRecords.map((record) => toCatalogItem(record));

export const getEmailTemplateMeta = (slug: string) => {
    const record = templateBySlug.get(slug);
    if (!record) {
        return null;
    }
    return toCatalogItem(record);
};

export const compileEmailTemplate = ({
    slug,
    target,
    props = {},
}: CompileTemplateInput): CompileTemplateOutput => {
    const parsedInput = compileTemplateInputSchema.parse({ slug, target, props });
    const record = templateBySlug.get(parsedInput.slug);

    if (!record) {
        throw new Error(`Unknown email template slug: ${parsedInput.slug}`);
    }

    const compileProps = resolveTemplateCompileProps(record, parsedInput.props ?? {});
    const source = renderTemplateSource(record, compileProps);
    const result = compileMjml({
        mjml: source,
        target: parsedInput.target,
        props: {},
        previewText: compileProps.PREVIEW_TEXT,
    });

    return {
        ...result,
        kind: "template",
        slug: parsedInput.slug,
        meta: toCatalogItem(record),
    };
};
