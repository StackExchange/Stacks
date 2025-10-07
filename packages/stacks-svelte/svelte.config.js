import { sveltePreprocess } from "svelte-preprocess";

const config = {
    preprocess: sveltePreprocess({
        typescript: {
            tsconfigFile: "./tsconfig.json",
        },
    }),
};

export default config;
