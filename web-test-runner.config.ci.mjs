import defaultConfig from "./web-test-runner.config.mjs";
import { summaryReporter } from "@web/test-runner";

defaultConfig.reporters = [summaryReporter()];

export default defaultConfig;
