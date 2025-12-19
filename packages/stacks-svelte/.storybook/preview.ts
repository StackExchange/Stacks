import type { Preview } from "@storybook/svelte";
import "@stackoverflow/stacks/lib/stacks.less";

const preview: Preview = {
    parameters: {
        //Don't inject event handlers to storybook code previews since
        //there are no user controls for the user to interact with them.
        //Fixes: https://github.com/storybook-eol/addon-smart-knobs/issues/63#issuecomment-995798227
        actions: { argTypesRegex: null },
        
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: {
            storySort: {
                method: "alphabetical",
                order: ["Getting Started", "Components"],
            },
        },
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
};

export default preview;
