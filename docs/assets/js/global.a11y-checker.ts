// TODO: fix ts error that made me add a ts-ignore
// @ts-ignore
import * as axe from "axe-core";
import { AxeResults, ImpactValue } from "axe-core";

// to increase or decrease the scope of issues we're reporting, change this
const impactLevelsToInclude: ImpactValue[] = ["serious", "critical"];

const a11yScanButton = document.querySelector(".js-a11y-scan-btn");
const a11yIssuesButton = document.querySelector(".js-a11y-issues-btn");
const a11yViolationInfo = document.querySelector(".js-a11y-violation-info");

function renderAccessibilityButton() {
    a11yScanButton?.addEventListener("click", scan);
}

function scan() {
    if (a11yScanButton) {
        setLoadingState(a11yScanButton);
    }
    setTimeout(doRun, 10); // shove axe scan into the background to keep our UI responsive

    function doRun() {
        axe.run()
            .then(reportResults)
            .catch((error) =>
                console.error("error running accessibility scan", error)
            );
    }
}

function setLoadingState(a11yScanButton: Element) {
    a11yScanButton.classList.add("is-loading");
    a11yScanButton.textContent = "Scanning…";
}

function reportResults(results: AxeResults) {
    const { violations } = results;
    let filteredViolations;

    if (violations) {
        filteredViolations = violations.filter((v) => {
            return v.impact && impactLevelsToInclude.includes(v.impact);
        });
        if (filteredViolations.length > 0) {
            console.warn("Accessibility issues found!");
            console.table(filteredViolations);

            for (const violation of filteredViolations) {
                for (const affectedNode of violation.nodes) {
                    affectedNode.target.forEach((targets) => {
                        document.querySelectorAll(targets).forEach((target) => {
                            target.classList.add(
                                "ba",
                                "baw2",
                                "bas-dashed",
                                "bc-error"
                            );
                            // @ts-ignore
                            target.addEventListener("mouseenter", (e) =>
                                showViolationDetails(violation, affectedNode)
                            );
                        });
                    });
                }
            }
        }
        updateAccessibilityButton(filteredViolations);
    }
}

function updateAccessibilityButton(violations: axe.Result[]) {
    a11yScanButton?.classList.remove("is-loading");

    if (a11yIssuesButton && a11yScanButton) {
        if (violations.length === 0) {
            a11yIssuesButton.classList.remove("s-btn__danger");
        } else {
            a11yIssuesButton.classList.add("s-btn__danger");
        }
        const issuesEl = `
<span>
<span>Accessibility issues</span>
<span class="s-btn--badge">
<span class="s-btn--number">${violations.length}</span>
</span>
</span>
`;
        a11yIssuesButton.classList.remove("d-none")
        a11yScanButton.textContent = "Rescan";
        a11yIssuesButton.innerHTML = issuesEl;
        // a11yScanButton.removeEventListener("click", scan); // prevent triggering another accessibility scan when we want to toggle the violation popover instead
    }
}

function showViolationDetails(
    violation: axe.Result,
    affectedNode: axe.NodeResult
) {
    console.group("Accessibility issue");
    console.warn("Violation: ", violation);
    console.warn("Affected Node: ", affectedNode);
    console.groupEnd();

    const reportHtml = `
<div class="mb4"><strong>Rule ID: </strong> <span>${escapeHtml(violation.id)}</span></div>
<div class="mb4"><strong>Help: </strong> <span><a href="${escapeHtml(violation.helpUrl)}">${escapeHtml(violation.help)}</a></span></div>
<div class="mb4"><strong>Impact: </strong> <span>${escapeHtml(affectedNode.impact)}</span></div>
<pre class="mb4 s-code-block fs-fine ws-pre-wrap">${escapeHtml(affectedNode.failureSummary)}</pre>
`;
    if (a11yViolationInfo) {
        a11yViolationInfo.innerHTML = reportHtml;
    }
}

// https://stackoverflow.com/a/6234804/1370722
// TODO: add type
function escapeHtml(unsafe: any) {
    return (
        unsafe &&
        unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
    );
}

renderAccessibilityButton();

// @ts-ignore
$(document).ready(function () {
});
