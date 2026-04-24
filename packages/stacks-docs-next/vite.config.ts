import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

import pkgMain from "../stacks-classic/package.json";
import pkgSvelte from "../stacks-svelte/package.json";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        sveltekit(),
        {
            name: "copy-doc-images",
            buildStart() {
                fs.cpSync("src/docs", "static/docs", {
                    recursive: true,
                    filter: (src) => !/\.md$/i.test(src),
                });
            },
        },
    ],
    resolve: {
        alias: [
            {
                // Exact match only — subpath imports like /dist/css/stacks.css are unaffected
                find: /^@stackoverflow\/stacks$/,
                replacement: resolve(__dirname, "../stacks-classic/lib/esm-no-css.ts"),
            },
        ],
    },
    define: {
        __APP_VERSION__: JSON.stringify(pkgMain.version),
        __SVELTE_VERSION__: JSON.stringify(pkgSvelte.version),
    },
});
