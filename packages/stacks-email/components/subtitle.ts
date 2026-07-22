import {
    defineEmailComponent,
    defineOption,
    defineOptions,
    mjmlAlignOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import type { MjmlNode } from "../src/lib/types";
import { Section } from "../src/lib/mjml";

const squareMarker = (color: string) =>
    `<span style="display:inline-block;width:10px;height:10px;background-color:${color};margin-top:-2px;margin-right:${tokens.spacing.sm};vertical-align:middle;"></span>`;

const subtitle = defineEmailComponent({
    slug: "subtitle",
    defaultVariant: "medium",
    variants: {
        small: {
            fontSize: "14px",
            fontWeight: tokens.font.weightNormal,
            squareColor: tokens.color.brandYellow,
        },
    },
    optionsSchema: defineOptions([
        defineOption({
            name: "sectionClass",
            type: "string",
            initialValue: "bg-block",
            description: "Section mj-class override.",
        }),
        defineOption({
            name: "textAlign",
            type: "enum",
            values: mjmlAlignOptions,
            initialValue: "left",
            description: "MJML text alignment override.",
        }),
        defineOption({
            name: "fontSize",
            type: "string",
            initialValue: "16px",
            description: "Subtitle font size.",
        }),
        defineOption({
            name: "fontWeight",
            type: "string",
            initialValue: tokens.font.weightBold,
            description: "Subtitle font weight.",
        }),
        defineOption({
            name: "squareColor",
            type: "string",
            initialValue: tokens.color.brand,
            description: "Background color of the square marker.",
        }),
        defineOption({
            name: "textContent",
            type: "string",
            initialValue: "Subtitle",
            description: "Subtitle copy content.",
        }),
    ]),
    render: ({ options }): MjmlNode =>
        Section(
            [
                {
                    tagName: "mj-text",
                    attributes: {
                        "align": options.textAlign,
                        "font-size": options.fontSize,
                        "font-weight": options.fontWeight,
                        "padding-left": tokens.layout.containerXPadding,
                        "padding-right": tokens.layout.containerXPadding,
                    },
                    content: `${squareMarker(options.squareColor)}${options.textContent}`,
                },
            ],
            {
                sectionClass: options.sectionClass,
            }
        ),
});

export const Subtitle = subtitle.component;
export default subtitle;
