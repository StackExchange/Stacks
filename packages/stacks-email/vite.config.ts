import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import svelteOptions from "./svelte-options.js";

export default defineConfig({
    plugins: [sveltekit(svelteOptions)],
});
