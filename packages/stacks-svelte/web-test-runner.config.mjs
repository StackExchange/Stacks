import path from "path";
import { fileURLToPath } from "url";
import { vitePlugin } from "@remcovaes/web-test-runner-vite-plugin";
import { playwrightLauncher } from "@web/test-runner-playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ignoredBrowserLogs = [
    "[vite] connecting...",
    "[vite] connected.",
    "Lit is in dev mode. Not recommended for production! See https://lit.dev/msg/dev-mode for more information.",
];

const toPosixPath = (p) =>
    p.split(path.sep).join(path.posix.sep).replace(/^C:/, "");

export default {
    files: "src/**/*.test.ts",
    browsers: [playwrightLauncher({ product: "chromium" })],
    plugins: [vitePlugin()],
    filterBrowserLogs: ({ args }) =>
        !args.some((arg) => ignoredBrowserLogs.includes(arg)),
    testRunnerHtml: (testFramework) => `
        <html>
          <body>
            <script type="module">
              // add stacks to the document
              import '${toPosixPath(
                  __dirname
              )}/node_modules/@stackoverflow/stacks/dist/css/stacks.css';
              import '${toPosixPath(
                  __dirname
              )}/node_modules/@stackoverflow/stacks/dist/js/stacks.js';
    
              // Note: globals expected by @testing-library/svelte
              window.process = { env: {} };
            </script>
            <script type="module" src="${testFramework}"></script>
          </body>
        </html>
      `,
};
