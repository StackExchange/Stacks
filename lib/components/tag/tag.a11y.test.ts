import { IconClearSm } from "@stackoverflow/stacks-icons";
import { runComponentTests } from "../../test/test-utils";
import "../../index";

const children = {
    default: `default`,
    dismiss: `dismiss <span class="s-tag--dismiss">${IconClearSm}</span>`,
    sponsor: `<img class="s-tag--sponsor" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII" width="16" height="16" alt="sponsor">sponsor`,
};

describe("tag", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-tag",
        variants: ["ignored", "watched", "moderator", "muted", "required"],
        modifiers: {
            global: ["is-selected"],
        },
        children,
        // TODO: revisit this after minor tag changes are made
        skippedTestids: [/s-tag/],
    });
});
