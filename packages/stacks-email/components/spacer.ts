import type { MjmlNode } from "../types";
import { z } from "zod/v4";
import { Section } from "./section";

const spacerHeights = {
    medium: "20px",
    large: "40px",
} as const;

export type SpacerSize = keyof typeof spacerHeights;

const spacerOptionsSchema = z.object({
    sectionClass: z.string().optional(),
    height: z.string().optional(),
});

type SpacerOptions = z.input<typeof spacerOptionsSchema>;

export const Spacer = (
    size: SpacerSize = "medium",
    options: SpacerOptions = {}
): MjmlNode => {
    const parsedOptions = spacerOptionsSchema.safeParse(options);
    const normalizedOptions = parsedOptions.success ? parsedOptions.data : options;

    return Section(
        [
            {
                tagName: "mj-spacer",
                attributes: {
                    height: normalizedOptions.height ?? spacerHeights[size],
                },
            },
        ],
        {
            sectionClass: normalizedOptions.sectionClass ?? "bg-block",
        }
    );
};
