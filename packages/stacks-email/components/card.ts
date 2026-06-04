import {
    defineEmailComponent,
    defineOption,
    defineOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import type { MjmlNode } from "../src/lib/types";
import { Button } from "./button";
import { textNode } from "./text";

const { lg, md, sm } = tokens.spacing;

const imageNode = (
    imageSrc: string,
    imageAlt: string,
    href: string
): MjmlNode => ({
    tagName: "mj-image",
    attributes: {
        "src": imageSrc,
        "alt": imageAlt,
        "fluid-on-mobile": true,
        ...(href.trim() !== "" ? { href } : {}),
    },
});

// 40x40 square, no label, with a right-arrow glyph.
const arrowNode = (
    href: string,
    background: string,
    color: string,
    cssClass: string
): MjmlNode => ({
    tagName: "mj-button",
    attributes: {
        "css-class": cssClass,
        "href": href,
        "background-color": background,
        "color": color,
        "width": "40px",
        "height": "40px",
        "inner-padding": "0px",
        "border-radius": "0px",
        "align": "right",
        "font-size": "18px",
        "line-height": "40px",
    },
    content: "&rarr;",
});

const card = defineEmailComponent({
    slug: "card",
    defaultVariant: "vertical",
    variants: {
        "horizontal-left": {
            layout: "horizontal-left",
            imageSrc: "/email/hero/200x200.png",
            background: "bg-light-blue",
        },
        "horizontal-right": {
            layout: "horizontal-right",
            imageSrc: "/email/hero/200x200.png",
            background: "bg-light-blue",
        },
        // Compact link row: title + arrow only, no image or body.
        "link": {
            imageSrc: "",
            textContent: "",
            ctaStyle: "arrow",
            titleSize: "18px",
            titleWeight: "400",
        },
        // Inverted link row: off-black surface, dark-grey inner, white title,
        // off-white arrow square.
        "link-inverted": {
            imageSrc: "",
            textContent: "",
            ctaStyle: "arrow",
            titleSize: "18px",
            titleWeight: "400",
            background: "bg-invert",
            innerBackground: tokens.color.invertSurface,
            titleColor: tokens.color.textInvert,
            arrowBackground: tokens.color.brandOffWhite,
            arrowColor: tokens.color.brandDark,
            arrowCssClass: "button-hover-inverted",
        },
    },
    tokens: [
        {
            token: "CARD_URL",
            description: "Link applied to the card image and button.",
        },
    ],
    optionsSchema: defineOptions([
        defineOption({
            name: "background",
            type: "enum",
            values: ["bg-card", "bg-block", "bg-light-blue", "bg-invert"],
            initialValue: "bg-block",
            description: "Card surface (section) color.",
        }),
        defineOption({
            name: "innerBackground",
            type: "string",
            initialValue: tokens.color.surface,
            description: "Inner column background color.",
        }),
        defineOption({
            name: "layout",
            type: "enum",
            values: ["vertical", "horizontal-left", "horizontal-right"],
            initialValue: "vertical",
            description:
                "Card layout. `vertical` stacks the image above the content; `horizontal-left`/`horizontal-right` place a 1:1 image beside it.",
        }),
        defineOption({
            name: "imageSrc",
            type: "string",
            initialValue: "/email/hero/1200x630.png",
            description: "Optional image URL/path. Empty hides the image.",
        }),
        defineOption({
            name: "imageAlt",
            type: "string",
            initialValue: "Card image",
            description: "Accessible image alt text.",
        }),
        defineOption({
            name: "href",
            type: "string",
            initialValue: "[[CARD_URL]]",
            description: "Link applied to the image and button.",
        }),
        defineOption({
            name: "titleContent",
            type: "string",
            initialValue: "Card title",
            description:
                "Optional heading rendered above the body. Empty hides it.",
        }),
        defineOption({
            name: "titleSize",
            type: "string",
            initialValue: "",
            description: 'Optional title font-size override, e.g. "18px".',
        }),
        defineOption({
            name: "titleWeight",
            type: "string",
            initialValue: "600",
            description: "Title font-weight.",
        }),
        defineOption({
            name: "titleColor",
            type: "string",
            initialValue: "",
            description: "Optional title color override.",
        }),
        defineOption({
            name: "textContent",
            type: "string",
            initialValue: "Card body copy **goes here**.",
            description: "Body copy. Accepts Markdown.",
        }),
        defineOption({
            name: "ctaText",
            type: "string",
            initialValue: "Learn more",
            description: "Call-to-action label. Empty hides the CTA.",
        }),
        defineOption({
            name: "ctaStyle",
            type: "enum",
            values: ["plain", "button", "arrow", "title", "none"],
            initialValue: "plain",
            description:
                "Call-to-action style: `plain` text link (default), `button`, `arrow` (icon square), `title` (links the title instead of a separate CTA), or `none`.",
        }),
        defineOption({
            name: "arrowBackground",
            type: "string",
            initialValue: tokens.color.brandDark,
            description: "Background color of the arrow CTA square.",
        }),
        defineOption({
            name: "arrowColor",
            type: "string",
            initialValue: tokens.color.textInvert,
            description: "Glyph color of the arrow CTA square.",
        }),
        defineOption({
            name: "arrowCssClass",
            type: "string",
            initialValue: "button-hover",
            description: "Hover CSS class for the arrow CTA square.",
        }),
    ]),
    render: ({ options }): MjmlNode => {
        const hasImage = options.imageSrc.trim() !== "";
        const horizontal = options.layout !== "vertical";

        const image = hasImage
            ? imageNode(options.imageSrc, options.imageAlt, options.href)
            : null;

        type ContentItem = {
            kind: "title" | "body" | "cta";
            build: (padding: string) => MjmlNode;
        };
        const items: ContentItem[] = [];

        if (options.titleContent.trim() !== "") {
            items.push({
                kind: "title",
                build: (p) =>
                    textNode(
                        // `title` CTA style links the title itself instead of a
                        // separate CTA below.
                        options.ctaStyle === "title"
                            ? `<a href="${options.href}" style="text-decoration:none" class="link"><b>${options.titleContent}</b></a>`
                            : options.titleContent,
                        {
                            ...(options.titleSize
                                ? { "font-size": options.titleSize }
                                : {}),
                            ...(options.titleColor
                                ? { color: options.titleColor }
                                : {}),
                            "font-weight": options.titleWeight,
                            "padding": p,
                        }
                    ),
            });
        }
        if (options.textContent.trim() !== "") {
            items.push({
                kind: "body",
                build: (p) =>
                    textNode(options.textContent, {
                        "mj-class": "s-email-text-body",
                        ...(options.layout === "vertical"
                            ? { color: tokens.color.textMuted }
                            : {}),
                        "padding": p,
                    }),
            });
        }
        const showCta =
            options.ctaStyle !== "none" &&
            options.ctaStyle !== "title" &&
            (options.ctaStyle === "arrow" || options.ctaText.trim() !== "");

        if (showCta) {
            items.push({
                kind: "cta",
                build: (p) =>
                    options.ctaStyle === "button"
                        ? Button("default", {
                              text: options.ctaText,
                              href: options.href,
                              align: "left",
                          })
                        : options.ctaStyle === "arrow"
                          ? arrowNode(
                                options.href,
                                options.arrowBackground,
                                options.arrowColor,
                                options.arrowCssClass
                            )
                          : textNode(
                                `<a href="${options.href}" class="link" style="text-decoration:none"><b>${options.ctaText}</b></a>`,
                                {
                                    "mj-class": "s-email-text-body",
                                    "padding": p,
                                }
                            ),
            });
        }

        const content = items.map((item, index) => {
            const top = index === 0 ? lg : "0px";
            const bottom =
                index === items.length - 1
                    ? lg
                    : item.kind === "title"
                      ? sm
                      : md;
            return item.build(`${top} ${lg} ${bottom}`);
        });

        if (horizontal) {
            // 1:1 image beside the content as two columns.
            const imageColumn: MjmlNode = {
                tagName: "mj-column",
                attributes: { width: "40%" },
                children: image ? [image] : [],
            };
            const contentColumn: MjmlNode = {
                tagName: "mj-column",
                attributes: {
                    width: hasImage ? "60%" : "100%",
                    padding: "0px",
                },
                children: content,
            };

            return {
                tagName: "mj-section",
                attributes: {
                    "mj-class": options.background,
                },
                children:
                    options.layout === "horizontal-right"
                        ? [contentColumn, imageColumn]
                        : [imageColumn, contentColumn],
            };
        }

        // Vertical (default): full-bleed image stacked above the padded content.
        return {
            tagName: "mj-section",
            attributes: {
                "mj-class": options.background,
                "padding": `0px ${tokens.layout.containerXPadding} ${tokens.layout.containerYPadding}`,
            },
            children: [
                {
                    tagName: "mj-column",
                    attributes: {
                        "inner-background-color": options.innerBackground,
                    },
                    children: [...(image ? [image] : []), ...content],
                },
            ],
        };
    },
});

export const Card = card.component;
export default card;
