import { html, unsafeStatic } from "@open-wc/testing";

type TestVariationArgs = {
    /**
     * Base class of the component
     * (e.g. "s-component")
     */
    baseClass: string;
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
     * Variants of the component
     * (e.g. ["primary", "secondary"])
     */
    variants?: string[];
    /**
     * Modifiers of the component
     * (e.g. { primary: ["filled", "outlined"], secondary: ["xs", "sm", "md"] })
     */
    modifiers?: Modifiers;
    /**
     * Options for the test
     */
    options?: Partial<TestOptions>;
};

type Modifiers = {
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

export const DEFAULT_OPTIONS = {
    testColorThemes: true,
    testHighContrast: true,
    includeNullVariant: true,
    includeNullModifier: true,
};

// TODO: refactor using MODES as opposed to THEMES
const COLOR_THEMES = ["dark", "light"];
const BASE_THEMES = ["", "highcontrast"];
type Themes = ["light" | "dark" | "highcontrast" | ""];

const attrObjToString = (attrs: Record<string, string>): string => {
    const attrString = Object.keys(attrs).map((key) => {
        return `${key}="${attrs[key]}"` || "";
    });
    return attrString.join(" ") || "";
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

const buildTestid = (arr: string[]) => arr.filter(Boolean).join("-");

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
            >${unsafe.children}</${unsafe.tag}>
        `;
};

type PrimitiveVariation = {
    classes: string;
    testid: string;
    theme: Themes;
};

type PrimitiveVariationArgs = Pick<
    TestVariationArgs,
    "baseClass" | "variants" | "modifiers" | "options"
>;

const generatePrimitiveVariations = ({
    baseClass,
    variants = [],
    modifiers,
    options = {},
}: PrimitiveVariationArgs): PrimitiveVariation[] => {
    const primitiveVariations: PrimitiveVariation[] = [];
    const opts = { ...DEFAULT_OPTIONS, ...options };
    // Test default, high contrast themes
    [...(opts.testHighContrast ? BASE_THEMES : [""])].forEach((baseTheme) => {
        // Test light, dark theme
        [...(opts.testColorThemes ? COLOR_THEMES : [""])].forEach(
            (colorTheme) => {
                const theme = [baseTheme, colorTheme].filter(Boolean) as Themes;
                const testidBase = buildTestid([baseClass, ...theme]);
                const allVariants = opts.includeNullVariant
                    ? ["", ...variants]
                    : variants;
                const primaryModifiers = modifiers?.primary
                    ? opts.includeNullModifier
                        ? ["", ...(<[]>modifiers.primary)]
                        : modifiers.primary
                    : [""];
                const secondaryModifiers = modifiers?.secondary
                    ? opts.includeNullModifier
                        ? ["", ...(<[]>modifiers.secondary)]
                        : modifiers.secondary
                    : [""];
                const globalModifiers = modifiers?.global
                    ? opts.includeNullModifier
                        ? ["", ...(<[]>modifiers.global)]
                        : modifiers.global
                    : [""];

                primaryModifiers.forEach((primaryModifier) => {
                    secondaryModifiers.forEach((secondaryModifier) => {
                        globalModifiers.forEach((globalModifier) => {
                            allVariants.forEach((variant) => {
                                primitiveVariations.push({
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
                    primitiveVariations.push({
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
    return primitiveVariations.sort((a, b) => a.testid.localeCompare(b.testid));
};

type TestVariation = {
    testid: string;
    element: ReturnType<typeof html>;
    skipped: boolean;
    theme: Themes;
};

const generateTestVariations = ({
    baseClass,
    variants = [],
    modifiers,
    options = DEFAULT_OPTIONS,
    attributes,
    children,
    excludedTestids = [],
    skippedTestids = [],
    tag,
    template,
}: TestVariationArgs): TestVariation[] => {
    return generatePrimitiveVariations({
        baseClass,
        variants,
        modifiers,
        options,
    }).flatMap(({ testid, classes, theme }) => {
        const allChildren: {
            [key: string]: string;
        } = children ? { ...children } : { default: "" };
        const { testidSuffix } = options;

        return Object.keys(allChildren)
            .map((key) => {
                let testidModified = (
                    key !== "default" ? `${testid}-${key}` : testid
                ).replace(" ", "-");
                testidModified = testidSuffix
                    ? `${testidModified}-${testidSuffix}`
                    : testidModified;

                const children = allChildren[key];

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

                const skipped = skippedTestids.some((pattern) =>
                    matchTestidByPattern({ testid: testidModified, pattern })
                );

                return {
                    element,
                    testid: testidModified,
                    theme,
                    skipped,
                };
            })
            .filter(
                ({ testid }) =>
                    !excludedTestids.some((pattern) =>
                        matchTestidByPattern({ testid, pattern })
                    )
            );
    });
};

export type { TestVariationArgs, TestVariation };
export { generateTestVariations };
