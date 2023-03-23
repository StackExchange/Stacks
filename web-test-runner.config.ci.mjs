// TODO: this needs some cleanup - as of now it's a bit of a copy paste from the summary and default reporter
// custom reporter to better differentiate between skipped from failing tests and log tests failures stack trace correctly
import { reportTestsErrors } from "./node_modules/@web/test-runner/dist/reporter/reportTestsErrors.js";
import { reportTestFileErrors } from "./node_modules/@web/test-runner/dist/reporter/reportTestFileErrors.js";
import { reportBrowserLogs } from "./node_modules/@web/test-runner/dist/reporter/reportBrowserLogs.js";
import { TestRunnerLogger } from "./node_modules/@web/test-runner/dist/logger/TestRunnerLogger.js";

const color =
    ([x, y]) =>
    (z) =>
        `\x1b[${x}m${z}\x1b[${y}m${reset}`;
const reset = `\x1b[0m\x1b[0m`;
const green = color([32, 89]);
const red = color([31, 89]);
const yellow = color([33, 89]);
const dim = color([2, 0]);

function customReporter(opts) {
    const { flatten = false } = opts ?? {};
    let args;
    let favoriteBrowser;

    const logger = new TestRunnerLogger();

    function log(logger, name, passed, skipped, prefix = "  ", postfix = "") {
        let sign;
        if (skipped) {
            sign = yellow("o");
        } else {
            sign = passed ? green("✓") : red("𐄂");
        }
        if (flatten) logger.log(`${sign} ${prefix} ${name}${postfix}`);
        else logger.log(`${prefix}  ${sign} ${name}`);
    }

    function logResults(logger, results, prefix, browser) {
        const browserName = browser?.name ? ` ${dim(`[${browser.name}]`)}` : "";
        for (const result of results?.tests ?? []) {
            log(
                logger,
                result.name,
                result.passed,
                result.skipped,
                prefix,
                browserName
            );
        }

        for (const suite of results?.suites ?? []) {
            logSuite(logger, suite, prefix, browser);
        }
    }

    function logSuite(logger, suite, parent, browser) {
        const browserName = browser?.name ? ` ${dim(`[${browser.name}]`)}` : "";
        let pref = parent ? `${parent} ` : "";
        if (flatten) pref += `${suite.name}`;
        else logger.log(`${pref}${suite.name}${browserName}`);

        logResults(logger, suite, pref, browser);
    }

    return {
        start(_args) {
            args = _args;
            favoriteBrowser =
                args.browserNames.find((name) => {
                    const n = name.toLowerCase();
                    return (
                        n.includes("chrome") ||
                        n.includes("chromium") ||
                        n.includes("firefox")
                    );
                }) ?? args.browserNames[0];
        },

        reportTestFileResults({ sessionsForTestFile }) {
            for (const session of sessionsForTestFile) {
                logResults(logger, session.testResults, "", session.browser);
                logger.log("");
            }
            reportBrowserLogs(logger, sessionsForTestFile);
        },

        onTestRunFinished({ sessions }) {
            const failedSessions = sessions.filter(
                (s) => !s.skipped && !s.passed
            );
            if (failedSessions.length > 0) {
                logger.log("\n\nErrors Reported in Tests:\n\n");
                reportTestsErrors(
                    logger,
                    args.browserNames,
                    favoriteBrowser,
                    failedSessions
                );
                reportTestFileErrors(
                    logger,
                    args.browserNames,
                    favoriteBrowser,
                    failedSessions,
                    true
                );
            }
        },
    };
}

import defaultConfig from "./web-test-runner.config.mjs";

defaultConfig.reporters = [customReporter()];

export default defaultConfig;
