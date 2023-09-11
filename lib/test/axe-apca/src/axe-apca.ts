import { calcAPCA } from "apca-w3";
import axe from "axe-core";
import type { Check, Rule } from "axe-core";

// Augment Axe types to include the color utilities we use in this file
// https://github.com/dequelabs/axe-core/blob/develop/lib/commons/color/color.js
type Color = {
    red: number;
    green: number;
    blue: number;
    alpha: number;
    toHexString: () => string;
};

type ConformanceLevel = "bronze" | "silver" | "custom";

type ConformanceThresholdFn = (
    fontSize: string,
    fontWeight: string
) => number | null;

declare module "axe-core" {
    const commons: {
        color: {
            getForegroundColor: (
                node: HTMLElement,
                _: unknown,
                bgColor: Color | null
            ) => Color | null;
            getBackgroundColor: (node: HTMLElement) => Color | null;
        };
    };
}

const getAPCASilverPlusThreshold = (
    fontSize: string,
    fontWeight: string
): number | null => {
    const silverPlusAPCALookupTable = [
        // See https://readtech.org/ARC/tests/visual-readability-contrast/?tn=criterion (May 22, 2022)
        // font size in px | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 weights
        [10, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [12, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [14, -1, -1, -1, 100, 100, 90, 75, -1, -1],
        [15, -1, -1, -1, 100, 100, 90, 70, -1, -1],
        [16, -1, -1, -1, 90, 75, 70, 60, 60, -1],
        [18, -1, -1, 100, 75, 70, 60, 55, 55, 55],
        [21, -1, -1, 90, 70, 60, 55, 50, 50, 50],
        [24, -1, -1, 75, 60, 55, 50, 45, 45, 45],
        [28, -1, 100, 70, 55, 50, 45, 43, 43, 43],
        [32, -1, 90, 65, 50, 45, 43, 40, 40, 40],
        [36, -1, 75, 60, 45, 43, 40, 38, 38, 38],
        [48, 90, 60, 55, 43, 40, 38, 35, 35, 35],
        [60, 75, 55, 50, 40, 38, 35, 33, 33, 33],
        [72, 60, 50, 45, 38, 35, 33, 30, 30, 30],
        [96, 50, 45, 40, 35, 33, 30, 25, 25, 25],
    ];

    const size = parseFloat(fontSize);
    const weight = parseFloat(fontWeight);

    // Go over the table backwards to find the first matching font size and then the weight.
    // The value null is returned when the combination of font size and weight does not have
    // any elegible APCA luminosity silver compliant thresholds (represented by -1 in the table).
    silverPlusAPCALookupTable.reverse();
    for (const [rowSize, ...rowWeights] of silverPlusAPCALookupTable) {
        if (size >= rowSize) {
            for (const [idx, keywordWeight] of [
                900, 800, 700, 600, 500, 400, 300, 200, 100,
            ].entries()) {
                if (weight >= keywordWeight) {
                    const threshold = rowWeights[rowWeights.length - 1 - idx];
                    return threshold === -1 ? null : threshold;
                }
            }
        }
    }

    return null;
};

const getAPCABronzeThreshold = (fontSize: string): number | null => {
    const size = parseFloat(fontSize);

    // APCA Bronze Level Conformance
    // https://readtech.org/ARC/tests/visual-readability-contrast/?tn=criterion
    switch (true) {
        case size >= 32:
            return 45;
        case size >= 16:
            return 60;
        default:
            return 75;
    }
};

const generateColorContrastAPCAConformanceCheck = (
    conformanceLevel: string,
    conformanceThresholdFn: ConformanceThresholdFn
): Check => ({
    id: `color-contrast-apca-${conformanceLevel}-conformance`,
    metadata: {
        impact: "serious",
        messages: {
            pass:
                "Element has sufficient APCA " +
                conformanceLevel +
                " level lightness contrast (Lc) of ${data.apcaContrast}Lc (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected minimum APCA contrast of ${data.apcaThreshold}}",
            fail: {
                default:
                    "Element has insufficient APCA " +
                    conformanceLevel +
                    " level contrast of ${data.apcaContrast}Lc (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected minimum APCA lightness contrast of ${data.apcaThreshold}Lc",
                increaseFont:
                    "Element has insufficient APCA " +
                    conformanceLevel +
                    " level contrast of ${data.apcaContrast}Lc (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Increase font size and/or font weight to meet APCA conformance minimums",
            },
            incomplete: "Unable to determine APCA lightness contrast (Lc)",
        },
    },
    evaluate: function (node: HTMLElement) {
        const nodeStyle = window.getComputedStyle(node);
        const fontSize = nodeStyle.getPropertyValue("font-size");
        const fontWeight = nodeStyle.getPropertyValue("font-weight");

        const bgColor: Color | null =
            axe.commons.color.getBackgroundColor(node);
        const fgColor: Color | null = axe.commons.color.getForegroundColor(
            node,
            false,
            bgColor
        );

        // missing data to determine APCA contrast for this node
        if (!bgColor || !fgColor || !fontSize || !fontWeight) {
            return undefined;
        }

        const toRGBA = (color: Color) => {
            return `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
        };

        const apcaContrast = Math.abs(
            calcAPCA(toRGBA(fgColor), toRGBA(bgColor))
        );
        const apcaThreshold = conformanceThresholdFn(fontSize, fontWeight);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        this.data({
            fgColor: fgColor.toHexString(),
            bgColor: bgColor.toHexString(),
            fontSize: `${((parseFloat(fontSize) * 72) / 96).toFixed(
                1
            )}pt (${fontSize}px)`,
            fontWeight: fontWeight,
            apcaContrast: Math.round(apcaContrast * 100) / 100,
            apcaThreshold: apcaThreshold,
            messageKey: apcaThreshold === null ? "increaseFont" : "default",
        });

        return apcaThreshold ? apcaContrast >= apcaThreshold : false;
    },
});

const generateColorContrastAPCARule = (conformanceLevel: string): Rule => ({
    id: `color-contrast-apca-${conformanceLevel}`,
    impact: "serious",
    matches: "color-contrast-matches",
    metadata: {
        description: `Ensures the contrast between foreground and background colors meets APCA ${conformanceLevel} level conformance minimums thresholds`,
        tags: ["apca", "wcag3", `apca-${conformanceLevel}`],
        help: "Elements must meet APCA conformance minimums thresholds",
        helpUrl:
            "https://readtech.org/ARC/tests/visual-readability-contrast/?tn=criterion",
    },
    all: [`color-contrast-apca-${conformanceLevel}-conformance`],
    tags: ["apca", "wcag3", `apca-${conformanceLevel}`],
});

const colorContrastAPCASilverConformanceCheck =
    generateColorContrastAPCAConformanceCheck(
        "silver",
        getAPCASilverPlusThreshold
    );

const colorContrastAPCABronzeConformanceCheck =
    generateColorContrastAPCAConformanceCheck("bronze", getAPCABronzeThreshold);

const colorContrastAPCASilverRule = generateColorContrastAPCARule("silver");
const colorContrastAPCABronzeRule = generateColorContrastAPCARule("bronze");

const registerAxeAPCA = (conformanceLevel: ConformanceLevel, customAPCAThreshold?: ConformanceThresholdFn) => {
    axe.configure({
        rules: [generateColorContrastAPCARule(conformanceLevel)],
        checks: [
            generateColorContrastAPCAConformanceCheck(
                conformanceLevel,
                customAPCAThreshold || (conformanceLevel === "silver"
                    ? getAPCASilverPlusThreshold
                    : getAPCABronzeThreshold)
            ),
        ],
    });
};

export {
    colorContrastAPCASilverRule,
    colorContrastAPCASilverConformanceCheck,
    colorContrastAPCABronzeRule,
    colorContrastAPCABronzeConformanceCheck,
};

export default registerAxeAPCA;
