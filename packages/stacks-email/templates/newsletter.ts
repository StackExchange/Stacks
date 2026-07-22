import { Card } from "../components/card";
import { Footer } from "../components/footer";
import { Graphic } from "../components/graphic";
import { Header } from "../components/header";
import { Title } from "../components/title";
import { Headline } from "../components/headline";
import { Text } from "../components/text";
import { Spacer } from "../components/spacer";

import {
    defineEmailTemplate,
    defineOption,
    defineOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import type { MjmlNode } from "../src/lib/types";

const twoColumnCards = (left: MjmlNode, right: MjmlNode): MjmlNode => {
    const column = (card: MjmlNode): MjmlNode => {
        const col = (card.children ?? [])[0] ?? {
            tagName: "mj-column",
            children: [],
        };
        return {
            ...col,
            attributes: {
                ...col.attributes,
                "width": "50%",
                "padding-left": tokens.spacing.sm,
                "padding-right": tokens.spacing.sm,
            },
        };
    };

    return {
        tagName: "mj-section",
        attributes: {
            "mj-class": "bg-block",
            "padding": `0px ${tokens.spacing.md} ${tokens.layout.containerYPadding}`,
        },
        children: [column(left), column(right)],
    };
};

const headlinePlaceholder =
    "Lorem ipsum dolor sit amet consectetur. Dolor vitae dapibus a netus mattis est";

const bodyPlaceholder = `The entire software development lifecycle has been dramatically changed by AI, introducing a new model for team organization and leadership.

AI has accelerated coding, allowing developers to dedicate more time to complex and creative tasks. Simultaneously, it enables teams to clear bottlenecks of repetitive tasks through automation, allowing leaders to create more agile teams and focus on higher-level strategic problems.

Ultimately, it is really AI’s ability to automate the “work around the work” that is proving to be transformative for organizations.`;

const newsletter = defineEmailTemplate({
    slug: "newsletter",
    propsSchema: defineOptions([
        defineOption({
            name: "previewText",
            type: "string",
            initialValue: "The Overflow",
            description: "Inbox preheader text inserted into `<mj-preview>`.",
        }),
    ]),
    tokens: [],
    preview: ({ props }) => ({ previewText: props.previewText }),
    renderDocument: (): MjmlNode => ({
        tagName: "mjml",
        children: [
            {
                tagName: "mj-body",
                attributes: {
                    "background-color": tokens.color.bodyBackground,
                },
                children: [
                    Spacer("large", { sectionClass: "bg-page" }),
                    Header("brand"),
                    Headline("default", {
                        sectionClass: "bg-card",
                        eyebrow: "The Overflow",
                        textContent: headlinePlaceholder,
                    }),
                    Text("body", {
                        textClass: "s-email-text-subtitle",
                        columnClass: "bg-card",
                        textContent: "01 January 1970",
                    }),
                    Graphic("strip", {
                        imageSrc: "/email/strip/strip-overflow.png",
                    }),
                    Text("body", { textContent: bodyPlaceholder }),
                    Title("default", { textContent: "Featured" }),
                    twoColumnCards(
                        Card("vertical", {
                            ctaStyle: "title",
                            titleContent: "Vibe coding without code knowledge",
                            textContent:
                                "With AI, being able to code has never been easier. But is it any good? Here is what vibe coding is like for someone without technical skills.",
                        }),
                        Card("vertical", {
                            ctaStyle: "title",
                            titleContent:
                                "What is cloud computing and why use it?",
                            textContent:
                                "In this No Dumb Questions, we’re joined by tech lead for the infrastructure team, to learn about the cloud, compute, and data centers.",
                        })
                    ),
                    Title("default", {
                        textContent: "Interesting Questions",
                    }),
                    Card("vertical", { imageSrc: "", ctaStyle: "title" }),
                    Card("vertical", { imageSrc: "", ctaStyle: "title" }),
                    Graphic("strip", {
                        imageSrc: "/email/strip/strip-divider.png",
                    }),
                    Title("default", {
                        textContent: "Links from around the web",
                    }),
                    Card("vertical", { imageSrc: "", ctaStyle: "title" }),
                    Card("vertical", { imageSrc: "", ctaStyle: "title" }),
                    Card("horizontal-left", {
                        ctaStyle: "button",
                    }),
                    Footer("social"),
                    Spacer("large", { sectionClass: "bg-page" }),
                ],
            },
        ],
    }),
});

export default newsletter;
