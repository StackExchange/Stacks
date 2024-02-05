import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

const base64Image =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAAE8CAMAAABq2/00AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/3IA/////44y/8OS/+fU//Xs/6tn/9e2EhvbMQAABH9JREFUeNrs3e1y2ygAhWELJHH/d7zuJpN1XAnxoe408Ly/6xnnHXEOIEwfDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gbAGEhrZl2VloY20PIk8tAzZbfkXA7eeuHyysVfdFMsXiY66ptiWF8Re05BdxF7HkBV7PUNW7FVx4E7sVSwrDjBw2+pC7NWwHtkTe3ULM7En9v6O2ONF7Ik9sSf2IPbEntgTexB7t8feTsynniD2Oh6tXex1hFoUe02kaxVi72JMZs+Rib0LLdkXFGLvaECWjkOxdxVmUex1rB6S2Kss2lcytSH2LnVkakPsXQ7E8xwTe5fuMrUh9vKj8CP4xN7lNOXc3mnwib1M2X7Z28VeS93mg0/sFZTG6WCMVSE51fqsYL4s9jpqQ+yV1caxErHXUxtir6c2xF5HbYRF7LXXhtjrqQ2x11MbYu9tLG4VtSH2empD7BUNxpPaSGKvPPh2sdcxX45i78baEHs18+X32hB7NfPl99oQex21MVHsxViaR8W1MU3s/XpMSvWF0tqYJfY+BmMq01dcG+scP6/6enTK9BW+1J0j9l5aYN0rP5BzM0XsbSUnAlpqY4LYezexFeRSbpslH3uDXdF64OG6est258PohXE8BK+7o6g29rJTQsPt1F3qK9qdTwMP2Wz2X1Vv0UvdbeQ53nl2Xesr2Z0Pww7Zs5lsafWW1MY+6JDNxv5/+kLb5/fXfzLirRdhKSGnr6A2tkGvJoxLGZnqva6NkAbdgA+pUN9a+QuWYYPu+98ee/W1/PJgoMG7lek7nW3UHiEdbKpcqu+kO2L9b4aG0rcWjt5jfWf2Z7kCeE891XtSG/O86A5d+tbZj1h0VW+c/ja90FG9uxMCFdWb/+SkZ1Oaq/d1vjzvXfvF+tLp+aiZT5S1Vm90lrFj02B3bW1d9X7T92u+7Aq9qk2D+Fob/v/Myu7YostC76xe9K966evfr5+7ekuXHVy1V6+R275pEMd3kPbGB+Syeod/8D7Sf41NBvPdMf7a4uXpaTGY0zd+4r0vDlKtwdPqHf/BOzzf8zQYqvRtcz54mXfUNUVyUL0T7AhcrBbKY/C36p1geVEy1y00+F3fBA9eKFxnlRXJa/XOcKxnqeF6Pv1VvTPc7RuXai6K5LN6Z9hQSUsb2Rh86pviUultaScTg/sMD15YeqmcT8/bFx1Foi/umk9P3hcMfqTenrabBT5j8DGTwHivwelOCTwNrnfJm/Ol2U0GZ74WdE+dBn9+Z/z2J9UZ7IjB7dZv8gPl9RRJIq89BiN57QZ38trn04G8k62E6xjcHuQ1D+JEXrvBnbz2+XQgr30+/SCveT69ktceg4m8doOBvDG/CXnkkTezvOXPQB555JFHHnnkkUceeeSRRx555JFHHnnkkWcnmTzyyCOPPPLII4888sgjjzzfhDzyyCOPPPL+9Ff+eyCPPPLII4888sgjjzzyyCOPPPLII4888sgDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPy//CPAAPiZOI3BPDFQAAAAAElFTkSuQmCC";

const getChild = (child?: string): string => {
    const srEl = `<span class="v-visible-sr">Stack Overflow</span>`;
    switch (child) {
        case "image":
            return `<img
                class="s-avatar--image"
                src="${base64Image}"
                alt="team logo"
            />${srEl}`;
        case "letter":
            return `<div
                class="s-avatar--letter"
                aria-hidden="true">
                    S
            </div>${srEl}`;
        default:
            return srEl;
    }
};

describe("avatar", () => {
    runVisualTests({
        baseClass: "s-avatar",
        variants: ["24", "32", "48", "64", "96", "128"],
        children: {
            default: getChild(),
            image: getChild("image"),
            letter: getChild("letter"),
        },
        attributes: {
            href: "#",
        },
        tag: "a",
        template: ({ component, testid }) => html`
            <div
                data-testid="${testid}"
                class="d-inline-flex ai-center jc-center hmn1 wmn1 p8"
            >
                ${component}
            </div>
        `,
    });
});
