import { html, fixture, expect, unsafeStatic } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import { visualDiff } from "@web/test-runner-visual-regression";

// TODO reinstate "dark" test once we add ability to skip tests or resolve dark mode contrast issues
// const colorThemes = ["dark", "light"];
const colorThemes = ["light"];
const baseThemes = ["", "highcontrast"];

type Themes = ["light" | "dark" | "highcontrast" | ""];

type TestOptions = {
    testColorThemes: boolean;
    testHighContrast: boolean;
    includeNullVariant: boolean;
    includeNullModifier: boolean;
}

type TestModifiers = {
    primary?: string[];
    secondary?: string[];
    global?: string[];
    standalone?: string[];
}

type TestProps = {
    classes: string;
    testid: string;
    theme?: Themes;
}

const attrObjToString = (attrs: Record<string, string>): string => {
    const attrString = Object.keys(attrs).map((key) => {
        return `${key}="${attrs[key]}"` || "";
    });
    return attrString.join(" ") || "";
};

const buildClasses = ({
    baseClass,
    prefixed = [],
    unprefixed = [],
}: {
    baseClass: string;
    prefixed?: string[];
    unprefixed?: string[];
}) => [
    baseClass,
    ...prefixed.filter((x) => x).map((suffix) => `${baseClass}__${suffix}`),
    ...unprefixed.filter((x) => x),
].join(" ");

const buildTestElement = ({
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

const buildTestid = (arr: string[]) => arr.filter(Boolean).join("-");

const getComponentTestVariations = ({
    baseClass,
    variants = [],
    modifiers,
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

    // Test default, high contrast themes
    [...(options.testHighContrast ? baseThemes : [""])].forEach((baseTheme) => {
        // Test light, dark theme
        [...(options.testColorThemes ? colorThemes : [""])].forEach(
            (colorTheme) => {
                const theme = [baseTheme, colorTheme].filter(Boolean) as Themes;
                const testidBase = buildTestid([baseClass, ...theme]);
                const primaryModifiers = modifiers?.primary
                    ? ["", ...(<[]>modifiers.primary)]
                    : [""];
                const secondaryModifiers = modifiers?.secondary
                    ? ["", ...(<[]>modifiers.secondary)]
                    : [""];
                const globalModifiers = modifiers?.global
                    ? ["", ...(<[]>modifiers.global)]
                    : [""];

                primaryModifiers.forEach((primaryModifier) => {
                    secondaryModifiers.forEach((secondaryModifier) => {
                        globalModifiers.forEach((globalModifier) => {
                            ["", ...variants].forEach((variant) => {
                                testVariations.push({
                                    classes: buildClasses({
                                        baseClass,
                                        prefixed: [
                                            variant,
                                            primaryModifier,
                                            secondaryModifier,
                                        ],
                                        unprefixed: [globalModifier],
                                    }),
                                    testid: buildTestid([
                                        testidBase,
                                        variant,
                                        [
                                            primaryModifier,
                                            secondaryModifier,
                                            globalModifier,
                                        ]
                                            .filter(Boolean)
                                            .join("-"),
                                    ]),
                                    theme,
                                });
                            });
                        });
                    });
                });

                // create standalone modifiers test props
                modifiers?.standalone?.forEach((standaloneModifier) => {
                    testVariations.push({
                        testid: buildTestid([
                            testidBase,
                            standaloneModifier,
                        ]),
                        classes: buildClasses({
                            baseClass,
                            prefixed: [standaloneModifier],
                        }),
                        theme,
                    });
                });
            }
        );
    });

    // Sorting for readability
    return testVariations.sort((a, b) => a.testid.localeCompare(b.testid));
};

const runComponentTest = ({
    element,
    testid,
    theme,
    type,
}: {
    element: any; // TODO type properly
    testid: string;
    theme?: Themes;
    type: "a11y" | "visual";
}) => {
    const getDescription = (type: string) => {
        switch (type) {
            case "a11y":
                return "should be accessible";
            case "visual":
                return "should not introduce visual regressions";
            default:
                return "";
        }
    };

    it(`${type}: ${testid} ${getDescription(type)}`, async () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        await fixture(element);
        const el = screen.getByTestId(testid);

        document.body.className = "";

        if (theme?.length) {
            const prefixedThemes = theme.map((t) => `theme-${t}`);
            document.body.classList.add(...prefixedThemes);
        }

        if (type === "a11y") {
            // TODO add conditional option for high contrast mode to test against AAA
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            await expect(el).to.be.accessible();
        }

        if (type === "visual") {
            await visualDiff(el, testid);
        }
    });
};

// TODO come up with sensible naming convention for functions
export {
    buildTestElement,
    getComponentTestVariations,
    runComponentTest,
}
