import type { MjmlNode } from "../src/lib/types";

import {
    defineEmailComponent,
    defineOption,
    defineOptions,
    mjmlAlignOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import { Section } from "../src/lib/mjml";

const highlightPadding = (index: number, count: number) => {
    // Single line
    if (count === 1) return "8px 12px";
    // First line in a group
    if (index === 0) return "8px 12px 2px";
    // Last line in a group
    if (index === count - 1) return "0 12px 8px";
    // Middle line
    return "0 12px";
};

const withHighlightedText = (text: string) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    return lines
        .map(
            (line, index) =>
                `<span style="display:inline-block;background-color:${tokens.color.brandDark};color:${tokens.color.textInvert};padding:${highlightPadding(index, lines.length)};line-height:1;">${line}</span>`
        )
        .join("<br/>");
};

const headline = defineEmailComponent({
    slug: "headline",
    variants: {
        highlight: {
            highlight: true,
        },
        invert: {
            sectionClass: "bg-invert",
            textClass: "s-email-text-headline fc-text-invert",
        },
    },
    optionsSchema: defineOptions([
        defineOption({
            name: "sectionClass",
            type: "string",
            initialValue: "bg-block",
            description: "Section class for the headline row.",
        }),
        defineOption({
            name: "textClass",
            type: "string",
            initialValue: "s-email-text-headline",
            description: "Text styling class for the headline node.",
        }),
        defineOption({
            name: "textAlign",
            type: "enum",
            values: mjmlAlignOptions,
            initialValue: "left",
            description: "MJML text alignment.",
        }),
        defineOption({
            name: "textContent",
            type: "string",
            initialValue: "Please verify\n your email address",
            description: "Headline copy content.",
        }),
        defineOption({
            name: "eyebrow",
            type: "string",
            initialValue: "",
            description:
                "Optional 14px label rendered above the headline. Empty hides it.",
        }),
        defineOption({
            name: "eyebrowClass",
            type: "string",
            initialValue: "s-email-text-subtitle",
            description: "Text styling class for the eyebrow node.",
        }),
        defineOption({
            name: "highlight",
            type: "boolean",
            initialValue: false,
            description:
                "When true, forces inline highlighted output; when false, disables highlighting.",
        }),
    ]),
    tokens: [],
    render: ({ options }): MjmlNode => {
        const hasEyebrow = options.eyebrow.trim() !== "";

        // 14px eyebrow label above the headline; its size comes from a token and
        // its styling class is configurable.
        const eyebrowNode: MjmlNode = {
            tagName: "mj-text",
            attributes: {
                "mj-class": options.eyebrowClass,
                "align": options.textAlign,
                "font-size": tokens.font.eyebrowSize,
                "padding-top": tokens.layout.containerYPadding,
                "padding-bottom": "0px",
                "padding-left": tokens.layout.containerXPadding,
                "padding-right": tokens.layout.containerXPadding,
            },
            content: options.eyebrow,
        };

        const headlineNode: MjmlNode = {
            tagName: "mj-text",
            attributes: {
                "mj-class": options.textClass,
                "align": options.textAlign,
                // When the eyebrow is present it provides the top padding.
                "padding-top": hasEyebrow
                    ? tokens.spacing.xs
                    : tokens.layout.containerYPadding,
                "padding-bottom": tokens.layout.containerYPadding,
                "padding-left": tokens.layout.containerXPadding,
                "padding-right": tokens.layout.containerXPadding,
            },
            content: options.highlight
                ? withHighlightedText(options.textContent)
                : options.textContent,
        };

        return Section([...(hasEyebrow ? [eyebrowNode] : []), headlineNode], {
            sectionClass: options.sectionClass,
        });
    },
});

export const Headline = headline.component;
export default headline;
