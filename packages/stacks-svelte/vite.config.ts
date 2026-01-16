import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig, type Plugin } from "vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import svelteConfig from "./svelte.config";
import path from "path";

export default defineConfig({
    plugins: [svelte(svelteConfig), svelteTesting(), svelteInlineComponent()],
    optimizeDeps: {
        //without the following explicit includes, test runs fail on the first run because these dependencies don't get pre-optimized properly
        include: [
            "@web/test-runner-commands",
            "@floating-ui/dom",
            "svelte-floating-ui",
            "sinon",
            "@open-wc/testing",
            "@testing-library/svelte",
            "@testing-library/user-event",
            "@stackoverflow/stacks-icons/icons",
            "@stackoverflow/stacks-icons-legacy/icons",
        ],
    },
    resolve: {
        alias: {
            $root: path.resolve(__dirname, "./src"),
        },
    },
});

function svelteInlineComponent(): Plugin {
    return {
        name: "svelte-inline-component",
        enforce: "pre",
        resolveId(id) {
            if (id.startsWith("virtual:inline-svelte")) {
                return id;
            }
        },

        load(id) {
            if (id.startsWith("virtual:inline-svelte")) {
                const base64ComponentSource = id
                    .split(/virtual:inline-svelte:/)[1]
                    .slice(0, -7);
                const buf = Buffer.from(base64ComponentSource, "base64");
                return buf.toString("utf8");
            }
        },
    };
}
