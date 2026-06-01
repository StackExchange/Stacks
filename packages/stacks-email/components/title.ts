import type { EmailComponentMeta, MjmlNode } from "../types";
import { z } from "zod/v4";

import { tokens } from "../tokens";
import { Section } from "./section";

export type TitleVariantId = "default" | "invert";

const titleOptionsSchema = z.object({
    sectionClass: z.string().optional(),
    textClass: z.string().optional(),
    textAlign: z.string().optional(),
    textContent: z.string().optional(),
});

type TitleOptions = z.input<typeof titleOptionsSchema>;

const titleVariantDefaults: Record<
    TitleVariantId,
    {
        TITLE_SECTION_CLASS: string;
        TITLE_TEXT_CLASS: string;
        TITLE_TEXT_ALIGN: string;
        TITLE_TEXT_CONTENT: string;
    }
> = {
    default: {
        TITLE_SECTION_CLASS: "bg-block",
        TITLE_TEXT_CLASS: "s-email-text-title",
        TITLE_TEXT_ALIGN: "left",
        TITLE_TEXT_CONTENT: "Featured",
    },
    invert: {
        TITLE_SECTION_CLASS: "bg-invert",
        TITLE_TEXT_CLASS: "s-email-text-title fc-text-invert",
        TITLE_TEXT_ALIGN: "left",
        TITLE_TEXT_CONTENT: "Featured",
    },
};

const titleOptionRows: NonNullable<EmailComponentMeta["options"]> = [
    {
        argument: "variant",
        type: '"default" | "invert"',
        description: "Selects baseline section and text styling.",
    },
    {
        argument: "options.sectionClass",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Section mj-class override.",
    },
    {
        argument: "options.textClass",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Title text mj-class override.",
    },
    {
        argument: "options.textAlign",
        type: "string",
        defaultValue: "left",
        defaultValueCode: true,
        description: "MJML text alignment override.",
    },
    {
        argument: "options.textContent",
        type: "string",
        defaultValue: "Featured",
        defaultValueCode: true,
        description: "Title copy content.",
    },
];

const getTitleVariantProps = (variant: TitleVariantId) =>
    titleVariantDefaults[variant] ?? titleVariantDefaults.default;

export const Title = (
    variant: TitleVariantId,
    options: TitleOptions = {}
): MjmlNode => {
    const parsedOptions = titleOptionsSchema.safeParse(options);
    const normalizedOptions = parsedOptions.success ? parsedOptions.data : options;

    return Section(
        [
            {
                tagName: "mj-text",
                attributes: {
                    "mj-class":
                        normalizedOptions.textClass ??
                        getTitleVariantProps(variant).TITLE_TEXT_CLASS,
                    align:
                        normalizedOptions.textAlign ??
                        getTitleVariantProps(variant).TITLE_TEXT_ALIGN,
                    "padding-top": tokens.layout.containerYPadding,
                    "padding-bottom": tokens.layout.containerYPadding,
                    "padding-left": tokens.layout.containerXPadding,
                    "padding-right": tokens.layout.containerXPadding,
                },
                content:
                    normalizedOptions.textContent ??
                    getTitleVariantProps(variant).TITLE_TEXT_CONTENT,
            },
        ],
        {
            sectionClass:
                normalizedOptions.sectionClass ??
                getTitleVariantProps(variant).TITLE_SECTION_CLASS,
        }
    );
};

export const meta: EmailComponentMeta = {
    slug: "title",
    defaultVariant: "default",
    variants: [
        {
            id: "default",
            props: titleVariantDefaults.default,
        },
        {
            id: "invert",
            props: titleVariantDefaults.invert,
        },
    ],
    tokens: [],
    options: titleOptionRows,
};

export const source: MjmlNode[] = [
    Title("default", {
        sectionClass: "{{TITLE_SECTION_CLASS}}",
        textClass: "{{TITLE_TEXT_CLASS}}",
        textAlign: "{{TITLE_TEXT_ALIGN}}",
        textContent: "{{TITLE_TEXT_CONTENT}}",
    }),
];

export const definition = { meta, source } as const;
export default definition;
