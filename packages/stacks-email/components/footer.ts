import { Header, type HeaderVariantId } from "./header";
import type { EmailComponentMeta, MjmlNode } from "../types";
import { z } from "zod/v4";

import { tokens } from "../tokens";

export type FooterVariantId = "default" | "reason" | "social";

const footerOptionsSchema = z.object({
    wrapperClass: z.string().optional(),
    textClass: z.string().optional(),
    linkClass: z.string().optional(),
    headerVariant: z
        .enum(["transactional", "brand", "brand-center", "inverted", "business"])
        .optional(),
    logoSrc: z.string().optional(),
    logoAlt: z.string().optional(),
    logoUrl: z.string().optional(),
    logoWidth: z.string().optional(),
    unsubscribeUrl: z.string().optional(),
    settingsUrl: z.string().optional(),
    contactUrl: z.string().optional(),
    privacyUrl: z.string().optional(),
    addressHtml: z.string().optional(),
    reasonText: z.string().optional(),
    reasonPadding: z.string().optional(),
    socialClass: z.string().optional(),
    showSocialIcons: z.union([z.boolean(), z.string()]).optional(),
    socialIconBasePath: z.string().optional(),
});

type FooterOptions = z.input<typeof footerOptionsSchema>;

const footerOptionRows: NonNullable<EmailComponentMeta["options"]> = [
    {
        argument: "variant",
        type: '"default" | "reason" | "social"',
        description: "Selects reason/social behavior and baseline classes.",
    },
    {
        argument: "options.wrapperClass",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Wrapper mj-class on mj-wrapper.",
    },
    {
        argument: "options.textClass",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Body text class for footer copy rows.",
    },
    {
        argument: "options.linkClass",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Link class for unsubscribe/settings/contact/privacy links.",
    },
    {
        argument: "options.headerVariant",
        type: "HeaderVariantId",
        defaultValue: "inverted",
        defaultValueCode: true,
        description: "Variant passed through to nested Header.",
    },
    {
        argument: "options.unsubscribeUrl",
        type: "string",
        defaultValue: "[[UNSUBSCRIBE_URL]]",
        defaultValueCode: true,
        description: "Recipient-specific unsubscribe destination.",
    },
    {
        argument: "options.settingsUrl",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Email settings URL override.",
    },
    {
        argument: "options.contactUrl",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Contact URL override.",
    },
    {
        argument: "options.privacyUrl",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Privacy policy URL override.",
    },
    {
        argument: "options.reasonText",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Optional recipient-reason copy block.",
    },
    {
        argument: "options.showSocialIcons",
        type: "boolean | string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Shows or hides social icon row.",
    },
    {
        argument: "options.socialIconBasePath",
        type: "string",
        defaultValue: "/email/social",
        defaultValueCode: true,
        description: "Base path for social icon image assets.",
    },
    {
        argument: "options.addressHtml",
        type: "string",
        defaultValue: "14 Wall Street, 20th Floor, New York, NY 10005",
        defaultValueCode: true,
        description: "Footer address line HTML/text.",
    },
];

export const meta: EmailComponentMeta = {
    slug: "footer",
    defaultVariant: "default",
    variants: [
        {
            id: "default",
            props: {
                FOOTER_WRAPPER_CLASS: "bg-invert",
                FOOTER_TEXT_CLASS: "fc-text-footer",
                FOOTER_LINK_CLASS: "footer-link fc-text-footer",
                FOOTER_REASON_TEXT: "",
                FOOTER_SOCIAL_ICONS: "false",
                FOOTER_SOCIAL_CLASS: "footer-social-hidden",
                FOOTER_SOCIAL_ICON_BASE_PATH: "/email/social",
                SETTINGS_URL:
                    "https://stackoverflow.com/users/email/settings/current",
                CONTACT_URL: "https://stackoverflow.com/company/contact",
                PRIVACY_URL: "https://stackoverflow.com/legal/privacy-policy",
            },
        },
        {
            id: "reason",
            props: {
                FOOTER_WRAPPER_CLASS: "bg-invert",
                FOOTER_TEXT_CLASS: "fc-text-footer",
                FOOTER_LINK_CLASS: "footer-link fc-text-footer",
                FOOTER_REASON_TEXT:
                    "You’re receiving this email because [[FOOTER_REASON]]",
                FOOTER_SOCIAL_ICONS: "false",
                FOOTER_SOCIAL_CLASS: "footer-social-hidden",
                FOOTER_SOCIAL_ICON_BASE_PATH: "/email/social",
                SETTINGS_URL:
                    "https://stackoverflow.com/users/email/settings/current",
                CONTACT_URL: "https://stackoverflow.com/company/contact",
                PRIVACY_URL: "https://stackoverflow.com/legal/privacy-policy",
            },
        },
        {
            id: "social",
            props: {
                FOOTER_WRAPPER_CLASS: "bg-invert",
                FOOTER_TEXT_CLASS: "fc-text-footer",
                FOOTER_LINK_CLASS: "footer-link fc-text-footer",
                FOOTER_REASON_TEXT:
                    "You’re receiving this email because [[FOOTER_REASON]]",
                FOOTER_SOCIAL_ICONS: "true",
                FOOTER_SOCIAL_CLASS: "footer-social-visible",
                FOOTER_SOCIAL_ICON_BASE_PATH: "/email/social",
                SETTINGS_URL:
                    "https://stackoverflow.com/users/email/settings/current",
                CONTACT_URL: "https://stackoverflow.com/company/contact",
                PRIVACY_URL: "https://stackoverflow.com/legal/privacy-policy",
            },
        },
    ],
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
    options: footerOptionRows,
};

const getFooterVariantProps = (variant: FooterVariantId) =>
    meta.variants.find((entry) => entry.id === variant)?.props ??
    meta.variants[0].props;

export const Footer = (
    variant: FooterVariantId,
    options: FooterOptions = {}
): MjmlNode => {
    const parsedOptions = footerOptionsSchema.safeParse(options);
    const normalizedOptions = parsedOptions.success ? parsedOptions.data : options;
    const defaults = getFooterVariantProps(variant);

    const wrapperClass =
        normalizedOptions.wrapperClass ?? defaults.FOOTER_WRAPPER_CLASS;
    const textClass = normalizedOptions.textClass ?? defaults.FOOTER_TEXT_CLASS;
    const linkClass = normalizedOptions.linkClass ?? defaults.FOOTER_LINK_CLASS;

    const unsubscribeUrl = normalizedOptions.unsubscribeUrl ?? "[[UNSUBSCRIBE_URL]]";
    const settingsUrl = normalizedOptions.settingsUrl ?? defaults.SETTINGS_URL;
    const contactUrl = normalizedOptions.contactUrl ?? defaults.CONTACT_URL;
    const privacyUrl = normalizedOptions.privacyUrl ?? defaults.PRIVACY_URL;
    const reasonText = normalizedOptions.reasonText ?? defaults.FOOTER_REASON_TEXT;
    const hasReasonText = reasonText.trim().length > 0;
    const socialClass = normalizedOptions.socialClass ?? defaults.FOOTER_SOCIAL_CLASS;
    const socialFlag =
        normalizedOptions.showSocialIcons ?? defaults.FOOTER_SOCIAL_ICONS;
    const showSocialIcons = String(socialFlag).trim().toLowerCase() === "true";
    const socialIconBasePath =
        normalizedOptions.socialIconBasePath ??
        defaults.FOOTER_SOCIAL_ICON_BASE_PATH;
    const addressHtml =
        normalizedOptions.addressHtml ??
        "14 Wall Street, 20th Floor, New York, NY 10005";

    const children: MjmlNode[] = [
        Header(normalizedOptions.headerVariant ?? "inverted", {
            logoSrc: normalizedOptions.logoSrc,
            logoAlt: normalizedOptions.logoAlt,
            logoUrl: normalizedOptions.logoUrl,
            logoWidth: normalizedOptions.logoWidth,
        }),
    ];

    if (showSocialIcons) {
        children.push({
            tagName: "mj-section",
            attributes: {
                "css-class": socialClass,
            },
            children: [
                {
                    tagName: "mj-column",
                    children: [
                        {
                            tagName: "mj-social",
                            attributes: {
                                align: "left",
                                "padding-top": "0px",
                                "padding-bottom": "0px",
                                "padding-left": "15px",
                                "icon-padding": "0 5px 0 5px",
                                "font-size": "13px",
                                "icon-size": "20px",
                                mode: "horizontal",
                            },
                            children: [
                                {
                                    tagName: "mj-social-element",
                                    attributes: {
                                        src: `${socialIconBasePath}/linkedin.png`,
                                        href: "https://linkedin.com/company/stack-overflow/",
                                    },
                                },
                                {
                                    tagName: "mj-social-element",
                                    attributes: {
                                        src: `${socialIconBasePath}/x.png`,
                                        href: "https://x.com/stackoverflow/",
                                    },
                                },
                                {
                                    tagName: "mj-social-element",
                                    attributes: {
                                        src: `${socialIconBasePath}/threads.png`,
                                        href: "https://www.threads.net/@thestackoverflow",
                                    },
                                },
                                {
                                    tagName: "mj-social-element",
                                    attributes: {
                                        src: `${socialIconBasePath}/instagram.png`,
                                        href: "https://www.instagram.com/thestackoverflow/",
                                    },
                                },
                                {
                                    tagName: "mj-social-element",
                                    attributes: {
                                        src: `${socialIconBasePath}/youtube.png`,
                                        href: "https://www.youtube.com/c/StackOverflowOfficial",
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
                                      "mj-class": textClass,
                                      "padding-bottom": "40px",
                                  },
                                  content: reasonText,
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
                            `<a href="${unsubscribeUrl}" class="${linkClass}">Unsubscribe</a> ` +
                            `<a href="${settingsUrl}" class="${linkClass}">Edit email settings</a> ` +
                            `<a href="${contactUrl}" class="${linkClass}">Contact us</a> ` +
                            `<a href="${privacyUrl}" class="${linkClass}">Privacy</a> `,
                    },
                    {
                        tagName: "mj-text",
                        attributes: {
                            "font-size": "14px",
                            "mj-class": textClass,
                        },
                        content: addressHtml,
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
                                    "mj-class": textClass,
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
                                    "mj-class": textClass,
                                    align: "right",
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
            "mj-class": wrapperClass,
            "padding-top": tokens.layout.containerYPadding,
        },
        children,
    };
};

export const source: MjmlNode[] = [
    Footer("default", {
        wrapperClass: "{{FOOTER_WRAPPER_CLASS}}",
        textClass: "{{FOOTER_TEXT_CLASS}}",
        linkClass: "{{FOOTER_LINK_CLASS}}",
        headerVariant: "inverted",
        unsubscribeUrl: "[[UNSUBSCRIBE_URL]]",
        settingsUrl: "{{SETTINGS_URL}}",
        contactUrl: "{{CONTACT_URL}}",
        privacyUrl: "{{PRIVACY_URL}}",
        reasonText: "{{FOOTER_REASON_TEXT}}",
        socialClass: "{{FOOTER_SOCIAL_CLASS}}",
        showSocialIcons: true,
        socialIconBasePath: "{{FOOTER_SOCIAL_ICON_BASE_PATH}}",
    }),
];

export const definition = { meta, source } as const;

export default definition;
