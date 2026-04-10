import fs from "fs";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

import pkgMain from "../stacks-classic/package.json";
import pkgSvelte from "../stacks-svelte/package.json";

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
        {
            name: "copy-legacy-js",
            buildStart() {
                const src = "../stacks-docs/assets/dist/docs.js";
                if (fs.existsSync(src)) {
                    fs.copyFileSync(src, "static/legacy-docs.js");
                }
            },
        },
    ],
    define: {
        __APP_VERSION__: JSON.stringify(pkgMain.version),
        __SVELTE_VERSION__: JSON.stringify(pkgSvelte.version),
    },
});
