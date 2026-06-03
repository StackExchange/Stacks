import {
    defineEmailComponent,
    defineOption,
    defineOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import type { MjmlNode } from "../src/lib/types";
import { Section } from "../src/lib/mjml";
import { textNode } from "./text";

const { containerXPadding, containerYPadding } = tokens.layout;

const iconNode = (src: string, alt: string): MjmlNode => ({
    tagName: "mj-image",
    attributes: {
        src: src,
        alt: alt,
        width: "32px",
        height: "32px",
        align: "left",
        padding: "0px",
    },
});

const callout = defineEmailComponent({
    slug: "callout",
    variants: {
        icon: {
            iconSrc: "/email/icons/help.png",
            iconAlt: "Callout icon",
        },
    },
    tokens: [],
    optionsSchema: defineOptions([
        defineOption({
            name: "sectionClass",
            type: "string",
            initialValue: "bg-block",
            description: "Optional section mj-class override.",
        }),
        defineOption({
            name: "innerBackground",
            type: "string",
            initialValue: tokens.color.cardOffWhite,
            description: "Callout background color.",
        }),
        defineOption({
            name: "textClass",
            type: "string",
            initialValue: "s-email-text-body",
            description: "Text mj-class override.",
        }),
        defineOption({
            name: "textContent",
            type: "string",
            initialValue: "Callout copy goes here.",
            description: "Callout body copy. Accepts Markdown.",
        }),
        defineOption({
            name: "iconSrc",
            type: "string",
            initialValue: "",
            description:
                "Optional 32x32 icon shown in a left column. Empty hides it.",
        }),
        defineOption({
            name: "iconAlt",
            type: "string",
            initialValue: "",
            description: "Accessible icon alt text.",
        }),
    ]),
    render: ({ options }): MjmlNode => {
        const hasIcon = options.iconSrc.trim() !== "";

        // Text() with container padding; when an icon is present the left
        // padding is reduced to a gap from the icon column.
        const body = textNode(options.textContent, {
            "mj-class": options.textClass,
            "padding-top": containerYPadding,
            "padding-bottom": containerYPadding,
            "padding-left": hasIcon ? tokens.spacing.md : containerXPadding,
            "padding-right": containerXPadding,
        });

        // The section is the outer surface (default white); its X padding insets
        // the bg-card callout column to leave a side gutter.
        const sectionPadding = {
            "padding-top": "0px",
            "padding-bottom": "0px",
            "padding-left": containerXPadding,
            "padding-right": containerXPadding,
        };

        if (!hasIcon) {
            return Section([body], {
                sectionClass: options.sectionClass,
                sectionAttributes: sectionPadding,
                columnAttributes: {
                    "inner-background-color": options.innerBackground,
                },
            });
        }

        // Icon variant: an icon in a left column and the copy on the right.
        // The background lives on the `mj-group` (not the columns): the group
        // fills to the height of the tallest column, so the surface stays
        // consistent — per-column backgrounds would each size to their own
        // content. The group also keeps the columns side-by-side on mobile.
        return {
            tagName: "mj-section",
            attributes: {
                ...(options.sectionClass
                    ? { "mj-class": options.sectionClass }
                    : {}),
                ...sectionPadding,
            },
            children: [
                {
                    tagName: "mj-group",
                    attributes: {
                        "background-color": options.innerBackground,
                        "width": "100%",
                    },
                    children: [
                        {
                            tagName: "mj-column",
                            attributes: {
                                // Widths sum to 100% so the columns fill the group.
                                "width": "10%",
                                "vertical-align": "top",
                                "padding-top": "12px",
                                "padding-bottom": "12px",
                                "padding-left": containerXPadding,
                            },
                            children: [
                                iconNode(options.iconSrc, options.iconAlt),
                            ],
                        },
                        {
                            tagName: "mj-column",
                            attributes: {
                                "width": "90%",
                                "vertical-align": "top",
                            },
                            children: [body],
                        },
                    ],
                },
            ],
        };
    },
});

export const Callout = callout.component;
export default callout;
