import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

const getChild = (child?: string): string => {
    return `
        <div class="s-link-preview--header">
            <div class="s-link-preview--icon">👋</div>
            <div>
                <a href="#" class="s-link-preview--title">
                    Using hooks for a simple fetch request and breaking the rules of hooks, unsure how?
                </a>
                <div class="s-link-preview--details">
                    Issue submitted by Ricky Otero on <relative-time datetime="2019-08-12T04:05:22Z" title="Aug 12, 2019, 12:05 AM EDT">Aug 12, 2019</relative-time> • <strong>RESOLVED</strong>
                </div>
            </div>
        </div>
        ${
            child
                ? child
                : `
            <div class="s-link-preview--body">
                <p>I'm trying to create a simple fetch with hooks from an AWS database. At the moment it errors out and the only reason I can see is because it breaks the rules of hooks but I'm not sure how. It's at the top level of this functional component and it's not called inside an event handler.</p>
                <p>The result of this call (an array of user data), needs to be exported as a function and called in another file.</p>
                <p>If anyone can spot something I have missed and can highlighted how I'm breaking the rules of hooks I'd be grateful!</p>
                <p>Thanks!</p>
            </div>
        `
        }
        <div class="s-link-preview--footer">
            <a href="#" class="s-link-preview--url">https://stackoverflow.atlassian.net/projects/SREREQ/queues/custom/1</a>
            <a href="#" class="s-link-preview--misc">Privacy notice</a>
        </div>
    `;
};
describe("link preview", () => {
    runA11yTests({
        baseClass: "s-link-preview",
        children: {
            default: getChild(),
            code: getChild(`
                <div class="s-link-preview--code">
                    <pre class="language-js s-code-block" tabindex="0"><code class="language-js s-code-block"><span class="hljs-meta">'use strict'</span>;</code></pre>
                </div>
            `),
        },
    });
});
