import { html } from "@open-wc/testing";
import {
    IconAchievementsSm,
    IconCheckmarkSm,
} from "@stackoverflow/stacks-icons/icons";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid }: any) => html`
    <div class="d-flex ai-center jc-center p8 ws2" data-testid="${testid}">
        ${component}
    </div>
`;

const steppedItems = [
    {
        complete: true,
        label: "Select plan",
    },
    {
        complete: true,
        label: "Team name",
    },
    {
        active: true,
        label: "Payment",
    },
    {
        label: "Create account",
    },
];

const getChildren = (type: string) => {
    switch (type) {
        case "badge":
            return `<div class="s-progress--label" id="example-label">
                <div class="s-badge--label">Electorate</div>
            </div>
            <div class="s-progress--bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" aria-labelledby="example-label" style="width: 75%;"></div>`;
        case "circular":
            return `<svg class="s-progress-bar" role="progressbar" viewbox="0 0 32 32" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75">
                <circle cx="16" cy="16" r="14"></circle>
                <circle cx="16" cy="16" r="14"></circle>
            </svg>`;
        case "privilege":
            return `
                <div class="s-progress--label" id="progress-label">
                    ${IconAchievementsSm}
                    Access Review Queues
                </div>
                <div class="s-progress--bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" aria-labelledby="progress-label" style="width: 75%;"></div>
            `;
        case "segmented":
            return `
                <div class="s-progress--bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" aria-label="…" style="width: 75%;"></div>
                <ol class="s-progress--segments">
                    <li></li><li></li><li></li>
                </ol>
            `;
        case "stepped":
            return steppedItems
                .map((step, i) => {
                    return `
                    <div
                        class="
                            s-progress--step
                            ${step.active ? "is-active" : ""}
                            ${step.complete ? "is-complete" : ""}
                        "
                    >
                        <a href="#" class="s-progress--stop">
                            ${step.complete ? IconCheckmarkSm : ""}
                            <span class="v-visible-sr">${step.label} ${
                                step.complete ? "complete" : "incomplete"
                            }</span>
                        </a>
                        ${
                            i > 0
                                ? '<div class="s-progress--bar s-progress--bar__left"></div>'
                                : ""
                        }

                        ${
                            i < steppedItems.length - 1
                                ? '<div class="s-progress--bar s-progress--bar__right"></div>'
                                : ""
                        }
                        <a class="s-progress--label">${step.label}</a>
                    </div>
                `;
                })
                .join("");
        default:
            return `<div class="s-progress--bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" aria-label="progress" style="width: 75%"></div>`;
    }
};
describe("progress-bar", () => {
    // Base
    runVisualTests({
        baseClass: "s-progress",
        variants: ["brand", "info"],
        children: {
            default: getChildren(""),
        },
        template,
    });

    // Badge
    runVisualTests({
        baseClass: "s-progress",
        variants: ["badge"],
        modifiers: {
            primary: ["gold", "silver", "bronze"],
        },
        children: {
            default: getChildren("badge"),
        },
        template,
        options: {
            includeNullVariant: false,
            includeNullModifier: false,
        },
    });

    // Circular
    runVisualTests({
        baseClass: "s-progress",
        variants: ["circular"],
        modifiers: {
            global: ["fc-green-400", "fc-theme-primary"],
        },
        children: {
            default: getChildren("circular"),
        },
        template,
        attributes: {
            style: "--s-progress-value: .75",
        },
        options: {
            includeNullVariant: false,
            includeNullModifier: false,
        },
    });

    // Privilege
    runVisualTests({
        baseClass: "s-progress",
        variants: ["privilege"],
        children: {
            default: getChildren("privilege"),
        },
        template,
        options: {
            includeNullVariant: false,
        },
    });

    // Segmented
    runVisualTests({
        baseClass: "s-progress",
        variants: ["segmented"],
        children: {
            default: getChildren("segmented"),
        },
        template,
        options: {
            includeNullVariant: false,
        },
    });

    // Stepped
    runVisualTests({
        baseClass: "s-progress",
        variants: ["stepped"],
        children: {
            default: getChildren("stepped"),
        },
        template: ({ component, testid }) => html`
            <div class="d-block p8 ws5" data-testid="${testid}">
                ${component}
            </div>
        `,
        options: {
            includeNullVariant: false,
        },
    });
});
