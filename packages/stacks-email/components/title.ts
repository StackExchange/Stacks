import {
    defineEmailComponent,
    defineOption,
    defineOptions,
    mjmlAlignOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import type { MjmlNode } from "../src/lib/types";
import { Section } from "../src/lib/mjml";

const title = defineEmailComponent({
    slug: "title",
    variants: {
        invert: {
            sectionClass: "bg-invert",
            textClass: "s-email-text-title fc-text-invert",
        },
    },
    optionsSchema: defineOptions([
        defineOption({
            name: "sectionClass",
            type: "string",
            initialValue: "bg-block",
            description: "Section mj-class override.",
        }),
        defineOption({
            name: "textClass",
            type: "string",
            initialValue: "s-email-text-title",
            description: "Title text mj-class override.",
        }),
        defineOption({
            name: "textAlign",
            type: "enum",
            values: mjmlAlignOptions,
            initialValue: "left",
            description: "MJML text alignment override.",
        }),
        defineOption({
            name: "textContent",
            type: "string",
            initialValue: "Featured",
            description: "Title copy content.",
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
                    content: options.textContent,
                },
            ],
            {
                sectionClass: options.sectionClass,
            }
        ),
});

export const Title = title.component;
export default title;
