import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

describe("anchors", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-anchors",
        variants: ["danger", "default", "grayscale", "inherit", "muted"],
        children: {
            default: `<p>
                There is a <a href="#">link here</a>, <button class="s-btn s-btn__link">a button</button>, and <a href="#">another link</a>.
            </p>`,
        },
        options: {
            ...defaultOptions,
            includeNullVariant: false,
        },
        skippedTestids: [
            /s-anchors-dark-danger/, // TODO remove when contrast bugs are fixed
            /s-anchors-dark-default/, // TODO remove when contrast bugs are fixed
        ],
    });
});
