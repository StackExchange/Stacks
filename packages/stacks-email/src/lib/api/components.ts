import { componentDefinitions } from "../registry";
import type { CompileTarget } from "../tokens";
import type {
    EmailComponentMeta,
    ComponentOptionReference,
    MjmlNode,
} from "../types";
import { compileMjml, type CompileMjmlOutput } from "../pipeline/compile";
import { compileComponentInputSchema } from "./request-schemas";
import { expandVariantRecords } from "./records";

type ExpandedComponentRecord = {
    catalog: EmailComponentCatalogItem;
    render: (props?: Record<string, string | boolean>) => MjmlNode[];
    htmlExtractionTag?: string;
};

export type EmailComponentCatalogItem = {
    slug: string;
    name: string;
    description: string;
    category: string;
    tokens: NonNullable<EmailComponentMeta["tokens"]>;
    options: NonNullable<EmailComponentMeta["options"]>;
};

export type CompileComponentInput = {
    slug: string;
    target: CompileTarget;
    props?: Record<string, string | boolean>;
    assetBaseUrl?: string;
};

export type CompileComponentOutput = Omit<
    CompileMjmlOutput,
    "componentHtml" | "componentMjml"
> & {
    kind: "component";
    slug: string;
    componentHtml: string;
    componentMjml: string;
    meta: EmailComponentCatalogItem;
};

const DEFAULT_COMPONENT_CATEGORY = "Primitive";

const toNodeList = <T>(value: T | T[]) =>
    Array.isArray(value) ? value : [value];

const expandedComponentRecords = expandVariantRecords({
    definitions: componentDefinitions,
    defaultCategory: DEFAULT_COMPONENT_CATEGORY,
    getMeta: (definition): EmailComponentMeta => definition.meta,
    formatName: ({ baseName, variantName, hasMultipleVariants }) =>
        hasMultipleVariants ? `${baseName} — ${variantName}` : baseName,
    createRecord: ({
        definition,
        meta,
        variant,
        slug,
        name,
        description,
        category,
        tokens,
    }): ExpandedComponentRecord => {
        return {
            catalog: {
                slug,
                name,
                description,
                category,
                tokens,
                options: meta.options ?? [],
            },
            render: (props = {}) =>
                toNodeList(
                    definition.component(
                        variant.id as keyof typeof definition.variants & string,
                        props
                    )
                ),
            htmlExtractionTag: meta.htmlExtraction?.targetTag,
        };
    },
});

const componentBySlug = new Map(
    expandedComponentRecords.map(
        (record) => [record.catalog.slug, record] as const
    )
);

export const listEmailComponents = () =>
    expandedComponentRecords.map((record) => record.catalog);

export const getEmailComponentMeta = (slug: string) => {
    const record = componentBySlug.get(slug);
    if (!record) {
        return null;
    }
    return record.catalog;
};

export const getEmailComponentOptions = (
    slug: string
): ComponentOptionReference[] | null => {
    const record = componentBySlug.get(slug);
    if (!record) {
        return null;
    }

    return record.catalog.options;
};

export const compileEmailComponent = ({
    slug,
    target,
    props = {},
    assetBaseUrl,
}: CompileComponentInput): CompileComponentOutput => {
    const parsedInput = compileComponentInputSchema.parse({
        slug,
        target,
        props,
        assetBaseUrl,
    });
    const record = componentBySlug.get(parsedInput.slug);

    if (!record) {
        throw new Error(`Unknown email component slug: ${parsedInput.slug}`);
    }

    const result = compileMjml({
        source: record.render(parsedInput.props),
        target: parsedInput.target,
        props: {},
        extractComponentName: record.catalog.slug,
        extractComponentTag: record.htmlExtractionTag,
        assetBaseUrl: parsedInput.assetBaseUrl,
    });

    return {
        ...result,
        kind: "component",
        slug: parsedInput.slug,
        componentHtml: result.componentHtml ?? result.html,
        componentMjml: result.componentMjml ?? result.renderedMjml,
        meta: record.catalog,
    };
};
