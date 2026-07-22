import {
    defineEmailComponent,
    defineOption,
    defineOptions,
} from "../src/lib/schema";
import type { MjmlNode } from "../src/lib/types";

const preview = defineEmailComponent({
    slug: "preview",
    htmlExtraction: {
        targetTag: "mj-preview",
    },
    tokens: [
        {
            token: "PREVIEW_TEXT",
            description: "Inbox preview snippet shown next to subject lines.",
        },
    ],
    optionsSchema: defineOptions([
        defineOption({
            name: "textContent",
            type: "string",
            initialValue: "[[PREVIEW_TEXT]]",
            description:
                "Hidden inbox preview snippet shown by supporting email clients.",
        }),
    ]),
    render: ({ options }): MjmlNode => ({
        tagName: "mj-preview",
        content: options.textContent,
    }),
});

export const Preview = preview.component;
export default preview;
