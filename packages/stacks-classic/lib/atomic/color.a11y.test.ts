import { runA11yTests } from "../test/a11y-test-utils";
import "../index";

const colorSets = [
    "orange",
    "blue",
    "green",
    "red",
    "yellow",
    "purple",
    "pink",
];

const combos = [
    { bg: "black-600", fc: "300" },
    { bg: "400", fc: "white" },
    { bg: "300", fc: "600" },
    { bg: "300", fc: "black-600" },
    { bg: "200", fc: "600" },
    { bg: "black-150", fc: "400" },
    { bg: "white", fc: "400" },
    { bg: "white", fc: "300" },
];

const resolveColor = (set: string, color: string): string => {
    if (color === "black-600" || color === "white" || color === "black-150") {
        return color;
    }
    return `${set}-${color}`;
};

describe("color", () => {
    colorSets.forEach((set) => {
        describe(set, () => {
            combos.forEach((combo) => {
                const bgColor = resolveColor(set, combo.bg);
                const fcColor = resolveColor(set, combo.fc);

                runA11yTests({
                    baseClass: `bg-${bgColor}`,
                    attributes: {
                        class: `fc-${fcColor}`,
                    },
                    children: {
                        default: `${combo.fc}/${combo.bg}`,
                    },
                    options: {
                        testidSuffix: `fc-${fcColor}`,
                    },
                });
            });
        });
    });
});
