import type { MjmlNode } from "../src/lib/types";

import {
    defineEmailComponent,
    defineOption,
    defineOptions,
    mjmlAlignOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import { Section } from "../src/lib/mjml";

const withHighlightedText = (text: string) =>
    `<span style="display:inline-block;background-color:${tokens.color.brandDark};color:${tokens.color.textInvert};padding:6px 10px;">${text}</span>`;

const headline = defineEmailComponent({
    slug: "headline",
    variants: {
        highlight: {
            highlight: true,
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
            initialValue: "Please verify your email address",
            description: "Headline copy content.",
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
    render: ({ options }): MjmlNode =>
        Section(
            [
                {
                    tagName: "mj-text",
                    attributes: {
                        "mj-class": options.textClass,
                        "align": options.textAlign,
                        "padding-top": tokens.layout.containerYPadding,
                        "padding-bottom": tokens.layout.containerYPadding,
                        "padding-left": tokens.layout.containerXPadding,
                        "padding-right": tokens.layout.containerXPadding,
                    },
                    content: options.highlight
                        ? withHighlightedText(options.textContent)
                        : options.textContent,
                },
            ],
            {
                sectionClass: options.sectionClass,
            }
        ),
});

export const Headline = headline.component;
export default headline;
