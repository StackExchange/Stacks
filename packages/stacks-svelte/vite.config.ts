import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig, type Plugin } from "vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import svelteConfig from "./svelte.config";
import path from "path";

export default defineConfig({
    plugins: [svelte(svelteConfig), svelteTesting(), svelteInlineComponent()],
    optimizeDeps: {
        exclude: ["svelte-sonner"],
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
