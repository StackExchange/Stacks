import { html, fixture, expect, unsafeStatic } from "@open-wc/testing";
import { screen } from "@testing-library/dom";

// TODO reinstate "theme-dark" test once we add ability to skip tests or resolve dark mode contrast issues
// const colorThemes = ["theme-dark", "theme-light"];
const colorThemes = ["theme-light"];
const baseThemes = ["", "theme-highcontrast"];

interface TestOptions {
    testColorThemes: boolean;
    testHighContrast: boolean;
    includeNullVariant: boolean;
    includeNullModifier: boolean;
}

interface TestModifiers {
    primary?: string[];
    secondary?: string[];
    global?: string[];
    standalone?: string[];
}

interface TestProps {
    classes: string;
    testid: string;
    theme: string[];
}

const attrObjToString = (attrs: Record<string, string>): string => {
    const attrString = Object.keys(attrs).map((key) => {
        return `${key}="${attrs[key]}"` || "";
    });
    return attrString.join(" ") || "";
};

export const buildTestid = (arr: string[]) => arr.filter(Boolean).join("-");

export const getTestVariations = ({
    baseClass,
    variants = [],
    modifiers = {
        primary: [""],
        secondary: [""],
        global: [""],
        standalone: [""],
    },
    options = {
        testColorThemes: true,
        testHighContrast: true,
        includeNullVariant: false,
        includeNullModifier: true,
    },
}: {
    baseClass: string;
    variants?: string[];
    modifiers?: TestModifiers;
    options?: TestOptions;
}) => {
    const testVariations: TestProps[] = [];

    const makeClass = (modifier: string) =>
        modifier
            ? ` ${baseClass}__${modifier.replace("-", ` ${baseClass}__`)}`
            : "";

    // Test default, high contrast themes
    [...(options.testHighContrast ? baseThemes : [""])].forEach((baseTheme) => {
        // Test light, dark theme
        [...(options.testColorThemes ? colorThemes : [""])].forEach(
            (colorTheme) => {
                const theme = [baseTheme, colorTheme].filter(Boolean);
                const testidBase = buildTestid([baseClass, ...theme]);

                // TODO account for no primary/secondary modifiers
                ["", ...(<[]>modifiers.primary)].forEach((primaryModifier) => {
                    const primaryClasses = makeClass(primaryModifier);

                    ["", ...(<[]>modifiers.secondary)].forEach(
                        (secondaryModifier) => {
                            const secondaryClasses =
                                makeClass(secondaryModifier);

                            ["", ...(<[]>modifiers.global)].forEach(
                                (globalModifier) => {
                                    const globalClasses =
                                        makeClass(globalModifier);

                                    ["", ...variants].forEach((variant) => {
                                        const variantClasses =
                                            makeClass(variant);
                                        const classesVariant = ` ${variantClasses}${primaryClasses}${secondaryClasses}${globalClasses}`;
                                        const testidVariant = buildTestid([
                                            testidBase,
                                            variant,
                                            [
                                                primaryModifier,
                                                secondaryModifier,
                                                globalModifier,
                                            ]
                                                .filter(Boolean)
                                                .join("-"),
                                        ]);

                                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                                        testVariations.push({
                                            testid: testidVariant,
                                            classes: classesVariant,
                                            theme,
                                        });
                                    });
                                }
                            );
                        }
                    );
                });

                // create standalone modifiers test props
                modifiers?.standalone?.forEach((standaloneModifier) => {
                    const standaloneClasses = makeClass(standaloneModifier);
                    const testidVariant = buildTestid([
                        testidBase,
                        standaloneModifier,
                    ]);

                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    testVariations.push({
                        testid: testidVariant,
                        classes: standaloneClasses,
                        theme,
                    });
                });
            }
        );
    });

    return testVariations;
};

export const makeTestElement = ({
    attributes = {},
    children = "",
    tag = "div",
    testid,
}: {
    attributes?: Record<string, string>;
    children?: string;
    tag?: string;
    testid: string;
}) => {
    const unsafe = {
        tag: unsafeStatic(tag),
        attributes: unsafeStatic(attrObjToString(attributes).toString()),
        children: unsafeStatic(children),
    };

    return html`
        <${unsafe.tag}
            ${unsafe.attributes}
            data-testid="${testid}"
        >
            ${unsafe.children}
        </${unsafe.tag}>
    `;
};

export const makeA11yTest = ({
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
        await fixture(makeTestElement({ attributes, children, tag, testid }));

        document.body.className = "";
        document.body.classList.add(...theme);
        const el = screen.getByTestId(testid);
        // TODO add conditional option for high contrast mode to test against AAA
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        await expect(el).to.be.accessible();
    });
};

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
