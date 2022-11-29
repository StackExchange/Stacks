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
    browsers: [
        playwrightLauncher({ product: "chromium" }),
        playwrightLauncher({
            product: "firefox",
            launchOptions: {
                firefoxUserPrefs: {
                    "toolkit.telemetry.reportingpolicy.firstRun": false,
                    "browser.shell.checkDefaultBrowser": false,
                    "browser.bookmarks.restore_default_bookmarks": false,
                    "dom.disable_open_during_load": false,
                    "dom.max_script_run_time": 0,
                    "dom.min_background_timeout_value": 10,
                    "extensions.autoDisableScopes": 0,
                    "extensions.enabledScopes": 15,
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
            failureThreshold: 3,
            failureThresholdType: "percent",
        }),
    ],
    groups: [
        {
            name: "unit",
            files: "lib/test/**/!(*.visual).test.ts",
        },
        {
            name: "visual",
            files: "lib/test/**/*.visual.test.ts",
        },
    ],

    // settle on a font-family for visual regression tests across operating systems
    testRunnerHtml: (testFramework) =>
        `<html>
            <body>
                <style>
                    body {
                        font-family: Arial;
                    }
                </style>
                <script type="module" src="${testFramework}"></script>
            </body>
        </html>`,
};
