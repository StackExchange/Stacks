import { defineConfig } from "vite";
import pkg from "./package.json" with { type: "json" };

const external = Object.keys(pkg.dependencies ?? {});

export default defineConfig({
    build: {
        lib: {
            entry: "./src/index.ts",
            formats: ["es"],
        },
        minify: false,
        rollupOptions: {
            external: (id) =>
                external.some((dep) => id === dep || id.startsWith(`${dep}/`)),
            output: {
                preserveModules: true,
                preserveModulesRoot: "src",
                entryFileNames: "[name].js",
            },
        },
    },
});
