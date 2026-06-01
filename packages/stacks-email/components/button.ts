import type { EmailComponentMeta, MjmlNode } from "../types";
import { z } from "zod/v4";

import { tokens } from "../tokens";
import { Section } from "./section";

const buttonOptionsSchema = z.object({
    align: z.string().optional(),
    className: z.string().optional(),
    cssClass: z.string().optional(),
    href: z.string().optional(),
    text: z.string().optional(),
});

type ButtonOptions = z.input<typeof buttonOptionsSchema>;

const buttonOptionRows: NonNullable<EmailComponentMeta["options"]> = [
    {
        argument: "variant",
        type: '"primary" | "secondary" | "inverted"',
        description: "Selects the button style baseline.",
    },
    {
        argument: "options.align",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Maps to the MJML align attribute.",
    },
    {
        argument: "options.className",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Button mj-class override.",
    },
    {
        argument: "options.cssClass",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Raw CSS class applied to the button node.",
    },
    {
        argument: "options.href",
        type: "string",
        defaultValue: "[[BUTTON_URL]]",
        defaultValueCode: true,
        description: "Target link URL.",
    },
    {
        argument: "options.text",
        type: "string",
        defaultValue: "[[BUTTON_LABEL]]",
        defaultValueCode: true,
        description: "Button label content.",
    },
];

export const meta: EmailComponentMeta = {
    slug: "button",
    defaultVariant: "primary",
    htmlExtraction: {
        targetTag: "mj-button",
    },
    variants: [
        {
            id: "primary",
            props: {
                BUTTON_CLASS: "button",
                BUTTON_HOVER_CLASS: "button-hover",
                BUTTON_TEXT: "Filled button",
                ALIGNMENT: "left",
            },
        },
        {
            id: "secondary",
            props: {
                BUTTON_CLASS: "button button__tonal",
                BUTTON_HOVER_CLASS: "button-hover",
                BUTTON_TEXT: "Tonal button",
                ALIGNMENT: "left",
            },
        },
        {
            id: "inverted",
            props: {
                BUTTON_CLASS: "button button__inverted",
                BUTTON_HOVER_CLASS: "button-hover-inverted",
                BUTTON_TEXT: "Inverted button",
                ALIGNMENT: "left",
            },
        },
    ],
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
    options: buttonOptionRows,
};

export type ButtonVariantId = "primary" | "secondary" | "inverted";

const getButtonVariantProps = (variant: ButtonVariantId) =>
    meta.variants.find((entry) => entry.id === variant)?.props ??
    meta.variants[0].props;

export const Button = (
    variant: ButtonVariantId,
    options: ButtonOptions = {}
): MjmlNode => {
    const parsedOptions = buttonOptionsSchema.safeParse(options);
    const normalizedOptions = parsedOptions.success ? parsedOptions.data : options;
    const variantDefaults = getButtonVariantProps(variant);

    return {
        tagName: "mj-button",
        attributes: {
            "mj-class": normalizedOptions.className ?? variantDefaults.BUTTON_CLASS,
            "css-class":
                normalizedOptions.cssClass ?? variantDefaults.BUTTON_HOVER_CLASS,
            "href": normalizedOptions.href ?? "[[BUTTON_URL]]",
            "align": normalizedOptions.align ?? variantDefaults.ALIGNMENT,
            "padding": `0px ${tokens.layout.containerXPadding}`,
        },
        content: normalizedOptions.text ?? "[[BUTTON_LABEL]]",
    };
};

export const source: MjmlNode[] = [
    Section([
        Button("primary", {
            className: "{{BUTTON_CLASS}}",
            cssClass: "{{BUTTON_HOVER_CLASS}}",
            href: "[[BUTTON_URL]]",
            align: "{{ALIGNMENT}}",
            text: "[[BUTTON_LABEL]]",
        }),
    ]),
];

export const definition = { meta, source } as const;

export default definition;
