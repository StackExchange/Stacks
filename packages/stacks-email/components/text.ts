import type { EmailComponentMeta, MjmlNode } from "../types";
import MarkdownIt from "markdown-it";
import { z } from "zod/v4";

import { tokens } from "../tokens";
import { Section } from "./section";

export type TextVariantId = "body" | "centered";

const textOptionsSchema = z.object({
    columnClass: z.string().optional(),
    sectionClass: z.string().optional(),
    textAlign: z.string().optional(),
    textClass: z.string().optional(),
    textContent: z.string().optional(),
});

type TextOptions = z.input<typeof textOptionsSchema>;

const BODY_PARAGRAPH_MARGIN = "0 0 16px";
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
        `margin:${hasAnotherParagraph ? BODY_PARAGRAPH_MARGIN : "0"};`
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

const textOptionRows: NonNullable<EmailComponentMeta["options"]> = [
    {
        argument: "variant",
        type: '"body" | "centered"',
        description: "Selects layout and alignment defaults.",
    },
    {
        argument: "options.columnClass",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Column mj-class override.",
    },
    {
        argument: "options.sectionClass",
        type: "string",
        description: "Optional section mj-class override.",
    },
    {
        argument: "options.textAlign",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "MJML text alignment override.",
    },
    {
        argument: "options.textClass",
        type: "string",
        defaultValue: "s-email-text-body",
        defaultValueCode: true,
        description: "Text mj-class override.",
    },
    {
        argument: "options.textContent",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Raw content string before markdown/HTML handling.",
    },
];

export const meta: EmailComponentMeta = {
    slug: "text",
    defaultVariant: "body",
    variants: [
        {
            id: "body",
            props: {
                TEXT_COLUMN_CLASS: "bg-block",
                TEXT_CLASS: "s-email-text-body",
                TEXT_ALIGN: "left",
                TEXT_CONTENT: renderTextContent(
                    `
Dear [[FIRST_NAME]],

The entire [software development lifecycle](https://stackoverflow.com) has been dramatically changed by AI, introducing a new model for team organization and leadership.

AI has accelerated coding, allowing developers to dedicate more time to complex and creative tasks. **Simultaneously**, it enables teams to clear bottlenecks of repetitive tasks [through automation](https://stackoverflow.com), allowing leaders to create more agile teams and focus on higher-level strategic problems.

Ultimately, it is really AI’s ability to automate the __"work around the work"__ that is proving to be transformative for organizations.
                `
                ),
            },
        },
        {
            id: "centered",
            props: {
                TEXT_COLUMN_CLASS: "bg-block",
                TEXT_CLASS: "s-email-text-body",
                TEXT_CONTENT: renderTextContent(
                    `
                    A starting point for more simple transactional emails with a single, center-aligned message. It can [contain links](https://stackoverflow.com) or **rich text**.
                `
                ),
                TEXT_ALIGN: "center",
            },
        },
    ],
    tokens: [
        {
            token: "FIRST_NAME",
            description: "Recipient first name for personalized body copy.",
        },
    ],
    options: textOptionRows,
};

const getTextVariantProps = (variant: TextVariantId) =>
    meta.variants.find((entry) => entry.id === variant)?.props ??
    meta.variants[0].props;

export const Text = (
    variant: TextVariantId,
    options: TextOptions = {}
): MjmlNode => {
    const parsedOptions = textOptionsSchema.safeParse(options);
    const normalizedOptions = parsedOptions.success ? parsedOptions.data : options;
    const defaults = getTextVariantProps(variant);

    return Section(
        [
            {
                tagName: "mj-text",
                attributes: {
                    "mj-class": normalizedOptions.textClass ?? defaults.TEXT_CLASS,
                    align: normalizedOptions.textAlign ?? defaults.TEXT_ALIGN,
                    "padding-top": tokens.layout.containerYPadding,
                    "padding-bottom": tokens.layout.containerYPadding,
                    "padding-left": tokens.layout.containerXPadding,
                    "padding-right": tokens.layout.containerXPadding,
                },
                content: renderTextContent(
                    normalizedOptions.textContent ?? defaults.TEXT_CONTENT
                ),
            },
        ],
        {
            sectionClass: normalizedOptions.sectionClass,
            columnClass:
                normalizedOptions.columnClass ?? defaults.TEXT_COLUMN_CLASS,
        }
    );
};

export const source: MjmlNode[] = [
    Text("body", {
        columnClass: "{{TEXT_COLUMN_CLASS}}",
        textClass: "{{TEXT_CLASS}}",
        textAlign: "{{TEXT_ALIGN}}",
        textContent: "{{TEXT_CONTENT}}",
    }),
];

export const definition = { meta, source } as const;

export default definition;
