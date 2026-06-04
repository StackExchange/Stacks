import {
    defineEmailComponent,
    defineOption,
    defineOptions,
    mjmlAlignOptions,
} from "../src/lib/schema";
import { tokens } from "../src/lib/tokens";
import type { MjmlNode } from "../src/lib/types";
import { Section } from "../src/lib/mjml";

const graphic = defineEmailComponent({
    slug: "graphic",
    defaultVariant: "spot",
    variants: {
        hero: {
            imageSrc: "/email/hero/1200x630.png",
            imageAlt: "Hero placeholder image",
            imageWidth: "1200px",
            imageAlign: "center",
        },
        strip: {
            imageSrc: "/email/strip/600x140.png",
            imageAlt: "Strip placeholder image",
            imageWidth: "600px",
            imageAlign: "center",
            imagePaddingLeft: "0px",
            imagePaddingRight: "0px",
        },
    },
    tokens: [],
    optionsSchema: defineOptions([
        defineOption({
            name: "sectionClass",
            type: "string",
            initialValue: "bg-block",
            description: "Section class applied to the wrapper section.",
        }),
        defineOption({
            name: "imageSrc",
            type: "string",
            initialValue: "/email/spots/SpotLock.png",
            description: "Image URL/path override.",
        }),
        defineOption({
            name: "imageAlt",
            type: "string",
            initialValue: "Spot placeholder image",
            description: "Accessible image alt text.",
        }),
        defineOption({
            name: "imageWidth",
            type: "string",
            initialValue: "140px",
            description: 'Rendered width, for example "140px".',
        }),
        defineOption({
            name: "imageHeight",
            type: "string",
            initialValue: "auto",
            description: 'Rendered height, for example "630px".',
        }),
        defineOption({
            name: "imageAlign",
            type: "enum",
            values: mjmlAlignOptions,
            initialValue: "left",
            description: "MJML image alignment value.",
        }),
        defineOption({
            name: "imagePaddingTop",
            type: "string",
            initialValue: "0px",
            description: "Top padding override.",
        }),
        defineOption({
            name: "imagePaddingBottom",
            type: "string",
            initialValue: "0px",
            description: "Bottom padding override.",
        }),
        defineOption({
            name: "imagePaddingLeft",
            type: "string",
            initialValue: tokens.layout.containerXPadding,
            description: "Left padding override.",
        }),
        defineOption({
            name: "imagePaddingRight",
            type: "string",
            initialValue: tokens.layout.containerXPadding,
            description: "Right padding override.",
        }),
    ]),
    render: ({ options }): MjmlNode =>
        Section(
            [
                {
                    tagName: "mj-image",
                    attributes: {
                        "src": options.imageSrc,
                        "alt": options.imageAlt,
                        "width": options.imageWidth,
                        "height": options.imageHeight,
                        "align": options.imageAlign,
                        "padding-top": options.imagePaddingTop,
                        "padding-bottom": options.imagePaddingBottom,
                        "padding-left": options.imagePaddingLeft,
                        "padding-right": options.imagePaddingRight,
                    },
                },
            ],
            {
                sectionClass: options.sectionClass,
            }
        ),
});

export const Graphic = graphic.component;
export default graphic;
