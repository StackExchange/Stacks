import { mjmlJsonToString } from "../../../mjml-json";
import { componentDefinitions } from "../../../registry";
import { renderVariantSource } from "../../../variants";
import type { CompileTarget } from "../../../tokens";
import type {
    ComponentCategory,
    EmailComponentMeta,
    ComponentOptionReference,
} from "../../../types";
import { compileMjml, type CompileMjmlOutput } from "../pipeline/compile";
import { compileComponentInputSchema } from "./validation";

type ExpandedComponentRecord = {
    slug: string;
    name: string;
    description: string;
    category: ComponentCategory;
    tokens: NonNullable<EmailComponentMeta["tokens"]>;
    options: NonNullable<EmailComponentMeta["options"]>;
    source: string;
    htmlExtractionTag?: string;
};

export type EmailComponentCatalogItem = {
    slug: string;
    name: string;
    description: string;
    category: ComponentCategory;
    tokens: NonNullable<EmailComponentMeta["tokens"]>;
    options: NonNullable<EmailComponentMeta["options"]>;
};

export type CompileComponentInput = {
    slug: string;
    target: CompileTarget;
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

const DEFAULT_COMPONENT_CATEGORY: ComponentCategory = "Primitive";

const toLabel = (value: string) =>
    value
        .split(/[-_]/g)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

const expandComponentRecords = (): ExpandedComponentRecord[] =>
    componentDefinitions
        .map((definition) => ({
            meta: definition.meta,
            source: mjmlJsonToString(definition.source),
        }))
        .flatMap((record) => {
            const { meta } = record;

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
                            ? `${baseName} — ${variantName}`
                            : baseName,
                    description:
                        meta.variants.length > 1
                            ? variantDescription
                            : baseDescription,
                    category: meta.category ?? DEFAULT_COMPONENT_CATEGORY,
                    tokens: meta.tokens ?? [],
                    options: meta.options ?? [],
                    source: renderVariantSource(record, variant),
                    htmlExtractionTag: meta.htmlExtraction?.targetTag,
                };
            });
        })
        .sort((a, b) => a.name.localeCompare(b.name));

const expandedComponentRecords = expandComponentRecords();

const componentBySlug = new Map(
    expandedComponentRecords.map((record) => [record.slug, record] as const)
);

const toCatalogItem = (
    record: ExpandedComponentRecord
): EmailComponentCatalogItem => ({
    slug: record.slug,
    name: record.name,
    description: record.description,
    category: record.category,
    tokens: record.tokens,
    options: record.options,
});

export const listEmailComponents = () =>
    expandedComponentRecords.map((record) => toCatalogItem(record));

export const getEmailComponentMeta = (slug: string) => {
    const record = componentBySlug.get(slug);
    if (!record) {
        return null;
    }
    return toCatalogItem(record);
};

export const getEmailComponentOptions = (
    slug: string
): ComponentOptionReference[] | null => {
    const record = componentBySlug.get(slug);
    if (!record) {
        return null;
    }

    return record.options;
};

export const compileEmailComponent = ({
    slug,
    target,
}: CompileComponentInput): CompileComponentOutput => {
    const parsedInput = compileComponentInputSchema.parse({ slug, target });
    const record = componentBySlug.get(parsedInput.slug);

    if (!record) {
        throw new Error(`Unknown email component slug: ${parsedInput.slug}`);
    }

    const result = compileMjml({
        mjml: record.source,
        target: parsedInput.target,
        props: {},
        extractComponentName: record.slug,
        extractComponentTag: record.htmlExtractionTag,
    });

    return {
        ...result,
        kind: "component",
        slug: parsedInput.slug,
        componentHtml: result.componentHtml ?? result.html,
        componentMjml: result.componentMjml ?? result.renderedMjml,
        meta: toCatalogItem(record),
    };
};
