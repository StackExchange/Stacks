import { IconClearSm } from "@stackoverflow/stacks-icons";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

const children = {
    default: `default`,
    dismiss: `dismiss <span class="s-tag--dismiss">${IconClearSm}</span>`,
    sponsor: `<img class="s-tag--sponsor" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII" width="16" height="16" alt="sponsor">sponsor`,
};

describe("tag", () => {
    runA11yTests({
        baseClass: "s-tag",
        variants: ["ignored", "watched", "moderator", "muted", "required"],
        modifiers: {
            global: ["is-selected"],
        },
        children,
        // TODO: revisit this after minor tag changes are made
        skippedTestids: [
            /s-tag-highcontrast-light-muted/, // 6.33
            /s-tag-light-is-selected/, // 58.28Lc
            /s-tag-light-ignored-is-selected/, // 58.28Lc
            /s-tag-light-moderator-is-selected/, // 49.14Lc
            /s-tag-light-watched-is-selected/, // 58.28Lc
        ],
    });
});
