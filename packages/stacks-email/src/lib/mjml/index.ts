import { z } from "zod/v4";

import type { MjmlNode } from "../types";

const mjmlAttributeSchema = z.union([z.string(), z.number(), z.boolean()]);

const sectionOptionsSchema = z.object({
    sectionClass: z.string().optional(),
    sectionAttributes: z.record(z.string(), mjmlAttributeSchema).optional(),
    columnClass: z.string().optional(),
    columnAttributes: z.record(z.string(), mjmlAttributeSchema).optional(),
});

type SectionOptions = z.input<typeof sectionOptionsSchema>;

export const Section = (
    children: MjmlNode[],
    options: SectionOptions = {}
): MjmlNode => {
    const parsedOptions = sectionOptionsSchema.safeParse(options);
    const normalizedOptions = parsedOptions.success
        ? parsedOptions.data
        : options;

    const sectionAttributes: NonNullable<MjmlNode["attributes"]> = {
        ...(normalizedOptions.sectionClass
            ? { "mj-class": normalizedOptions.sectionClass }
            : {}),
        ...(normalizedOptions.sectionAttributes ?? {}),
    };

    const columnAttributes: NonNullable<MjmlNode["attributes"]> = {
        ...(normalizedOptions.columnClass
            ? { "mj-class": normalizedOptions.columnClass }
            : {}),
        ...(normalizedOptions.columnAttributes ?? {}),
    };

    return {
        tagName: "mj-section",
        attributes: Object.keys(sectionAttributes).length
            ? sectionAttributes
            : undefined,
        children: [
            {
                tagName: "mj-column",
                attributes: Object.keys(columnAttributes).length
                    ? columnAttributes
                    : undefined,
                children,
            },
        ],
    };
};
