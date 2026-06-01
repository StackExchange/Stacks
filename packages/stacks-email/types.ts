export type MjmlAttributeValue = string | number | boolean;

export type MjmlNode = {
    tagName: string;
    attributes?: Record<string, MjmlAttributeValue>;
    children?: MjmlNode[];
    content?: string;
};

export type VariantProps = Record<string, string>;

export type EmailVariant = {
    id: string;
    name?: string;
    description?: string;
    props: VariantProps;
};

export type EmailTokenReference = {
    token: string;
    description: string;
};

export type ComponentCategory =
    | "Structure"
    | "Content"
    | "Layout"
    | "Primitive"
    | "Interactive";

export type ComponentVariant = EmailVariant;
export type ComponentTokenReference = EmailTokenReference;
export type ComponentOptionReference = {
    argument: string;
    type: string;
    defaultValue?: string;
    defaultValueCode?: boolean;
    description: string;
};

export type EmailComponentMeta = {
    slug: string;
    name?: string;
    description?: string;
    category?: ComponentCategory;
    variants: ComponentVariant[];
    defaultVariant?: string;
    tokens?: ComponentTokenReference[];
    options?: ComponentOptionReference[];
    htmlExtraction?: {
        targetTag: string;
    };
};

export type EmailComponentRecord = {
    meta: EmailComponentMeta;
    source: string;
};

export type EmailTemplateCategory =
    | "Transactional"
    | "Marketing"
    | "Onboarding";

export type EmailTemplateVariant = EmailVariant;
export type EmailTemplateTokenReference = EmailTokenReference;

export type EmailTemplateMeta = {
    slug: string;
    name?: string;
    description?: string;
    category?: EmailTemplateCategory;
    variants: EmailTemplateVariant[];
    defaultVariant?: string;
    tokens?: EmailTemplateTokenReference[];
};

export type EmailTemplateRecord = {
    meta: EmailTemplateMeta;
    source: string;
};

export type EmailTemplateModule = {
    meta: EmailTemplateMeta;
    document: (variant?: EmailTemplateVariant) => MjmlNode;
};
