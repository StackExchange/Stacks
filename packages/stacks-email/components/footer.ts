import {
    defineEmailComponent,
    defineOption,
    defineOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import type { MjmlNode } from "../src/lib/types";
import header from "./header";

const reasonText = "You’re receiving this email because [[FOOTER_REASON]]";

const footer = defineEmailComponent({
    slug: "footer",
    variants: {
        reason: {
            reasonText,
        },
        social: {
            reasonText,
            showSocialIcons: true,
        },
    },
    tokens: [
        {
            token: "UNSUBSCRIBE_URL",
            description: "Recipient-specific unsubscribe destination",
        },
        {
            token: "FOOTER_REASON",
            description: "Recipient-specific reason for receiving the email",
        },
    ],
    optionsSchema: defineOptions([
        defineOption({
            name: "wrapperClass",
            type: "string",
            initialValue: "bg-invert",
            description: "Wrapper mj-class on mj-wrapper.",
        }),
        defineOption({
            name: "textClass",
            type: "string",
            initialValue: "fc-text-footer",
            description: "Body text class for footer copy rows.",
        }),
        defineOption({
            name: "linkClass",
            type: "string",
            initialValue: "footer-link fc-text-footer",
            description:
                "Link class for unsubscribe/settings/contact/privacy links.",
        }),
        defineOption({
            name: "headerVariant",
            type: "string",
            initialValue: "inverted",
            description: "Variant passed through to nested Header.",
        }),
        defineOption({
            name: "logoSrc",
            type: "string",
            optional: true,
            description: "Nested header logo image source override.",
        }),
        defineOption({
            name: "logoAlt",
            type: "string",
            optional: true,
            description: "Nested header logo alt text override.",
        }),
        defineOption({
            name: "logoUrl",
            type: "string",
            optional: true,
            description: "Nested header logo link override.",
        }),
        defineOption({
            name: "logoWidth",
            type: "string",
            optional: true,
            description: "Nested header logo width override.",
        }),
        defineOption({
            name: "unsubscribeUrl",
            type: "string",
            initialValue: "[[UNSUBSCRIBE_URL]]",
            description: "Recipient-specific unsubscribe destination.",
        }),
        defineOption({
            name: "settingsUrl",
            type: "string",
            initialValue: tokens.links.emailSettings,
            description: "Email settings URL override.",
        }),
        defineOption({
            name: "contactUrl",
            type: "string",
            initialValue: tokens.links.contact,
            description: "Contact URL override.",
        }),
        defineOption({
            name: "privacyUrl",
            type: "string",
            initialValue: tokens.links.privacy,
            description: "Privacy policy URL override.",
        }),
        defineOption({
            name: "addressHtml",
            type: "string",
            initialValue: "14 Wall Street, 20th Floor, New York, NY 10005",
            description: "Footer address line HTML/text.",
        }),
        defineOption({
            name: "reasonText",
            type: "string",
            initialValue: "",
            description: "Optional recipient-reason copy block.",
        }),
        defineOption({
            name: "showSocialIcons",
            type: "boolean",
            initialValue: false,
            description: "Shows or hides social icon row.",
        }),
        defineOption({
            name: "socialIconBasePath",
            type: "string",
            initialValue: "/email/social",
            description: "Base path for social icon image assets.",
        }),
    ]),
    render: ({ options }): MjmlNode => {
        const hasReasonText = options.reasonText.trim().length > 0;

        const children: MjmlNode[] = [
            header.component(
                options.headerVariant as keyof typeof header.variants & string,
                {
                    logoSrc: options.logoSrc,
                    logoAlt: options.logoAlt,
                    logoUrl: options.logoUrl,
                    logoWidth: options.logoWidth,
                }
            ) as MjmlNode,
        ];

        if (options.showSocialIcons) {
            children.push({
                tagName: "mj-section",
                children: [
                    {
                        tagName: "mj-column",
                        children: [
                            {
                                tagName: "mj-social",
                                attributes: {
                                    "align": "left",
                                    "padding-top": "0px",
                                    "padding-bottom": "0px",
                                    "padding-left": "15px",
                                    "icon-padding": "0 5px 0 5px",
                                    "font-size": "13px",
                                    "icon-size": "20px",
                                    "mode": "horizontal",
                                },
                                children: [
                                    {
                                        tagName: "mj-social-element",
                                        attributes: {
                                            src: `${options.socialIconBasePath}/linkedin.png`,
                                            href: tokens.links.social.linkedin,
                                        },
                                    },
                                    {
                                        tagName: "mj-social-element",
                                        attributes: {
                                            src: `${options.socialIconBasePath}/x.png`,
                                            href: tokens.links.social.x,
                                        },
                                    },
                                    {
                                        tagName: "mj-social-element",
                                        attributes: {
                                            src: `${options.socialIconBasePath}/threads.png`,
                                            href: tokens.links.social.threads,
                                        },
                                    },
                                    {
                                        tagName: "mj-social-element",
                                        attributes: {
                                            src: `${options.socialIconBasePath}/instagram.png`,
                                            href: tokens.links.social.instagram,
                                        },
                                    },
                                    {
                                        tagName: "mj-social-element",
                                        attributes: {
                                            src: `${options.socialIconBasePath}/youtube.png`,
                                            href: tokens.links.social.youtube,
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        }

        children.push({
            tagName: "mj-section",
            attributes: {
                "padding-top": "40px",
                "padding-bottom": "40px",
                "padding-left": tokens.layout.containerXPadding,
                "padding-right": tokens.layout.containerXPadding,
            },
            children: [
                {
                    tagName: "mj-column",
                    children: [
                        ...(hasReasonText
                            ? [
                                  {
                                      tagName: "mj-text",
                                      attributes: {
                                          "font-size": "14px",
                                          "mj-class": options.textClass,
                                          "padding-bottom": "40px",
                                      },
                                      content: options.reasonText,
                                  } satisfies MjmlNode,
                              ]
                            : []),
                        {
                            tagName: "mj-text",
                            attributes: {
                                "font-size": "14px",
                                "padding-bottom": "8px",
                            },
                            content:
                                `<a href="${options.unsubscribeUrl}" class="${options.linkClass}">Unsubscribe</a> ` +
                                `<a href="${options.settingsUrl}" class="${options.linkClass}">Edit email settings</a> ` +
                                `<a href="${options.contactUrl}" class="${options.linkClass}">Contact us</a> ` +
                                `<a href="${options.privacyUrl}" class="${options.linkClass}">Privacy</a> `,
                        },
                        {
                            tagName: "mj-text",
                            attributes: {
                                "font-size": "14px",
                                "mj-class": options.textClass,
                            },
                            content: options.addressHtml,
                        },
                    ],
                },
            ],
        });

        children.push({
            tagName: "mj-section",
            attributes: {
                "padding-left": tokens.layout.containerXPadding,
                "padding-right": tokens.layout.containerXPadding,
                "padding-bottom": tokens.layout.containerYPadding,
            },
            children: [
                {
                    tagName: "mj-group",
                    children: [
                        {
                            tagName: "mj-column",
                            children: [
                                {
                                    tagName: "mj-text",
                                    attributes: {
                                        "font-size": "14px",
                                        "mj-class": options.textClass,
                                    },
                                    content: "© Stack Exchange Inc.",
                                },
                            ],
                        },
                        {
                            tagName: "mj-column",
                            children: [
                                {
                                    tagName: "mj-text",
                                    attributes: {
                                        "font-size": "14px",
                                        "mj-class": options.textClass,
                                        "align": "right",
                                    },
                                    content: "All rights reserved",
                                },
                            ],
                        },
                    ],
                },
            ],
        });

        return {
            tagName: "mj-wrapper",
            attributes: {
                "mj-class": options.wrapperClass,
                "padding-top": tokens.layout.containerYPadding,
            },
            children,
        };
    },
});

export const Footer = footer.component;
export default footer;
