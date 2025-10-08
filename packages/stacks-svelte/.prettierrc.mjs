import config from "@stackoverflow/prettier-config";
import prettierPluginSvelte from "prettier-plugin-svelte";

export default {
    ...config,
    endOfLine: "auto",
    plugins: [prettierPluginSvelte],
    overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
