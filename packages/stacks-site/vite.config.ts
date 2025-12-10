import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

import pkg from "./package.json";

export default defineConfig({
    plugins: [sveltekit()],
    define: {
        __APP_VERSION__: JSON.stringify(pkg.version),
    },
    server: {
        fs: {
            allow: [".."],
        },
    },
});
