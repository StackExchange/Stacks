// TODO: fix ts error that made me add a ts-ignore
// @ts-ignore
import * as axe from "axe-core";
import { AxeResults, ImpactValue } from "axe-core";

// to increase or decrease the scope of issues we're reporting, change this
const impactLevelsToInclude: ImpactValue[] = ["serious", "critical"];

const a11yButton = document.querySelector(".js-a11y-btn");
const a11yViolationInfo = document.querySelector(".js-a11y-violation-info");

function renderAccessibilityButton() {
    a11yButton?.addEventListener("click", scan);
}

function scan() {
    if (a11yButton) {
        setLoadingState(a11yButton);
    }
    setTimeout(doRun, 10); // shove axe scan into the background to keep our UI responsive

    function doRun() {
        axe.run()
            .then(reportResults)
            .catch(error => console.error("error running accessibility scan", error));
    }
}

function setLoadingState(a11yButton: Element) {
    a11yButton.classList.add("is-loading");
    a11yButton.textContent = "Scanning…";
}

function reportResults(results: AxeResults) {
    const { violations } =  results;
    let filteredViolations;

    if (violations) {
        filteredViolations  = violations.filter(v => {
            return v.impact && impactLevelsToInclude.includes(v.impact);
        });
        if (filteredViolations.length > 0) {
            console.warn("Accessibility issues found!");
            console.table(filteredViolations);

            for (let violation of filteredViolations) {
                for (let affectedNode of violation.nodes) {
                    affectedNode.target.forEach(targets => {
                        document.querySelectorAll(targets).forEach(target => {
                            target.classList.add("ba", "baw2", "bas-dashed", "bc-error");
                            // @ts-ignore
                            target.addEventListener("mouseenter", (e) => showViolationDetails(e, violation, affectedNode));
                        });
                    })
                }
            }
        }
        updateAccessibilityButton(filteredViolations);
    }
}

function updateAccessibilityButton(violations: axe.Result[]) {
    a11yButton?.classList.remove("is-loading");

    if (violations.length > 0 && a11yButton) {
        a11yButton.classList.add("s-btn__danger", "s-btn--badge", "s-btn__dropdown");
        a11yButton.textContent = "Accessibility issues ";
        a11yButton.append(`<span class="s-btn--badge"><span class="s-btn--number">${violations.length}</span></span>`)

        a11yButton.removeEventListener("click", scan); // prevent triggering another accessibility scan when we want to toggle the violation popover instead
    }
}

function showViolationDetails(event: Event, violation: axe.Result, affectedNode: axe.NodeResult) {
    console.group("Accessibility issue");
    console.warn("Violation: ", violation);
    console.warn("Affected Node: ", affectedNode);
    console.groupEnd();

    const reportHtml = `
<div class="mb4"><strong>Rule ID: </strong> <span>${escapeHtml(violation.id)}</span></div>
<div class="mb4"><strong>Help: </strong> <span><a href="${escapeHtml(violation.helpUrl)}">${escapeHtml(violation.help)}</a></span></div>
<div class="mb4"><strong>Impact: </strong> <span>${escapeHtml(affectedNode.impact)}</span></div>
<pre class="mb4 s-code-block fs-fine ws-pre-wrap">${escapeHtml(affectedNode.failureSummary)}</pre>
`
    if (a11yViolationInfo) {
        a11yViolationInfo.innerHTML = reportHtml;
    }
}

// https://stackoverflow.com/a/6234804/1370722
// TODO: add type
function escapeHtml(unsafe: any) {
    return unsafe && unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// @ts-ignore
$(document).ready(function() {
    renderAccessibilityButton();
});
