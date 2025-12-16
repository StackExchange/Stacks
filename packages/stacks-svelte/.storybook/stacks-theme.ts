import { create } from "storybook/theming/create";
import { IconGlyph24 } from "@stackoverflow/stacks-icons/icons";

export default create({
    base: "light",

    fontBase:
        '-apple-system, BlinkMacSystemFont, "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif',

    brandTitle: `<span class="d-flex">
        ${IconGlyph24}
        <span class="fs-body3 ws-nowrap lh-xs as-end">Stacks Svelte</span>
        <span class="s-badge s-badge__featured s-badge__sm as-end ml8 mb1">Beta</span>
    </span>`,
    brandTarget: "_self",
});
