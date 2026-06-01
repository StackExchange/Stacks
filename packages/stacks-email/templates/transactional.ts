import { Button } from "../components/button";
import { Footer } from "../components/footer";
import { Headline } from "../components/headline";
import { Header } from "../components/header";
import { Section } from "../components/section";
import { Spacer } from "../components/spacer";
import { Text } from "../components/text";
import { Graphic } from "../components/graphic";

import { tokens } from "../tokens";

import type { EmailTemplateMeta, EmailTemplateModule, MjmlNode } from "../types";

export const meta: EmailTemplateMeta = {
    slug: "transactional",
    defaultVariant: "short",
    variants: [
        {
            id: "short",
            props: {
                HEADLINE_TEXT: "Reset your password",
                BODY_DEFAULT_MARKDOWN: `
**Hi [[FIRST_NAME]]**. We received a request to reset your password. Use the button below to choose a new password.
                `,
                CTA_TEXT: "Reset password",
            },
        },
        {
            id: "long",
            props: {
                HEADLINE_TEXT: "Privacy Policy Update",
                BODY_DEFAULT_MARKDOWN: `
We're writing to let you know that we've updated our Privacy Policy, effective **1 January 1970**.

As part of our ongoing commitment to transparency and data protection, we've made several changes to how we collect, use, and store your personal information. Here's a summary of what's changed:

**What's new:**
- **Data retention periods** – We've clarified how long we keep your data and the criteria used to determine retention timelines.
- **Third-party sharing** – We've updated our list of trusted partners with whom we may share aggregated, anonymized data to improve our services.
- **Your rights** – We've expanded the section outlining your rights under applicable privacy laws, including the right to access, correct, and delete your data.

These changes do not affect how we use your data for core service delivery. Your continued use of Stack Overflow after **1 January 1970** constitutes acceptance of the updated policy.

You can review the full Privacy Policy at any time here:
                `,
                CTA_TEXT: "View privacy policy",
                GRAPHIC_PATH: "/email/spots/SpotLock.png",
            },
        },
    ],
    tokens: [
        {
            token: "FIRST_NAME",
            description: "Recipient first name used in the short greeting.",
        },
        {
            token: "CTA_URL",
            description:
                "Primary call-to-action URL (password reset for short; policy link for long).",
        },
        {
            token: "UNSUBSCRIBE_URL",
            description: "Recipient-specific unsubscribe URL.",
        },
        {
            token: "GRAPHIC_PATH",
            description:
                "Optional spot graphic path for the long variant. Leave empty to hide the graphic.",
        },
    ],
};

export const document = (variant = meta.variants[0]): MjmlNode => {
    const isLongVariant = variant.id === "long";
    const headlineVariant = isLongVariant ? "default" : "highlight";

    const graphicPath = variant.props.GRAPHIC_PATH?.trim();
    const graphicBlock = isLongVariant
        ? graphicPath
            ? [
                  Graphic("spot", {
                      imageSrc: graphicPath,
                  }),
              ]
            : []
        : [];

    return {
        tagName: "mjml",
        children: [
            {
                tagName: "mj-body",
                attributes: {
                    "background-color": tokens.color.bodyBackground,
                },
                children: [
                    Spacer("large", {
                        sectionClass: "bg-page",
                    }),
                    Header("transactional"),
                    Headline(headlineVariant, {
                        textContent: "{{HEADLINE_TEXT}}",
                    }),
                    ...graphicBlock,
                    Text("body", {
                        textContent: "{{BODY_CONTENT}}",
                    }),
                    Section(
                        [
                            Button("primary", {
                                href: "[[CTA_URL]]",
                                align: "left",
                                text: "{{CTA_TEXT}}",
                            }),
                        ],
                        {
                            sectionClass: "bg-block",
                        }
                    ),
                    Spacer("large"),
                    Footer("default", {
                        unsubscribeUrl: "[[UNSUBSCRIBE_URL]]",
                    }),
                    Spacer("large", {
                        sectionClass: "bg-page",
                    }),
                ],
            },
        ],
    };
};

const template: EmailTemplateModule = {
    meta,
    document,
};

export default template;
