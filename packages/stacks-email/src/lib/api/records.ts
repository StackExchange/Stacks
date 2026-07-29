import type { EmailTokenReference, EmailVariant } from "../types";

type VariantMeta = {
    slug: string;
    name?: string;
    description?: string;
    category?: string;
    variants: readonly EmailVariant[];
    defaultVariant?: string;
    tokens?: readonly EmailTokenReference[];
};

type ExpandedVariantInput<TDefinition, TMeta extends VariantMeta> = {
    definition: TDefinition;
    meta: TMeta;
    variant: TMeta["variants"][number];
    slug: string;
    baseName: string;
    variantName: string;
    name: string;
    description: string;
    category: NonNullable<TMeta["category"]>;
    tokens: EmailTokenReference[];
    hasMultipleVariants: boolean;
};

type ExpandVariantRecordsInput<
    TDefinition,
    TMeta extends VariantMeta,
    TRecord,
> = {
    definitions: readonly TDefinition[];
    defaultCategory: NonNullable<TMeta["category"]>;
    getMeta: (definition: TDefinition) => TMeta;
    formatName: (input: {
        baseName: string;
        variantName: string;
        hasMultipleVariants: boolean;
    }) => string;
    createRecord: (input: ExpandedVariantInput<TDefinition, TMeta>) => TRecord;
};

export const toLabel = (value: string) =>
    value
        .split(/[-_]/g)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

export const expandVariantRecords = <
    TDefinition,
    TMeta extends VariantMeta,
    TRecord,
>({
    definitions,
    defaultCategory,
    getMeta,
    formatName,
    createRecord,
}: ExpandVariantRecordsInput<TDefinition, TMeta, TRecord>) =>
    definitions
        .flatMap((definition) => {
            const meta = getMeta(definition);
            const baseName = meta.name ?? toLabel(meta.slug);
            const baseDescription = meta.description ?? "";
            const hasMultipleVariants = meta.variants.length > 1;

            return meta.variants.map((variant, index) => {
                const isDefault =
                    variant.id === meta.defaultVariant ||
                    (!meta.defaultVariant && index === 0);
                const slug = isDefault
                    ? meta.slug
                    : `${meta.slug}-${variant.id}`;
                const variantName = variant.name ?? toLabel(variant.id);
                const description = hasMultipleVariants
                    ? (variant.description ?? baseDescription)
                    : baseDescription;

                return {
                    definition,
                    meta,
                    variant,
                    slug,
                    baseName,
                    variantName,
                    name: formatName({
                        baseName,
                        variantName,
                        hasMultipleVariants,
                    }),
                    description,
                    category: meta.category ?? defaultCategory,
                    tokens: [...(meta.tokens ?? [])],
                    hasMultipleVariants,
                };
            });
        })
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((input) => createRecord(input));
