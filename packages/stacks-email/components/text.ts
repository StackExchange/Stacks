import MarkdownIt from "markdown-it";

import {
    defineEmailComponent,
    defineOption,
    defineOptions,
    mjmlAlignOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import type { MjmlNode } from "../src/lib/types";
import { Section } from "../src/lib/mjml";

const TEMPLATE_PROP_PATTERN = /^\{\{[A-Z0-9_]+\}\}$/;

const markdown = new MarkdownIt({
    html: false,
    breaks: true,
    linkify: true,
    typographer: true,
});

markdown.renderer.rules.link_open = (tokenList, index, options, env, self) => {
    tokenList[index].attrJoin("class", "link");
    return self.renderToken(tokenList, index, options);
};

markdown.renderer.rules.paragraph_open = (
    tokenList,
    index,
    options,
    env,
    self
) => {
    const hasAnotherParagraph = tokenList
        .slice(index + 1)
        .some((token) => token.type === "paragraph_open");

    tokenList[index].attrSet(
        "style",
        `margin:${hasAnotherParagraph ? tokens.body.paragraphMargin : "0"};`
    );

    return self.renderToken(tokenList, index, options);
};

const renderMarkdown = (value: string) => markdown.render(value.trim()).trim();

const looksLikeHtml = (value: string) => /<\/?[a-z][\s\S]*>/i.test(value);

const renderTextContent = (value: string | undefined) => {
    const content = value?.trim() ?? "";
    if (!content) {
        return "";
    }

    if (TEMPLATE_PROP_PATTERN.test(content)) {
        return content;
    }

    if (looksLikeHtml(content)) {
        return content;
    }

    return renderMarkdown(content);
};

const bodyContent = renderTextContent(`
Dear [[FIRST_NAME]],

The entire [software development lifecycle](https://stackoverflow.com) has been dramatically changed by AI, introducing a new model for team organization and leadership.

AI has accelerated coding, allowing developers to dedicate more time to complex and creative tasks. **Simultaneously**, it enables teams to clear bottlenecks of repetitive tasks [through automation](https://stackoverflow.com), allowing leaders to create more agile teams and focus on higher-level strategic problems.

Ultimately, it is really AI’s ability to automate the __"work around the work"__ that is proving to be transformative for organizations.
`);

const centeredContent = renderTextContent(`
A starting point for more simple transactional emails with a single, center-aligned message. It can [contain links](https://stackoverflow.com) or **rich text**.
`);

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
                    content: renderTextContent(options.textContent),
                },
            ],
            {
                sectionClass: options.sectionClass,
                columnClass: options.columnClass,
            }
        ),
});

export const Text = text.component;
export default text;
