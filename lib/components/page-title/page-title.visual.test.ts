import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postTitleTemplate = ({ component, testid }: any) => html`
    <div class="d-block p8 ws6" data-testid="${testid}">${component}</div>
`;

const getChildren = ({
    showEverything = false,
}: {
    showEverything: boolean;
}) => `
    <div class="s-page-title--text">
        ${
            showEverything
                ? `
            <nav class="s-breadcrumbs" aria-label="example-breadcrumbs">
                <div class="s-breadcrumbs--item">
                    <a class="s-breadcrumbs--link">Stack Overflow</a>
                </div>
            </nav>
        `
                : ""
        }
        <h1 class="s-page-title--header">Page title</h1>
        ${
            showEverything
                ? `
            <p class="s-page-title--description">
                Optional description de Finibus Bonorum et Malorum
            </p>
        `
                : ""
        }
    </div>
    ${
        showEverything
            ? `
        <div class="s-page-title--actions">
            <button class="s-btn s-btn__filled" type="button">Action</button>
        </div>
    `
            : ""
    }
`;

describe("page title", () => {
    runVisualTests({
        baseClass: "s-page-title",
        children: {
            default: getChildren({ showEverything: false }),
            complete: getChildren({ showEverything: true }),
        },
        template: postTitleTemplate,
    });
});
