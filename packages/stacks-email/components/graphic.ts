import type { EmailComponentMeta, MjmlNode } from "../types";
import { z } from "zod/v4";

import { tokens } from "../tokens";
import { Section } from "./section";

export type GraphicVariantId = "spot" | "hero";

const graphicOptionsSchema = z.object({
    sectionClass: z.string().optional(),
    imageSrc: z.string().optional(),
    imageAlt: z.string().optional(),
    imageWidth: z.string().optional(),
    imageHeight: z.string().optional(),
    imageAlign: z.string().optional(),
    imagePaddingTop: z.string().optional(),
    imagePaddingBottom: z.string().optional(),
    imagePaddingLeft: z.string().optional(),
    imagePaddingRight: z.string().optional(),
});

type GraphicOptions = z.input<typeof graphicOptionsSchema>;

const graphicVariantDefaults: Record<
    GraphicVariantId,
    {
        GRAPHIC_SECTION_CLASS: string;
        GRAPHIC_IMAGE_SRC: string;
        GRAPHIC_IMAGE_ALT: string;
        GRAPHIC_IMAGE_WIDTH: string;
        GRAPHIC_IMAGE_HEIGHT: string;
        GRAPHIC_IMAGE_ALIGN: string;
        GRAPHIC_IMAGE_PADDING_TOP: string;
        GRAPHIC_IMAGE_PADDING_BOTTOM: string;
        GRAPHIC_IMAGE_PADDING_LEFT: string;
        GRAPHIC_IMAGE_PADDING_RIGHT: string;
    }
> = {
    spot: {
        GRAPHIC_SECTION_CLASS: "bg-block",
        GRAPHIC_IMAGE_SRC: "/email/spots/SpotLock.png",
        GRAPHIC_IMAGE_ALT: "Spot placeholder image",
        GRAPHIC_IMAGE_WIDTH: "140px",
        GRAPHIC_IMAGE_HEIGHT: "140px",
        GRAPHIC_IMAGE_ALIGN: "left",
        GRAPHIC_IMAGE_PADDING_TOP: "0px",
        GRAPHIC_IMAGE_PADDING_BOTTOM: "0px",
        GRAPHIC_IMAGE_PADDING_LEFT: tokens.layout.containerXPadding,
        GRAPHIC_IMAGE_PADDING_RIGHT: tokens.layout.containerXPadding,
    },
    hero: {
        GRAPHIC_SECTION_CLASS: "bg-block",
        GRAPHIC_IMAGE_SRC: "/email/hero/1200x630.png",
        GRAPHIC_IMAGE_ALT: "Hero placeholder image",
        GRAPHIC_IMAGE_WIDTH: "1200px",
        GRAPHIC_IMAGE_HEIGHT: "auto",
        GRAPHIC_IMAGE_ALIGN: "center",
        GRAPHIC_IMAGE_PADDING_TOP: "0px",
        GRAPHIC_IMAGE_PADDING_BOTTOM: "0px",
        GRAPHIC_IMAGE_PADDING_LEFT: tokens.layout.containerXPadding,
        GRAPHIC_IMAGE_PADDING_RIGHT: tokens.layout.containerXPadding,
    },
};

const graphicOptionRows: NonNullable<EmailComponentMeta["options"]> = [
    {
        argument: "variant",
        type: '"spot" | "hero"',
        description: "Selects baseline size, alignment, and source asset.",
    },
    {
        argument: "options.sectionClass",
        type: "string",
        defaultValue: "bg-block",
        defaultValueCode: true,
        description: "Section class applied to the wrapper section.",
    },
    {
        argument: "options.imageSrc",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Image URL/path override.",
    },
    {
        argument: "options.imageAlt",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Accessible image alt text.",
    },
    {
        argument: "options.imageWidth",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: 'Rendered width (for example "140px").',
    },
    {
        argument: "options.imageHeight",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: 'Rendered height (for example "630px").',
    },
    {
        argument: "options.imageAlign",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "MJML image alignment value.",
    },
    {
        argument: "options.imagePaddingTop",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Top padding override.",
    },
    {
        argument: "options.imagePaddingBottom",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Bottom padding override.",
    },
    {
        argument: "options.imagePaddingLeft",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Left padding override.",
    },
    {
        argument: "options.imagePaddingRight",
        type: "string",
        defaultValue: "From selected variant",
        defaultValueCode: false,
        description: "Right padding override.",
    },
];

export const meta: EmailComponentMeta = {
    slug: "graphic",
    defaultVariant: "spot",
    variants: [
        {
            id: "spot",
            props: graphicVariantDefaults.spot,
        },
        {
            id: "hero",
            props: graphicVariantDefaults.hero,
        },
    ],
    tokens: [],
    options: graphicOptionRows,
};

const getGraphicVariantProps = (variant: GraphicVariantId) =>
    meta.variants.find((entry) => entry.id === variant)?.props ??
    meta.variants[0].props;

export const Graphic = (
    variant: GraphicVariantId,
    options: GraphicOptions = {}
): MjmlNode => {
    const parsedOptions = graphicOptionsSchema.safeParse(options);
    const normalizedOptions = parsedOptions.success ? parsedOptions.data : options;
    const defaults = getGraphicVariantProps(variant);

    return Section(
        [
            {
                tagName: "mj-image",
                attributes: {
                    src: normalizedOptions.imageSrc ?? defaults.GRAPHIC_IMAGE_SRC,
                    alt: normalizedOptions.imageAlt ?? defaults.GRAPHIC_IMAGE_ALT,
                    width: normalizedOptions.imageWidth ?? defaults.GRAPHIC_IMAGE_WIDTH,
                    height: normalizedOptions.imageHeight ?? defaults.GRAPHIC_IMAGE_HEIGHT,
                    align: normalizedOptions.imageAlign ?? defaults.GRAPHIC_IMAGE_ALIGN,
                    "padding-top":
                        normalizedOptions.imagePaddingTop ??
                        defaults.GRAPHIC_IMAGE_PADDING_TOP,
                    "padding-bottom":
                        normalizedOptions.imagePaddingBottom ??
                        defaults.GRAPHIC_IMAGE_PADDING_BOTTOM,
                    "padding-left":
                        normalizedOptions.imagePaddingLeft ??
                        defaults.GRAPHIC_IMAGE_PADDING_LEFT,
                    "padding-right":
                        normalizedOptions.imagePaddingRight ??
                        defaults.GRAPHIC_IMAGE_PADDING_RIGHT,
                },
            },
        ],
        {
            sectionClass: normalizedOptions.sectionClass ?? defaults.GRAPHIC_SECTION_CLASS,
        }
    );
};

export const source: MjmlNode[] = [
    Graphic("spot", {
        sectionClass: "{{GRAPHIC_SECTION_CLASS}}",
        imageSrc: "{{GRAPHIC_IMAGE_SRC}}",
        imageAlt: "{{GRAPHIC_IMAGE_ALT}}",
        imageWidth: "{{GRAPHIC_IMAGE_WIDTH}}",
        imageHeight: "{{GRAPHIC_IMAGE_HEIGHT}}",
        imageAlign: "{{GRAPHIC_IMAGE_ALIGN}}",
        imagePaddingTop: "{{GRAPHIC_IMAGE_PADDING_TOP}}",
        imagePaddingBottom: "{{GRAPHIC_IMAGE_PADDING_BOTTOM}}",
        imagePaddingLeft: "{{GRAPHIC_IMAGE_PADDING_LEFT}}",
        imagePaddingRight: "{{GRAPHIC_IMAGE_PADDING_RIGHT}}",
    }),
];

export const definition = { meta, source } as const;

export default definition;
