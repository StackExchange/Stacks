import {
    defineEmailComponent,
    defineOption,
    defineOptions,
} from "../src/lib/schema";
import type { MjmlNode } from "../src/lib/types";
import { Section } from "../src/lib/mjml";

const spacer = defineEmailComponent({
    slug: "spacer",
    defaultVariant: "medium",
    htmlExtraction: {
        targetTag: "mj-spacer",
    },
    variants: {
        large: {
            height: "40px",
        },
    },
    optionsSchema: defineOptions([
        defineOption({
            name: "sectionClass",
            type: "string",
            initialValue: "bg-block",
            description: "Applied to the wrapper section.",
        }),
        defineOption({
            name: "height",
            type: "string",
            initialValue: "20px",
            description: 'Spacer height, for example "64px".',
        }),
    ]),
    render: ({ options }): MjmlNode =>
        Section(
            [
                {
                    tagName: "mj-spacer",
                    attributes: {
                        height: options.height,
                    },
                },
            ],
            {
                sectionClass: options.sectionClass,
            }
        ),
});

export const Spacer = spacer.component;
export default spacer;
