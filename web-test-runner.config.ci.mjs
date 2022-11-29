import defaultConfig from "./web-test-runner.config.mjs";
import { summaryReporter } from "@web/test-runner";
import { playwrightLauncher } from "@web/test-runner-playwright";

defaultConfig.reporters = [summaryReporter()];

// TODO: investigate further
// firefox is currently having issue with selectors (only in CI) so we disable it for now
defaultConfig.browsers = [
    playwrightLauncher({ product: "chromium" }),
    playwrightLauncher({ product: "webkit" }),
];

export default defaultConfig;
