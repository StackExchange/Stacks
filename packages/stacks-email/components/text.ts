import {
    defineEmailComponent,
    defineOption,
    defineOptions,
    mjmlAlignOptions,
} from "../src/lib/schema";
import { renderEmailBodyMarkdown } from "../src/lib/markdown";
import { tokens } from "../src/lib/tokens";
import type { MjmlNode } from "../src/lib/types";
import { Section } from "../src/lib/mjml";

const TEMPLATE_PROP_PATTERN = /^\{\{[A-Z0-9_]+\}\}$/;

const looksLikeHtml = (value: string) => /<\/?[a-z][\s\S]*>/i.test(value);

const renderTextContent = (value: string | undefined) => {
    const content = value?.trim() ?? "";

    if (TEMPLATE_PROP_PATTERN.test(content) || looksLikeHtml(content)) {
        return content;
    }

    return renderEmailBodyMarkdown(content);
};

export const textNode = (
    content: string,
    attributes: NonNullable<MjmlNode["attributes"]>
): MjmlNode => ({
    tagName: "mj-text",
    attributes,
    content: renderTextContent(content),
});

const bodyContent = `
Dear [[FIRST_NAME]],

The entire [software development lifecycle](https://stackoverflow.com) has been dramatically changed by AI, introducing a new model for team organization and leadership.

AI has accelerated coding, allowing developers to dedicate more time to complex and creative tasks. **Simultaneously**, it enables teams to clear bottlenecks of repetitive tasks [through automation](https://stackoverflow.com), allowing leaders to create more agile teams and focus on higher-level strategic problems.

Ultimately, it is really AI’s ability to automate the __"work around the work"__ that is proving to be transformative for organizations.
`;

const centeredContent = `
A starting point for more simple transactional emails with a single, center-aligned message. It can [contain links](https://stackoverflow.com) or **rich text**.
`;

const text = defineEmailComponent({
    slug: "text",
    defaultVariant: "body",
    variants: {
        centered: {
            textAlign: "center",
            textContent: centeredContent,
        },
    },
    tokens: [
        {
            token: "FIRST_NAME",
            description: "Recipient first name for personalized body copy.",
        },
    ],
    optionsSchema: defineOptions([
        defineOption({
            name: "columnClass",
            type: "string",
            initialValue: "bg-block",
            description: "Column mj-class override.",
        }),
        defineOption({
            name: "sectionClass",
            type: "string",
            optional: true,
            description: "Optional section mj-class override.",
        }),
        defineOption({
            name: "textAlign",
            type: "enum",
            values: mjmlAlignOptions,
            initialValue: "left",
            description: "MJML text alignment override.",
        }),
        defineOption({
            name: "textClass",
            type: "string",
            initialValue: "s-email-text-body",
            description: "Text mj-class override.",
        }),
        defineOption({
            name: "textContent",
            type: "string",
            initialValue: bodyContent,
            description: "Raw content string before markdown/HTML handling.",
        }),
    ]),
    render: ({ options }): MjmlNode =>
        Section(
            [
                textNode(options.textContent, {
                    "mj-class": options.textClass,
                    "align": options.textAlign,
                    "padding-top": tokens.layout.containerYPadding,
                    "padding-bottom": tokens.layout.containerYPadding,
                    "padding-left": tokens.layout.containerXPadding,
                    "padding-right": tokens.layout.containerXPadding,
                }),
            ],
            {
                sectionClass: options.sectionClass,
                columnClass: options.columnClass,
            }
        ),
});

export const Text = text.component;
export default text;
