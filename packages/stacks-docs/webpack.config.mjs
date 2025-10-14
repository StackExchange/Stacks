import path from "path";
import fs from "fs";
import {
    tsRule,
    lessRule,
    miniCssPlugin,
    commonResolve,
} from "../stacks-classic/webpack.config.mjs";

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (_, argv) => {
    const isProd = argv.mode === "production";

    // load each entry.*.js file in assets/js as its own bundle
    const entries = fs
        .readdirSync(path.resolve(__dirname, "assets/js/"))
        .filter((f) => f.startsWith("entry."))
        .reduce((p, n) => {
            // { "entry.file": "path/to/entry.file.js" }
            p[n.slice(0, -3)] = path.resolve(__dirname, "assets/js/", n);
            return p;
        }, {});

    return {
        mode: isProd ? "production" : "development",
        devtool: isProd ? false : "inline-source-map",
        entry: {
            docs: path.resolve(__dirname, "assets/js/index.ts"),
            ...entries,
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "assets/dist"),
            clean: true,
        },
        module: {
            rules: [
                tsRule(), // no special config file here
                lessRule(isProd),
            ],
        },
        plugins: [miniCssPlugin()],
        resolve: commonResolve,
        devServer: {
            webSocketURL: {
                // 11ty/browsersync steal the default port (8080), so set it to something else
                port: 8081,
            },
        },
    };
};
