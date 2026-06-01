import type { EmailComponentMeta, MjmlNode } from "../types";
import { z } from "zod/v4";

import { tokens } from "../tokens";
import { Section } from "./section";

export type HeadlineVariantId = "default" | "highlight";

const headlineOptionsSchema = z.object({
    sectionClass: z.string().optional(),
    textClass: z.string().optional(),
    textAlign: z.string().optional(),
    textContent: z.string().optional(),
    textHighlight: z.union([z.boolean(), z.string()]).optional(),
    textHighlightStart: z.string().optional(),
    textHighlightEnd: z.string().optional(),
});

type HeadlineOptions = z.input<typeof headlineOptionsSchema>;

const headlineOptionRows: NonNullable<EmailComponentMeta["options"]> = [
    {
        argument: "variant",
        type: '"default" | "highlight"',
        description: "Selects baseline highlight wrapper behavior.",
    },
    {
        argument: "options.sectionClass",
        type: "string",
        defaultValue: "bg-block",
        defaultValueCode: true,
        description: "Section class for the headline row.",
    },
    {
        argument: "options.textClass",
        type: "string",
        defaultValue: "s-email-text-headline",
        defaultValueCode: true,
        description: "Text styling class for the headline node.",
    },
    {
        argument: "options.textAlign",
        type: "string",
        defaultValue: "left",
        defaultValueCode: true,
        description: "MJML text alignment.",
    },
    {
        argument: "options.textContent",
        type: "string",
        defaultValue: "Please verify your email address",
        defaultValueCode: true,
        description: "Headline copy content.",
    },
    {
        argument: "options.textHighlight",
        type: "boolean | string",
        defaultValue: "Variant behavior when omitted",
        defaultValueCode: false,
        description:
            "When true, forces inline highlighted output; when false, disables highlighting.",
    },
    {
        argument: "options.textHighlightStart",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Optional opening wrapper around headline content.",
    },
    {
        argument: "options.textHighlightEnd",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Optional closing wrapper around headline content.",
    },
];

const headlineVariantDefaults: Record<
    HeadlineVariantId,
    {
        HEADLINE_SECTION_CLASS: string;
        HEADLINE_TEXT_CLASS: string;
        HEADLINE_TEXT_ALIGN: string;
        HEADLINE_TEXT_CONTENT: string;
        HEADLINE_TEXT_HIGHLIGHT_START: string;
        HEADLINE_TEXT_HIGHLIGHT_END: string;
    }
> = {
    default: {
        HEADLINE_SECTION_CLASS: "bg-block",
        HEADLINE_TEXT_CLASS: "s-email-text-headline",
        HEADLINE_TEXT_ALIGN: "left",
        HEADLINE_TEXT_CONTENT: "Please verify your email address",
        HEADLINE_TEXT_HIGHLIGHT_START: "",
        HEADLINE_TEXT_HIGHLIGHT_END: "",
    },
    highlight: {
        HEADLINE_SECTION_CLASS: "bg-block",
        HEADLINE_TEXT_CLASS: "s-email-text-headline",
        HEADLINE_TEXT_ALIGN: "left",
        HEADLINE_TEXT_CONTENT: "Please verify your email address",
        HEADLINE_TEXT_HIGHLIGHT_START: `<span style="display:inline-block;background-color:${tokens.color.brandDark};color:${tokens.color.textInvert};padding:6px 10px;">`,
        HEADLINE_TEXT_HIGHLIGHT_END: "</span>",
    },
};

const getHeadlineVariantProps = (variant: HeadlineVariantId) =>
    headlineVariantDefaults[variant] ?? headlineVariantDefaults.default;

const withHighlightedText = (text: string) =>
    `<span style="display:inline-block;background-color:${tokens.color.brandDark};color:${tokens.color.textInvert};padding:6px 10px;">${text}</span>`;

export const Headline = (
    variant: HeadlineVariantId,
    options: HeadlineOptions = {}
): MjmlNode => {
    const parsedOptions = headlineOptionsSchema.safeParse(options);
    const normalizedOptions = parsedOptions.success ? parsedOptions.data : options;
    const defaults = getHeadlineVariantProps(variant);
    const textContent =
        normalizedOptions.textContent ?? defaults.HEADLINE_TEXT_CONTENT;
    const textHighlightStart =
        normalizedOptions.textHighlightStart ??
        defaults.HEADLINE_TEXT_HIGHLIGHT_START;
    const textHighlightEnd =
        normalizedOptions.textHighlightEnd ?? defaults.HEADLINE_TEXT_HIGHLIGHT_END;
    const textHighlightFlag = normalizedOptions.textHighlight;
    const textHighlight =
        textHighlightFlag === undefined
            ? null
            : String(textHighlightFlag).trim().toLowerCase() === "true";
    const renderedTextContent =
        textHighlight === null
            ? `${textHighlightStart}${textContent}${textHighlightEnd}`
            : textHighlight
              ? withHighlightedText(textContent)
              : textContent;

    return Section(
        [
            {
                tagName: "mj-text",
                attributes: {
                    "mj-class":
                        normalizedOptions.textClass ?? defaults.HEADLINE_TEXT_CLASS,
                    align: normalizedOptions.textAlign ?? defaults.HEADLINE_TEXT_ALIGN,
                    "padding-top": tokens.layout.containerYPadding,
                    "padding-bottom": tokens.layout.containerYPadding,
                    "padding-left": tokens.layout.containerXPadding,
                    "padding-right": tokens.layout.containerXPadding,
                },
                content: renderedTextContent,
            },
        ],
        {
            sectionClass:
                normalizedOptions.sectionClass ?? defaults.HEADLINE_SECTION_CLASS,
        }
    );
};

export const meta: EmailComponentMeta = {
    slug: "headline",
    defaultVariant: "default",
    variants: [
        {
            id: "default",
            props: headlineVariantDefaults.default,
        },
        {
            id: "highlight",
            props: headlineVariantDefaults.highlight,
        },
    ],
    tokens: [],
    options: headlineOptionRows,
};

export const source: MjmlNode[] = [
    Headline("default", {
        sectionClass: "{{HEADLINE_SECTION_CLASS}}",
        textClass: "{{HEADLINE_TEXT_CLASS}}",
        textAlign: "{{HEADLINE_TEXT_ALIGN}}",
        textContent: "{{HEADLINE_TEXT_CONTENT}}",
        textHighlightStart: "{{HEADLINE_TEXT_HIGHLIGHT_START}}",
        textHighlightEnd: "{{HEADLINE_TEXT_HIGHLIGHT_END}}",
    }),
];

export const definition = { meta, source } as const;
export default definition;
