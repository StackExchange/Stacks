import {
    defineEmailComponent,
    defineOption,
    defineOptions,
    mjmlAlignOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import type { MjmlNode } from "../src/lib/types";

const button = defineEmailComponent({
    slug: "button",
    defaultVariant: "primary",
    htmlExtraction: {
        targetTag: "mj-button",
    },
    variants: {
        primary: {
            className: "button",
            cssClass: "button-hover",
            text: "Filled button",
            align: "left",
        },
        secondary: {
            className: "button button__tonal",
            cssClass: "button-hover",
            text: "Tonal button",
            align: "left",
        },
        inverted: {
            className: "button button__inverted",
            cssClass: "button-hover-inverted",
            text: "Inverted button",
            align: "left",
        },
    },
    tokens: [
        {
            token: "BUTTON_LABEL",
            description: "The text displayed for the button.",
        },
        {
            token: "BUTTON_URL",
            description: "Destination URL for the button.",
        },
    ],
    optionsSchema: defineOptions([
        defineOption({
            name: "align",
            type: "enum",
            values: mjmlAlignOptions,
            initialValue: "left",
            description: "Maps to the MJML align attribute.",
        }),
        defineOption({
            name: "className",
            type: "string",
            initialValue: "button",
            description: "Button mj-class override.",
        }),
        defineOption({
            name: "cssClass",
            type: "string",
            initialValue: "button-hover",
            description: "Raw CSS class applied to the button node.",
        }),
        defineOption({
            name: "href",
            type: "string",
            initialValue: "[[BUTTON_URL]]",
            description: "Target link URL.",
        }),
        defineOption({
            name: "text",
            type: "string",
            initialValue: "[[BUTTON_LABEL]]",
            description: "Button label content.",
        }),
    ]),
    render: ({ options }): MjmlNode => ({
        tagName: "mj-button",
        attributes: {
            "mj-class": options.className,
            "css-class": options.cssClass,
            "href": options.href,
            "align": options.align,
            "padding": `0px ${tokens.layout.containerXPadding}`,
        },
        content: options.text,
    }),
});

export const Button = button.component;
export default button;
