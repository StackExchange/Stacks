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
    files: "lib/test/**/!(*.visual).test.ts",
    browsers: [
        playwrightLauncher({ product: "chromium" }),
        playwrightLauncher({ product: "firefox" }),
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
        }),
    ],
};
