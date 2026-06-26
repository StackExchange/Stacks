import { Footer } from "../components/footer";
import { Graphic } from "../components/graphic";
import { Header } from "../components/header";
import { Button } from "../components/button";
import { Headline } from "../components/headline";
import { Text } from "../components/text";
import { Spacer } from "../components/spacer";

import { Section } from "../src/lib/mjml";
import {
    defineEmailTemplate,
    defineOption,
    defineOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import type { MjmlNode } from "../src/lib/types";

const promotional = defineEmailTemplate({
    slug: "promotional",
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
            description:
                "The class applied to all sections - promo is color drenched by default.",
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
                    Header("brand-center", {
                        sectionClass: props.sectionClass,
                    }),
                    Headline("default", {
                        sectionClass: props.sectionClass,
                        textContent: "Lorem ipsum dolor sit amet consectetur!",
                        textAlign: "center",
                    }),
                    Text("body", {
                        columnClass: props.sectionClass,
                        textContent:
                            "A starting point for more simple transactional emails with a single message. It can [contain links](#) or **rich text**. Read this if text is written in markdown.",
                        textAlign: "center",
                    }),
                    Section(
                        [
                            Button("primary", {
                                align: "center",
                            }),
                        ],
                        {
                            sectionClass: props.sectionClass,
                        }
                    ),
                    Spacer("large", {
                        sectionClass: props.sectionClass,
                    }),
                    Graphic("strip", {
                        imageSrc: "/email/promos/tumble.png",
                        sectionClass: "bg-light-blue",
                    }),
                    Spacer("medium", {
                        sectionClass: props.sectionClass,
                    }),
                    Footer("social"),
                    Spacer("large", { sectionClass: "bg-page" }),
                ],
            },
        ],
    }),
});

export default promotional;
