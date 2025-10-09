import { create } from "storybook/theming/create";

export default create({
    base: "light",

    fontBase:
        '-apple-system, BlinkMacSystemFont, "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif',

    brandTitle: "Stacks Svelte",
    // TODO
    // brandImage: "<link to stacks svelte svg>",
    brandTarget: "_self",
});
