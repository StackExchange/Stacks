import { reportTestsErrors } from "./node_modules/@web/test-runner/dist/reporter/reportTestsErrors.js";
import { reportTestFileErrors } from "./node_modules/@web/test-runner/dist/reporter/reportTestFileErrors.js";
import { reportBrowserLogs } from "./node_modules/@web/test-runner/dist/reporter/reportBrowserLogs.js";
import { TestRunnerLogger } from "./node_modules/@web/test-runner/dist/logger/TestRunnerLogger.js";
import { yellow, green, red, dim } from "nanocolors";

import defaultConfig from "./web-test-runner.config.mjs";

// Custom reporter for CI highlighting exclusively skipped and failing tests
// It prints out stack traces for failures
function ciReporter() {
    let browserNames;

    const logger = new TestRunnerLogger();

    function log(logger, name, passed, skipped) {
        const sign = skipped ? yellow("○") : passed ? green("✓") : red("𐄂");
        logger.log(`    ${sign} ${name}`);
    }

    function logResults(logger, results, prefix, browser) {
        const browserName = browser?.name ? ` ${dim(`[${browser.name}]`)}` : "";
        for (const result of results?.tests.filter((r) => !r.passed) ?? []) {
            log(logger, result.name, result.passed, result.skipped);
        }

        for (const suite of results?.suites ?? []) {
            const suitePassed = suite.tests.every((t) => t.passed);
            if (!suitePassed) {
                logSuite(logger, suite, prefix, browser);
                logger.log("");
            }
        }
    }

    function logSuite(logger, suite, parent, browser) {
        const browserName = browser?.name ? ` ${dim(`[${browser.name}]`)}` : "";
        const pref = parent ? `${parent} ` : "";
        logger.log(`${pref}${suite.name}${browserName}`);
        logResults(logger, suite, pref, browser);
    }

    function sumStats(a, b) {
        return {
            passed: a.passed + b.passed,
            failed: a.failed + b.failed,
            skipped: a.skipped + b.skipped,
        };
    }

    function resultsSummary(results) {
        return results.suites.reduce(
            (a, s) => {
                const sSummary = resultsSummary(s);
                return sumStats(a, sSummary);
            },
            results.tests.reduce(
                (a, t) => {
                    if (t.skipped) {
                        a.skipped += 1;
                    } else if (t.passed) {
                        a.passed += 1;
                    } else {
                        a.failed += 1;
                    }
                    return a;
                },
                { passed: 0, failed: 0, skipped: 0 }
            )
        );
    }

    return {
        start(args) {
            browserNames = args.browserNames;
        },

        reportTestFileResults({ sessionsForTestFile }) {
            for (const session of sessionsForTestFile) {
                logResults(logger, session.testResults, "", session.browser);
            }
            reportBrowserLogs(logger, sessionsForTestFile);
        },

        onTestRunFinished({ sessions }) {
            const summary = sessions.reduce(
                (a, s) => sumStats(a, resultsSummary(s.testResults)),
                { passed: 0, failed: 0, skipped: 0 }
            );

            logger.log(green(`✓ Passed: ${summary.passed}`));
            if (summary.skipped > 0) {
                logger.log(yellow(`○ Skipped: ${summary.skipped}`));
            }
            if (summary.failed > 0) {
                logger.log(red(`x Failed: ${summary.failed}`));
            }

            const failedSessions = sessions.filter(
                (s) => !s.skipped && !s.passed
            );
            if (failedSessions.length > 0) {
                logger.log("\n\nErrors Reported in Tests:\n\n");
                reportTestsErrors(
                    logger,
                    browserNames,
                    "Chromium",
                    failedSessions
                );
                reportTestFileErrors(
                    logger,
                    browserNames,
                    "Chromium",
                    failedSessions,
                    true
                );
            }
        },
    };
}

defaultConfig.reporters = [ciReporter()];

export default defaultConfig;
