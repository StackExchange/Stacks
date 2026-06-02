import { Button } from "../components/button";
import { Footer } from "../components/footer";
import { Graphic } from "../components/graphic";
import { Headline } from "../components/headline";
import { Header } from "../components/header";
import { Spacer } from "../components/spacer";
import { Text } from "../components/text";

import { Section } from "../src/lib/mjml";
import { renderEmailBodyMarkdown } from "../src/lib/markdown";
import {
    defineEmailTemplate,
    defineOption,
    defineOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";

const shortBodyMarkdown = `
**Hi [[FIRST_NAME]]**. We received a request to reset your password. Use the button below to choose a new password.
            `;

const longBodyMarkdown = `
We're writing to let you know that we've updated our Privacy Policy, effective **1 January 1970**.

As part of our ongoing commitment to transparency and data protection, we've made several changes to how we collect, use, and store your personal information. Here's a summary of what's changed:

**What's new:**
- **Data retention periods** – We've clarified how long we keep your data and the criteria used to determine retention timelines.
- **Third-party sharing** – We've updated our list of trusted partners with whom we may share aggregated, anonymized data to improve our services.
- **Your rights** – We've expanded the section outlining your rights under applicable privacy laws, including the right to access, correct, and delete your data.

These changes do not affect how we use your data for core service delivery. Your continued use of Stack Overflow after **1 January 1970** constitutes acceptance of the updated policy.

You can review the full Privacy Policy at any time here:
            `;

const transactional = defineEmailTemplate({
    slug: "transactional",
    defaultVariant: "short",
    variants: {
        long: {
            headlineText: "Privacy Policy Update",
            bodyMarkdown: longBodyMarkdown,
            ctaText: "View privacy policy",
            graphicPath: "/email/spots/SpotLock.png",
            previewText: "Privacy Policy Update",
        },
    },
    propsSchema: defineOptions([
        defineOption({
            name: "headlineText",
            type: "string",
            initialValue: "Reset your password",
            description: "Headline copy rendered near the top of the email.",
        }),
        defineOption({
            name: "bodyMarkdown",
            type: "string",
            initialValue: shortBodyMarkdown,
            description:
                "Markdown body copy rendered into the main text block.",
        }),
        defineOption({
            name: "bodyContent",
            type: "string",
            optional: true,
            description:
                "Pre-rendered body HTML. When omitted, bodyMarkdown is rendered.",
        }),
        defineOption({
            name: "ctaText",
            type: "string",
            initialValue: "Reset password",
            description: "Primary call-to-action button label.",
        }),
        defineOption({
            name: "graphicPath",
            type: "string",
            initialValue: "",
            description:
                "Optional spot graphic path. Leave empty to hide the graphic.",
        }),
        defineOption({
            name: "previewText",
            type: "string",
            initialValue: "Reset your password",
            description: "Inbox preheader text inserted into `<mj-preview>`.",
        }),
    ]),
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
    ],
    preview: ({ props }) => ({
        previewText: props.previewText || props.headlineText,
    }),
    renderDocument: ({ variant, props }) => {
        const graphicPath = props.graphicPath.trim();
        const bodyContent =
            props.bodyContent ?? renderEmailBodyMarkdown(props.bodyMarkdown);

        return {
            tagName: "mjml",
            children: [
                {
                    tagName: "mj-body",
                    attributes: {
                        "background-color": tokens.color.bodyBackground,
                    },
                    children: [
                        Spacer("large", { sectionClass: "bg-page" }),
                        Header("transactional"),
                        Headline(variant === "long" ? "default" : "highlight", {
                            textContent: props.headlineText,
                        }),
                        ...(graphicPath.length > 0
                            ? [Graphic("spot", { imageSrc: graphicPath })]
                            : []),
                        Text("body", { textContent: bodyContent }),
                        Section(
                            [
                                Button("primary", {
                                    href: "[[CTA_URL]]",
                                    align: "left",
                                    text: props.ctaText,
                                }),
                            ],
                            { sectionClass: "bg-block" }
                        ),
                        Spacer("large"),
                        Footer("default", {
                            unsubscribeUrl: "[[UNSUBSCRIBE_URL]]",
                        }),
                        Spacer("large", { sectionClass: "bg-page" }),
                    ],
                },
            ],
        };
    },
});

export default transactional;
