import { Footer } from "../components/footer";
import { Graphic } from "../components/graphic";
import { Header } from "../components/header";
import { Button } from "../components/button";
import { Headline } from "../components/headline";
import { Text } from "../components/text";
import { Spacer } from "../components/spacer";
import { Subtitle } from "../components/subtitle";

import { Section } from "../src/lib/mjml";
import {
    defineEmailTemplate,
    defineOption,
    defineOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import type { MjmlNode } from "../src/lib/types";

const headerHighlight = (line = "", { bg = "#201c1d", txt = "#ffffff", padding = "8px 12px" } = {}) =>
    `<span style="display:inline-block;white-space:nowrap;background-color:${bg};color:${txt};padding:${padding};line-height:1;">${line}</span>`

const devsurvey26 = defineEmailTemplate({
    slug: "devsurvey26",
    propsSchema: defineOptions([
        defineOption({
            name: "previewText",
            type: "string",
            initialValue: "The Overflow",
            description: "Inbox preheader text inserted into `<mj-preview>`.",
        }),
        defineOption({
            name: "sectionClass",
            type: "string",
            initialValue: "bg-light-blue",
            description: "The class applied to all sections - promo is color drenched by default.",
        }),
    ]),
    tokens: [],
    preview: ({ props }) => ({ previewText: props.previewText }),
    renderDocument: ({ props }): MjmlNode => ({
        tagName: "mjml",
        children: [
            {
                tagName: "mj-body",
                attributes: {
                    "background-color": tokens.color.bodyBackground,
                },
                children: [
                    Spacer("large", { sectionClass: "bg-page" }),
                    Header("brand", {
                        sectionClass: "bg-page",
                    }),
                    {
                        tagName: "mj-section",
                        children: [
                            {
                                tagName: "mj-column",
                                attributes: {
                                    "width": "55%",
                                },
                                children: [
                                    {
                                        tagName: "mj-text",
                                        attributes: {
                                            "mj-class": "bg-page",
                                            "padding-top": tokens.layout.containerYPadding,
                                            "padding-bottom": tokens.layout.containerYPadding,
                                            "padding-left": tokens.layout.containerXPadding,
                                            "padding-right": tokens.layout.containerXPadding,
                                            "font-family": "Stack Sans Notch, Arial, Helvetica, sans-serif",
                                            "font-size": "50px",
                                            "line-height": "100%",
                                        },
                                        content: [
                                            headerHighlight('Developer'),
                                            headerHighlight('Survey', { padding: '0 12px 12px' }),
                                            headerHighlight('2026', { bg: '#fff', txt: tokens.color.text }),
                                        ].join('<br/>'),
                                    },
                                    {
                                        tagName: "mj-text",
                                        attributes: {
                                            "padding-left": tokens.layout.containerXPadding,
                                            "padding-right": tokens.layout.containerXPadding,
                                        },
                                        content: "The definitive report on the state of software development."
                                    }
                                ],
                            },
                            {
                                tagName: "mj-column",
                                attributes: {
                                    "width": "45%",
                                },
                                children: [
                                    {
                                        tagName: "mj-image",
                                        attributes: {
                                            "src": "/email/special/graph.png",
                                            "padding-left": "0px",
                                            "padding-right": tokens.layout.containerXPadding,
                                        }
                                    },
                                ],
                            },
                        ]
                    },

                    Spacer("medium"),
                    Subtitle("medium", {
                        textContent: "Innovation takes time. This survey takes minutes.",
                    }),
                    Text("body", {
                        textContent: "The 2026 Developer Survey is now live. Spend a few minutes responding with the tools you rely on, your current workflow preferences, and what you are actually doing with AI agents. We are bypassing the industry speculation to build a definitive, human-validated snapshot of the modern technical workforce—and sharing the results with the world.",
                    }),
                    Section([
                        Button("primary", {
                            text: "Take the survey",
                            href: "https://take.survey.stackoverflow.co/",
                        }),
                    ], {
                        sectionClass: "bg-block",
                    }),
                    Spacer("medium"),
                    Section([
                        {
                            tagName: "mj-text",
                            attributes: {
                                "padding-top": tokens.layout.containerYPadding,
                                "padding-left": tokens.layout.containerXPadding,
                                "padding-right": tokens.layout.containerXPadding,
                                "font-family": "Stack Sans Notch, Arial, Helvetica, sans-serif",
                                "font-size": "24px",
                                "line-height": "100%",
                            },
                            content: headerHighlight('More than 1s and 0s'),
                        },
                    ], {
                        sectionClass: "bg-highlight",
                    }),
                    Text("body", {
                        textContent: "Technology is not confined to the engineering department. If you spend your day in an IDE, navigating databases, or leveraging advanced AI tools to manage workflows, you belong in this survey’s story.",
                        columnClass: "bg-highlight",
                    }),
                    {
                        tagName: "mj-section",
                        attributes: {
                            "mj-class": "bg-highlight",
                            "padding-right": "0px",
                        },
                        children: [
                            {
                                tagName: "mj-column",
                                attributes: {
                                    "vertical-align": "bottom",
                                },
                                children: [
                                    Button("secondary", {
                                        text: "Join us on GitHub",
                                        href: "https://github.com/StackExchange/Survey",
                                    }),
                                ],
                            },
                            {
                                tagName: "mj-column",
                                children: [
                                    {
                                        tagName: "mj-image",
                                        attributes: {
                                            "src": "/email/spots/SpotPeople.png",
                                            "padding-left": "0px",
                                            "align": "right",
                                            "width": "200px",
                                            "padding-right": tokens.layout.containerXPadding,
                                        }
                                    }
                                ],
                            },
                        ]
                    },
                    Spacer("medium", { sectionClass: "bg-highlight" }),
                    Footer("social"),
                    Spacer("large", { sectionClass: "bg-page" }),
                ],
            },
        ],
    }),
});

export default devsurvey26;
