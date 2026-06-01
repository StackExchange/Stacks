import type { EmailComponentMeta, MjmlNode } from "../types";
import { z } from "zod/v4";

export type PreviewVariantId = "default";

const previewOptionsSchema = z.object({
    textContent: z.string().optional(),
});

type PreviewOptions = z.input<typeof previewOptionsSchema>;

const previewOptionRows: NonNullable<EmailComponentMeta["options"]> = [
    {
        argument: "variant",
        type: '"default"',
        description: "Baseline preview text output.",
    },
    {
        argument: "options.textContent",
        type: "string",
        defaultValue: "[[PREVIEW_TEXT]]",
        defaultValueCode: true,
        description:
            "Hidden inbox preview snippet shown by supporting email clients.",
    },
];

const previewVariantDefaults: Record<
    PreviewVariantId,
    {
        PREVIEW_TEXT_CONTENT: string;
    }
> = {
    default: {
        PREVIEW_TEXT_CONTENT: "[[PREVIEW_TEXT]]",
    },
};

const getPreviewVariantProps = (variant: PreviewVariantId) =>
    previewVariantDefaults[variant] ?? previewVariantDefaults.default;

export const Preview = (
    variant: PreviewVariantId = "default",
    options: PreviewOptions = {}
): MjmlNode => {
    const parsedOptions = previewOptionsSchema.safeParse(options);
    const normalizedOptions = parsedOptions.success ? parsedOptions.data : options;
    const defaults = getPreviewVariantProps(variant);

    return {
        tagName: "mj-preview",
        content: normalizedOptions.textContent ?? defaults.PREVIEW_TEXT_CONTENT,
    };
};

export const meta: EmailComponentMeta = {
    slug: "preview",
    defaultVariant: "default",
    htmlExtraction: {
        targetTag: "mj-preview",
    },
    variants: [
        {
            id: "default",
            props: previewVariantDefaults.default,
        },
    ],
    tokens: [
        {
            token: "PREVIEW_TEXT",
            description: "Inbox preview snippet shown next to subject lines.",
        },
    ],
    options: previewOptionRows,
};

export const source: MjmlNode[] = [
    Preview("default", {
        textContent: "{{PREVIEW_TEXT_CONTENT}}",
    }),
];

export const definition = { meta, source } as const;

export default definition;
