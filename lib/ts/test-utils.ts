import { html, fixture, expect, unsafeStatic } from "@open-wc/testing";
import { screen } from "@testing-library/dom";

const attrObjToString = (attrs: Record<string, string>): string => {
    const attrString = Object.keys(attrs).map((key) => {
        return `${key}="${attrs[key]}"` || "";
    })
    return attrString.join(" ") || "";
};

export const buildTestid = (arr: string[]) => arr.filter(Boolean).join("-");

// TODO: create `makeTests` function to generate tests for all variants and modifiers
// s-avatar example:
// makeTests({
//     baseClass: "s-avatar",
//     variants: null,
//     modifiers: {
//         basePrimary: ["24", "32", "48", "64", "96", "128"],
//     },
//     children: [
//         `<img
//             class="s-avatar--image"
//             src="https://picsum.photos/48"
//             alt="team logo"
//         />`,
//         `<div class="s-avatar--letter" aria-hidden="true">S</div>`,
//     ],
//     options: {
//         testColorThemes: true,
//         testHighContrast: true,
//         includeNullVariant: false,
//         includeNullModifier: true,
//     },
// });
// 
// s-btn example:
// makeTests({
//     baseClass: "s-btn",
//     variants: ["danger", "muted", "primary"],
//     modifiers: {
//         basePrimary: [
//             ...["xs", "sm", "md"],
//             ...["link", "unset"],
//             ...["facebook", "github", "google"],
//         ],
//         baseSecondary: ["dropdown", "icon"],
//         global: ["is-loading"],
//     },
//     children: [
//         `Ask question`,
//         `
//             Ask question
//             <span class="s-btn--badge">
//                 <span class="s-btn--number">198</span>
//             </span>
//         `,
//     ],
// });

export const makeTest = ({
    attributes = {},
    children = "",
    tag = "div",
    testid,
    theme,
}: {
    attributes?: Record<string, string>;
    children?: string;
    tag?: string;
    testid: string;
    theme: string[];
}) => {
  it(`a11y: ${testid} should be accessible`, async () => {
        const unsafe = {
            tag: unsafeStatic(tag),
            attributes: unsafeStatic(attrObjToString(attributes).toString()),
            children: unsafeStatic(children),
        }
        await fixture(html`
            <${unsafe.tag}
                ${unsafe.attributes}
                data-testid="${testid}"
            >
                ${unsafe.children}
            </${unsafe.tag}>
        `);

        document.body.className = "";
        document.body.classList.add(...theme);
        const el = screen.getByTestId(testid);
        // TODO add conditional option for high contrast mode to test against AAA
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        await expect(el).to.be.accessible();
  });
};
