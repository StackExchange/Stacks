import type { EmailComponentMeta, MjmlNode } from "../types";

import { Spacer } from "./spacer";

export type SpacersVariantId = "medium" | "large";

type SpacerVariantDefaults = {
    SPACER_SECTION_CLASS: string;
    SPACER_HEIGHT: string;
};

const spacerVariantDefaults: Record<SpacersVariantId, SpacerVariantDefaults> = {
    medium: {
        SPACER_SECTION_CLASS: "bg-block",
        SPACER_HEIGHT: "20px",
    },
    large: {
        SPACER_SECTION_CLASS: "bg-block",
        SPACER_HEIGHT: "40px",
    },
};

const spacerOptionRows: NonNullable<EmailComponentMeta["options"]> = [
    {
        argument: "size",
        type: '"medium" | "large"',
        defaultValue: "medium",
        defaultValueCode: true,
        description: "Preset height token applied to the underlying mj-spacer.",
    },
    {
        argument: "options.sectionClass",
        type: "string",
        defaultValue: "bg-block",
        defaultValueCode: true,
        description: "Applied to the wrapper section (mj-class).",
    },
    {
        argument: "options.height",
        type: "string",
        defaultValue: "From size preset",
        defaultValueCode: false,
        description: 'Explicit spacer height override, for example "64px".',
    },
];

export const meta: EmailComponentMeta = {
    slug: "spacers",
    defaultVariant: "medium",
    htmlExtraction: {
        targetTag: "mj-spacer",
    },
    variants: [
        {
            id: "medium",
            props: spacerVariantDefaults.medium,
        },
        {
            id: "large",
            props: spacerVariantDefaults.large,
        },
    ],
    tokens: [],
    options: spacerOptionRows,
};

export const source: MjmlNode[] = [
    Spacer("medium", {
        sectionClass: "{{SPACER_SECTION_CLASS}}",
        height: "{{SPACER_HEIGHT}}",
    }),
];

export const definition = { meta, source } as const;

export default definition;
