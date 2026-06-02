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
        src: imageSrc,
        alt: imageAlt,
        "fluid-on-mobile": true,
        ...(href.trim() !== "" ? { href } : {}),
    },
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
            values: ["bg-card", "bg-block", "bg-light-blue"],
            initialValue: "bg-block",
            description: "Card surface color.",
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
            values: ["plain", "button", "none"],
            initialValue: "plain",
            description:
                "Call-to-action style: `plain` text link (default), `button`, or `none`.",
        }),
    ]),
    render: ({ options }): MjmlNode => {
        const hasImage = options.imageSrc.trim() !== "";
        const horizontal = options.layout !== "vertical";

        const sectionAttributes: NonNullable<MjmlNode["attributes"]> = {
            "mj-class": options.background,
        };

        const image = hasImage
            ? imageNode(options.imageSrc, options.imageAlt, options.href)
            : null;

        // Ordered content; each node's padding is assigned by position so the
        // block is inset by `lg` with a consistent vertical rhythm.
        type ContentItem = {
            kind: "title" | "body" | "cta";
            build: (padding: string) => MjmlNode;
        };
        const items: ContentItem[] = [];
        if (options.titleContent.trim() !== "") {
            items.push({
                kind: "title",
                build: (p) =>
                    textNode(options.titleContent, {
                        "font-weight": "600",
                        "padding": p,
                    }),
            });
        }
        items.push({
            kind: "body",
            build: (p) =>
                textNode(options.textContent, {
                    "mj-class": "s-email-text-body",
                    "color": options.layout === "vertical"
                        ? tokens.color.textMuted
                        : null,
                    "padding": p,
                }),
        });
        if (options.ctaStyle !== "none" && options.ctaText.trim() !== "") {
            items.push({
                kind: "cta",
                // `button` reuses the Button leaf (keeps its own padding);
                // `plain` is a classic text link rendered through the Text leaf.
                build: (p) =>
                    options.ctaStyle === "button"
                        ? Button("default", {
                              text: options.ctaText,
                              href: options.href,
                              align: "left",
                          })
                        : textNode(
                              `<a href="${options.href}" class="link" style="text-decoration:none"><b>${options.ctaText}</b></a>`,
                              { "mj-class": "s-email-text-body", "padding": p }
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
                attributes: sectionAttributes,
                children:
                    options.layout === "horizontal-right"
                        ? [contentColumn, imageColumn]
                        : [imageColumn, contentColumn],
            };
        }

        // Vertical (default): full-bleed image stacked above the padded content.
        return {
            tagName: "mj-section",
            attributes: sectionAttributes,
            children: [
                {
                    tagName: "mj-column",
                    attributes: {
                        padding:
                            options.layout === "vertical"
                                ? `0px 0px ${tokens.layout.containerYPadding} 0px`
                                : "0px",
                    },
                    children: [...(image ? [image] : []), ...content],
                },
            ],
        };
    },
});

export const Card = card.component;
export default card;
