import { resolve } from "node:path";
import { defineConfig } from "vite";

const externalPackages = ["@sveltejs/kit", "markdown-it", "mjml", "zod"];

export default defineConfig({
    build: {
        outDir: "dist",
        emptyOutDir: true,
        minify: false,
        lib: {
            entry: {
                index: resolve(import.meta.dirname, "src/lib/api/index.ts"),
                sveltekit: resolve(
                    import.meta.dirname,
                    "src/lib/sveltekit/index.ts"
                ),
            },
            formats: ["es"],
            fileName: (_format, entryName) => `${entryName}.js`,
        },
        rollupOptions: {
            external: (id) =>
                externalPackages.some(
                    (dependency) =>
                        id === dependency || id.startsWith(`${dependency}/`)
                ),
            output: {
                chunkFileNames: "chunks/[name]-[hash].js",
            },
        },
    },
});
