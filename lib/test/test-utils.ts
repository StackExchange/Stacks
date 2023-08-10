import { html, fixture, expect, unsafeStatic } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import { visualDiff } from "@web/test-runner-visual-regression";
import type { TemplateResult } from "lit-html";
import axe from "axe-core";
import registerAxeAPCA from "./axe-apca";

const colorThemes = ["dark", "light"];
const baseThemes = ["", "highcontrast"];
export const defaultOptions = {
    testColorThemes: true,
    testHighContrast: true,
    includeNullVariant: true,
    includeNullModifier: true,
};

type Themes = ["light" | "dark" | "highcontrast" | ""];
type TestTypes = "visual" | "a11y";

type TestOptions = {
    /**
     * Enable tests for all color themes
     * default: true
     */
    testColorThemes: boolean;
    /**
     * Enable tests for high contrast
     * default: true
     */
    testHighContrast: boolean;
    /**
     * Provide a custom testid suffix
     * default: undefined
     */
    testidSuffix?: string;
    /**
     * Include tests for the component without any variants applied
     * default: true
     */
    includeNullVariant: boolean;
    /**
     * Include tests for the component without any modifiers applied
     * default: true
     */
    includeNullModifier: boolean;
};

interface ComponentTestVariationArgs {
    /**
     * Base class of the component
     * (e.g. "s-component")
     */
    baseClass: string;
    /**
     * Variants of the component
     * (e.g. ["primary", "secondary"])
     */
    variants?: string[];
    /**
     * Modifiers of the component
     * (e.g. { primary: ["filled", "outlined"], secondary: ["xs", "sm", "md"] })
     */
    modifiers?: ComponentTestModifiers;
    /**
     * Options for the test
     */
    options?: TestOptions;
}

type ComponentTestArgs = {
    /**
     * The element to test
     * use the `html` template tag to render the element
     */
    element: TemplateResult;
    /**
     * testid of the test
     * (e.g. "s-component-primary-important")
     */
    testid: string;
    /**
     * Theme to apply to the test element
     */
    theme?: Themes;
    /**
     * Type of test to run
     */
    type: TestTypes;
};

interface ComponentTestsArgs extends ComponentTestVariationArgs {
    /**
     * Additional html attributes applied to the test element
     * (e.g. { role: "button",  id: "id" } -> <element role="button" id="id">  )
     */
    attributes?: Record<string, string>;
    /**
     * Child elements to render inside the test element
     * (if key `default` is used, the testid will not include the child name)
     */
    children?: {
        [key: string]: string;
    };
    /**
     * testids of tests to exclude from testing
     */
    excludedTestids?: (string | RegExp)[];
    /**
     * testids of tests to skip
     */
    skippedTestids?: (string | RegExp)[];
    /**
     * HTML tag name of the test element
     */
    tag?: string;
    /**
     * Function that returns a template for the test element
     * used to wrap the component test element in a container
     */
    template?: (args: {
        component: unknown;
        tag?: string;
        testid: string;
    }) => ReturnType<typeof html>;
    /**
     * Type of test to run
     */
    type: TestTypes;
}

type ComponentTestModifiers = {
    /**
     * Primary grouping of modifiers to test
     * The base class will be used as a prefix for these modifiers
     */
    primary?: string[];
    /**
     * Secondary grouping of modifiers to test
     * The base class will be used as a prefix for these modifiers
     */
    secondary?: string[];
    /**
     * Grouping of modifers to test that will not be prefixed with the base class
     */
    global?: string[];
    /**
     * Modifiers to test individually
     * The base class will be used as a prefix for these modifiers
     */
    standalone?: string[];
};

type ComponentTestProps = {
    classes: string;
    testid: string;
    theme?: Themes;
};

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
}) =>
    [
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
    options = defaultOptions,
}: ComponentTestVariationArgs): ComponentTestProps[] => {
    const testVariations: ComponentTestProps[] = [];
    // Test default, high contrast themes
    [...(options.testHighContrast ? baseThemes : [""])].forEach((baseTheme) => {
        // Test light, dark theme
        [...(options.testColorThemes ? colorThemes : [""])].forEach(
            (colorTheme) => {
                const theme = [baseTheme, colorTheme].filter(Boolean) as Themes;
                const testidBase = buildTestid([baseClass, ...theme]);
                const allVariants = options.includeNullVariant
                    ? ["", ...variants]
                    : variants;
                const primaryModifiers = modifiers?.primary
                    ? options.includeNullModifier
                        ? ["", ...(<[]>modifiers.primary)]
                        : modifiers.primary
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
                            allVariants.forEach((variant) => {
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
                        testid: buildTestid([testidBase, standaloneModifier]),
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

/**
 * Constructs and runs an individual test for a component
 */
const runComponentTest = ({
    element,
    testid,
    theme,
    type,
}: ComponentTestArgs) => {
    const getDescription = (type: TestTypes) => {
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
        await fixture(element);
        const el = screen.getByTestId(testid);

        document.body.className = "";

        if (theme?.length) {
            const prefixedThemes = theme.map((t) => `theme-${t}`);
            document.body.classList.add(...prefixedThemes);
        }

        if (type === "a11y") {
            axe.configure({
                rules: [{ id: "color-contrast", enabled: false }],
            });
            registerAxeAPCA("bronze");
            // TODO add conditional option for high contrast mode to test against AAA
            await expect(el).to.be.accessible();
        }

        if (type === "visual") {
            await visualDiff(el, testid);
        }
    });
};

/**
 * Constructs and runs tests for a component with a each provided combination
 */
const runComponentTests = ({
    baseClass,
    variants = [],
    modifiers,
    options = defaultOptions,
    attributes,
    children,
    excludedTestids = [],
    skippedTestids = [],
    tag,
    template,
    type,
}: ComponentTestsArgs) => {
    getComponentTestVariations({
        baseClass,
        variants,
        modifiers,
        options,
    }).forEach(({ testid, classes, theme }) => {
        const allChildren: {
            [key: string]: string;
        } = children ? { ...children } : { default: "" };
        const { testidSuffix } = options;

        Object.keys(allChildren).forEach((key) => {
            let testidModified = (
                key !== "default" ? `${testid}-${key}` : testid
            ).replace(" ", "-");
            testidModified = testidSuffix
                ? `${testidModified}-${testidSuffix}`
                : testidModified;

            const children = allChildren[key];

            const shouldSkipTest = excludeOrSkipTest({
                patterns: skippedTestids,
                skip: true,
                testid: testidModified,
                type,
            });

            const shouldExcludeTest = excludeOrSkipTest({
                patterns: excludedTestids,
                testid: testidModified,
                type,
            });

            if (shouldSkipTest || shouldExcludeTest) {
                return;
            }

            const element = template
                ? html`${template({
                      testid: testidModified,
                      component: buildTestElement({
                          attributes: {
                              ...attributes,
                              class: `${classes} ${attributes?.class || ""}`,
                          },
                          children,
                          testid: `${testidModified}-nested`,
                          tag,
                      }),
                  })}`
                : buildTestElement({
                      attributes: {
                          ...attributes,
                          class: `${classes} ${attributes?.class || ""}`,
                      },
                      children,
                      testid: testidModified,
                      tag,
                  });

            runComponentTest({
                element,
                testid: testidModified,
                theme,
                type,
            });
        });
    });
};

const matchTestidByPattern = ({
    testid,
    pattern,
}: {
    testid: string;
    pattern: string | RegExp;
}): boolean => {
    if (pattern instanceof RegExp) {
        return pattern.test(testid);
    } else {
        return pattern === testid;
    }
};

const excludeOrSkipTest = ({
    patterns,
    skip = false,
    testid,
    type,
}: {
    patterns: (string | RegExp)[];
    skip?: boolean;
    testid: string;
    type: TestTypes;
}): boolean => {
    const matchesTest = patterns.some((pattern) => {
        return matchTestidByPattern({ testid, pattern });
    });

    if (matchesTest && skip) {
        it.skip(`${type}: ${testid} (skipped)`, () => {
            return;
        });
    }

    return matchesTest;
};

export { runComponentTest, runComponentTests };

/**
 * Convert a const array of strings into a union type of the array's values.
 *
 * @example
 * ```
 * const arrayOfStrings = ['Stacky', 'Ben', 'Dan', 'Giamir'] as const;
 * type StringLiterals = AsLiterals<typeof arrayOfStrings>; // 'Stacky' | 'Ben' | 'Dan' | 'Giamir'
 * ```
 */
export type AsLiterals<T extends Readonly<string[]>> = T[number];
