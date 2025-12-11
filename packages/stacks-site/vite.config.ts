import fs from 'fs';
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

import pkg from "./package.json";

export default defineConfig({
    plugins: [
        sveltekit(),
        {
            name: 'copy-doc-images',
            buildStart() {
                fs.cpSync('src/docs', 'static/docs', { 
                    recursive: true,
                    filter: (src) => !/\.md$/i.test(src)
                });
            }
        }
    ],
    define: {
        __APP_VERSION__: JSON.stringify(pkg.version),
    },
});
