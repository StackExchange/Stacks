import { applyTemplateProps } from "./src/lib/pipeline/template";
import type {
    ComponentVariant,
    EmailComponentMeta,
    EmailComponentRecord,
    EmailTemplateMeta,
    EmailTemplateRecord,
    EmailTemplateVariant,
    EmailVariant,
} from "./types";

const getBaseVariantById = <TVariant extends EmailVariant>(
    variants: TVariant[],
    defaultVariant: string | undefined,
    variantId: string | null | undefined
) =>
    variants.find((variant) => variant.id === variantId) ??
    variants.find((variant) => variant.id === defaultVariant) ??
    variants[0];

export const getVariantById = (
    meta: EmailComponentMeta,
    variantId: string | null | undefined
) => getBaseVariantById(meta.variants, meta.defaultVariant, variantId);

export const getTemplateVariantById = (
    meta: EmailTemplateMeta,
    variantId: string | null | undefined
) => getBaseVariantById(meta.variants, meta.defaultVariant, variantId);

const renderSource = (
    source: string,
    variant: ComponentVariant | EmailTemplateVariant
) => applyTemplateProps(source, variant.props);

export const renderVariantSource = (
    record: EmailComponentRecord,
    variant: ComponentVariant
) => renderSource(record.source, variant);

export const renderTemplateVariantSource = (
    record: EmailTemplateRecord,
    variant: EmailTemplateVariant
) => renderSource(record.source, variant);
