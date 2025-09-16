import type { Preview } from "@storybook/svelte";
import "@stackoverflow/stacks/dist/css/stacks.css";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
};

export default preview;
