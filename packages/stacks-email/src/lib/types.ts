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

export type ComponentOptionReference = {
    argument: string;
    type: string;
    defaultValue?: string;
    renderDefaultValueAsCode?: boolean;
    description: string;
};

export type EmailComponentMeta = {
    slug: string;
    name?: string;
    description?: string;
    category?: string;
    variants: EmailVariant[];
    defaultVariant?: string;
    tokens?: EmailTokenReference[];
    options?: ComponentOptionReference[];
    htmlExtraction?: {
        targetTag: string;
    };
};

export type EmailTemplateMeta = {
    slug: string;
    name?: string;
    description?: string;
    category?: string;
    variants: EmailVariant[];
    defaultVariant?: string;
    tokens?: EmailTokenReference[];
    options?: ComponentOptionReference[];
};
