import type { EmailComponentMeta, MjmlNode } from "../types";
import { z } from "zod/v4";

export type HeaderVariantId = "transactional" | "brand" | "brand-center" | "inverted" | "business";

const headerOptionsSchema = z.object({
    sectionClass: z.string().optional(),
    logoSrc: z.string().optional(),
    logoAlt: z.string().optional(),
    logoUrl: z.string().optional(),
    logoWidth: z.string().optional(),
    logoAlign: z.string().optional(),
});

type HeaderOptions = z.input<typeof headerOptionsSchema>;

type HeaderVariantProps = {
    HEADER_SECTION_CLASS: string;
    HEADER_LOGO_SRC: string;
    HEADER_LOGO_ALT: string;
    HEADER_LOGO_URL: string;
    HEADER_LOGO_WIDTH: string;
    HEADER_LOGO_ALIGN: string;
};

const sharedVariantProps: Omit<HeaderVariantProps, "HEADER_SECTION_CLASS"> = {
    HEADER_LOGO_SRC: "/email/stack-overflow-logo.png",
    HEADER_LOGO_ALT: "Stack Overflow",
    HEADER_LOGO_URL: "https://stackoverflow.com/",
    HEADER_LOGO_WIDTH: "158px",
    HEADER_LOGO_ALIGN: "left",
};

const headerVariantDefaults: Record<HeaderVariantId, HeaderVariantProps> = {
    transactional: {
        ...sharedVariantProps,
        HEADER_SECTION_CLASS: "bg-block",
    },
    brand: {
        ...sharedVariantProps,
        HEADER_SECTION_CLASS: "bg-brand",
    },
    "brand-center": {
        ...sharedVariantProps,
        HEADER_SECTION_CLASS: "bg-brand",
        HEADER_LOGO_ALIGN: "center",
    },
    inverted: {
        ...sharedVariantProps,
        HEADER_SECTION_CLASS: "bg-invert",
        HEADER_LOGO_SRC: "/email/stack-overflow-logo-off-white.png",
    },
    business: {
        ...sharedVariantProps,
        HEADER_SECTION_CLASS: "bg-invert",
        HEADER_LOGO_SRC: "/email/stack-overflow-business-logo.png",
        HEADER_LOGO_URL: "https://stackoverflow.co/",
    },
};

const headerOptionRows: NonNullable<EmailComponentMeta["options"]> = [
    {
        argument: "variant",
        type: '"transactional" | "brand" | "brand-center" | "inverted" | "business"',
        description: "Selects section background and logo defaults.",
    },
    {
        argument: "options.sectionClass",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Header section mj-class override.",
    },
    {
        argument: "options.logoSrc",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Logo image source path/URL override.",
    },
    {
        argument: "options.logoAlt",
        type: "string",
        defaultValue: "Stack Overflow",
        defaultValueCode: true,
        description: "Logo alt text.",
    },
    {
        argument: "options.logoUrl",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Logo link destination.",
    },
    {
        argument: "options.logoWidth",
        type: "string",
        defaultValue: "158px",
        defaultValueCode: true,
        description: "Logo width override.",
    },
    {
        argument: "options.logoAlign",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "MJML image alignment override.",
    },
];

export const Header = (
    variant: HeaderVariantId,
    options: HeaderOptions = {}
): MjmlNode => {
    const parsedOptions = headerOptionsSchema.safeParse(options);
    const normalizedOptions = parsedOptions.success ? parsedOptions.data : options;
    const variantDefaults = headerVariantDefaults[variant];

    return {
        tagName: "mj-section",
        attributes: {
            "mj-class":
                normalizedOptions.sectionClass ?? variantDefaults.HEADER_SECTION_CLASS,
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-left": "24px",
            "padding-right": "24px",
        },
        children: [
            {
                tagName: "mj-column",
                children: [
                    {
                        tagName: "mj-image",
                        attributes: {
                            src: normalizedOptions.logoSrc ?? variantDefaults.HEADER_LOGO_SRC,
                            alt: normalizedOptions.logoAlt ?? variantDefaults.HEADER_LOGO_ALT,
                            width:
                                normalizedOptions.logoWidth ??
                                variantDefaults.HEADER_LOGO_WIDTH,
                            href: normalizedOptions.logoUrl ?? variantDefaults.HEADER_LOGO_URL,
                            align: normalizedOptions.logoAlign ?? variantDefaults.HEADER_LOGO_ALIGN,
                            padding: "0px",
                        },
                    },
                ],
            },
        ],
    };
};

export const meta: EmailComponentMeta = {
    slug: "header",
    defaultVariant: "transactional",
    variants: [
        {
            id: "transactional",
            props: headerVariantDefaults.transactional,
        },
        {
            id: "brand",
            props: headerVariantDefaults.brand,
        },
        {
            id: "brand-center",
            props: headerVariantDefaults["brand-center"],
        },
        {
            id: "inverted",
            props: headerVariantDefaults.inverted,
        },
        {
            id: "business",
            props: headerVariantDefaults.business,
        },
    ],
    tokens: [],
    options: headerOptionRows,
};

export const source: MjmlNode[] = [
    {
        ...Header("transactional", {
            sectionClass: "{{HEADER_SECTION_CLASS}}",
            logoSrc: "{{HEADER_LOGO_SRC}}",
            logoAlt: "{{HEADER_LOGO_ALT}}",
            logoWidth: "{{HEADER_LOGO_WIDTH}}",
            logoUrl: "{{HEADER_LOGO_URL}}",
            logoAlign: "{{HEADER_LOGO_ALIGN}}",
        }),
    },
];

export const definition = { meta, source } as const;

export default definition;
