import {
    defineEmailComponent,
    defineOption,
    defineOptions,
    mjmlAlignOptions,
} from "../src/lib/schema";
import type { MjmlNode } from "../src/lib/types";

const header = defineEmailComponent({
    slug: "header",
    defaultVariant: "transactional",
    variants: {
        "brand": {
            sectionClass: "bg-brand",
        },
        "brand-center": {
            sectionClass: "bg-brand",
            logoAlign: "center",
        },
        "inverted": {
            sectionClass: "bg-invert",
            logoSrc: "/email/stack-overflow-logo-off-white.png",
        },
        "business": {
            sectionClass: "bg-invert",
            logoSrc: "/email/stack-overflow-business-logo.png",
            logoUrl: "https://stackoverflow.co/",
        },
    },
    tokens: [],
    optionsSchema: defineOptions([
        defineOption({
            name: "sectionClass",
            type: "string",
            initialValue: "bg-block",
            description: "Header section mj-class override.",
        }),
        defineOption({
            name: "logoSrc",
            type: "string",
            initialValue: "/email/stack-overflow-logo.png",
            description: "Logo image source path/URL override.",
        }),
        defineOption({
            name: "logoAlt",
            type: "string",
            initialValue: "Stack Overflow",
            description: "Logo alt text.",
        }),
        defineOption({
            name: "logoUrl",
            type: "string",
            initialValue: "https://stackoverflow.com/",
            description: "Logo link destination.",
        }),
        defineOption({
            name: "logoWidth",
            type: "string",
            initialValue: "158px",
            description: "Logo width override.",
        }),
        defineOption({
            name: "logoAlign",
            type: "enum",
            values: mjmlAlignOptions,
            initialValue: "left",
            description: "MJML image alignment override.",
        }),
    ]),
    render: ({ options }): MjmlNode => ({
        tagName: "mj-section",
        attributes: {
            "mj-class": options.sectionClass,
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
                            src: options.logoSrc,
                            alt: options.logoAlt,
                            width: options.logoWidth,
                            href: options.logoUrl,
                            align: options.logoAlign,
                            padding: "0px",
                        },
                    },
                ],
            },
        ],
    }),
});

export const Header = header.component;
export default header;
