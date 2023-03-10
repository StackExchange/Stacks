import { html } from "@open-wc/testing";
import { runComponentTest } from "../ts/test-utils";
import { runComponentTests } from "../ts/test-utils";
import "../ts/index";

// TODO uncomment when btn tests are generated below
// const getChild = (child) => {
//     switch (child) {
//         case "badge":
//             return `Ask question
//                 <span class="s-btn--badge">
//                     <span class="s-btn--number">198</span>
//                 </span>`;
//         default:
//             return "Ask question";
//     }
// };

describe("s-btn", () => {
    // TODO re-enable test when test-utils functions are stable
    // TODO test disabled states, interaction pseudo-classes
    // runComponentTests({
    //     type: "visual",
    //     baseClass: "s-btn",
    //     variants: ["danger", "muted", "primary"],
    //     modifiers: {
    //         primary: ["filled", "outlined"],
    //         secondary: [...["xs", "sm", "md"], ...["dropdown", "icon"]],
    //         global: ["is-loading"],
    //         standalone: [
    //             ...["link", "unset"],
    //             ...["facebook", "github", "google"],
    //         ],
    //     },
    //     attributes: {
    //         role: "button",
    //     },
    //     children: {
    //         default: "Ask question",
    //     },
    //     tag: "button",
    //     template: ({
    //         component,
    //         testid,
    //     }) => html`
    //         <div
    //             class="bg-black-100 d-inline-flex ai-center jc-center hs1 ws2 p8"
    //             data-testid="${testid}"
    //         >
    //             ${component}
    //         </div>
    //     `,
    // });

    // loading button
    const loadingBtnTestid = "s-btn-is-loading";
    runComponentTest({
        // Adding a padded wrapper to avoid GitHub Actions diff discrepancies
        element: html`
            <div
                data-testid="${loadingBtnTestid}"
                style="height: 38px; width: 88px; display: inline-block;"
            >
                <button class="s-btn is-loading" type="button">Loading</button>
            </div>
        `,
        testid: loadingBtnTestid,
        type: "visual",
    });
});
