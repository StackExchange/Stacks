import { fromRollup } from "@web/dev-server-rollup";
import { esbuildPlugin } from "@web/dev-server-esbuild";
import _postcss from "rollup-plugin-postcss";
import _replace from "@rollup/plugin-replace";
import _commonjs from "@rollup/plugin-commonjs";
import { playwrightLauncher } from "@web/test-runner-playwright";
import { visualRegressionPlugin } from "@web/test-runner-visual-regression/plugin";

import {
    fromRollupWithFix,
    fixExportNamedExports,
} from "./web-dev-server-patches.mjs";

const postcss = fromRollup(_postcss);
const replace = fromRollup(_replace);
const commonjs = fromRollupWithFix(_commonjs);

export default {
    testFramework: {
        config: {
            timeout: '5000',
        },
    },
    browsers: [
        playwrightLauncher({ product: "chromium" }),
        playwrightLauncher({
            product: "firefox",
            launchOptions: {
                firefoxUserPrefs: {
                    // force pointer capabilities activation on Firefox Headless on GTK (Gnome Toolkit - CI)
                    // see https://github.com/microsoft/playwright/issues/7769#issuecomment-966098074
                    "ui.primaryPointerCapabilities": 0x02 | 0x04,
                    "ui.allPointerCapabilities": 0x02 | 0x04,
                },
            },
        }),
        playwrightLauncher({ product: "webkit" }),
    ],
    nodeResolve: { browser: true },
    mimeTypes: {
        "**/*.less": "js",
    },
    plugins: [
        postcss(),
        replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
            "preventAssignment": true,
        }),
        commonjs(),
        fixExportNamedExports(),
        esbuildPlugin({ ts: true }),
        visualRegressionPlugin({
            update: process.argv.includes("--update-visual-baseline"),
            failureThreshold: 5,
            failureThresholdType: "percent",
        }),
    ],
    groups: [
        {
            name: "a11y",
            files: "lib/test/**/*.a11y.test.ts",
            browsers: [
                playwrightLauncher({ product: "chromium" }),
            ]
        },
        {
            name: "unit",
            files: "lib/test/**/!(*.visual|*.a11y).test.ts",
        },
        {
            name: "visual",
            files: "lib/test/**/*.visual.test.ts",
        },
    ],

    // settle on a font-family for visual regression tests across operating systems
    // animation disable CSS taken from https://github.com/microsoft/playwright/issues/7548#issuecomment-881897256
    testRunnerHtml: (testFramework) =>
        `<html>
            <body>
                <style>
                    body {
                        --ff-sans: Arial;
                        --ff-mono: "Courier New";
                    }
                    *,
                    *::before,
                    *::after {
                        -moz-animation: none !important;
                        -moz-transition: none !important;
                        animation: none !important;
                        caret-color: transparent !important;
                        transition: none !important;
                    }
                </style>
                <script type="module" src="${testFramework}"></script>
            </body>
        </html>`,
};
