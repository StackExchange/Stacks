import { html, fixture, expect, unsafeStatic } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import { visualDiff } from "@web/test-runner-visual-regression";

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
                    const primaryClasses = makeClass(primaryModifier);

                    secondaryModifiers.forEach((secondaryModifier) => {
                        const secondaryClasses = makeClass(secondaryModifier);

                        globalModifiers.forEach((globalModifier) => {
                            ["", ...variants].forEach((variant) => {
                                const variantClasses = makeClass(variant);
                                const classesVariant = `${baseClass} ${variantClasses}${primaryClasses}${secondaryClasses} ${globalModifier}`;
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
                        });
                    });
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
                        classes: makeClass(standaloneClasses),
                        theme,
                    });
                });
            }
        );
    });

    // Sorting for readability
    return testVariations.sort((a, b) => a.testid.localeCompare(b.testid));
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

export const makeTest = ({
    description,
    element,
    testid,
    theme = [],
    type,
}: {
    description?: string;
    element: any; // TODO type properly
    testid: string;
    theme?: string[];
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

    it(`${type}: ${testid} ${
        description || getDescription(type)
    }`, async () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        await fixture(element);
        const el = screen.getByTestId(testid);

        document.body.className = "";

        if (theme.length) {
            document.body.classList.add(...theme);
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
