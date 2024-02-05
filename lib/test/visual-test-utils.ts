import { html, fixture } from "@open-wc/testing";
import { visualDiff } from "@web/test-runner-visual-regression";
import {
    sessionFinished,
    sessionFailed,
    sessionStarted,
    getConfig,
} from "@web/test-runner-core/browser/session.js";
import { screen } from "@testing-library/dom";
import { generateTestVariations, type TestVariationArgs } from "./test-utils";

type VisualTestArgs = TestVariationArgs;

type TestResult = {
    status: "fulfilled" | "rejected";
    value?: { testid: string };
    reason?: { testid: string; error: Error };
};

const changeMode = (mode: string) => {
    document.body.className = "";
    if (mode?.length) {
        const modeClasses: string[] = mode.split("-").map((t) => `theme-${t}`);
        document.body.classList.add(...modeClasses);
    }
};

class TestWorker {
    private queue: (() => Promise<TestResult[]>)[];
    constructor() {
        this.queue = [];
    }

    schedule(job: () => Promise<TestResult[]>) {
        this.queue.push(job);
        if (this.queue.length === 1) {
            void this.run();
        }
    }

    async run() {
        await sessionStarted();
        const results: TestResult[] = [];
        while (this.queue.length) {
            const job = this.queue[0];
            results.push(...(await job()));
            this.queue.shift();
        }
        const errors = results
            .filter((r) => r.status === "rejected")
            .map((r) => r.reason);

        await sessionFinished({
            passed: !errors.length,
            errors: errors.map((e) => ({
                message: e?.testid + "\n" + e?.error?.message,
                name: e?.error?.name,
                stack: e?.error?.stack,
            })),
            testResults: {
                name: (await getConfig()).testFile,
                suites: [],
                tests: results.map((r) => ({
                    name: r.value?.testid || r.reason?.testid || "",
                    passed: r.status === "fulfilled",
                    skipped: false,
                })),
            },
        });
    }
}

// This worker is necessary because we support running multiple calls to
// runVisualTests per file, and we need to wait for all of them to finish
const worker = new TestWorker();

const runVisualTest = async ({
    element,
    testid,
}: {
    element: ReturnType<typeof html>;
    testid: string;
}) => {
    let retryAttempts = 1;

    do {
        await fixture(element);
        const el = screen.getByTestId(testid);

        try {
            await visualDiff(el, testid);
            return {
                testid,
            };
        } catch (error) {
            const e = error as Error;
            // if the error is not a visual diff failure, retry
            // this is to prevent flaky tests due to snapshot capturing
            if (
                retryAttempts > 0 &&
                !e.message.includes("Visual diff failed.")
            ) {
                retryAttempts--;
                continue;
            }
            await Promise.reject({
                testid,
                error: e,
            });
        } finally {
            el.remove();
        }
    } while (retryAttempts > 0);
};

const runVisualTests = (args: VisualTestArgs) => {
    const testVariations = generateTestVariations(args);

    worker.schedule(async () => {
        const results: TestResult[] = [];
        for (const variation of testVariations) {
            changeMode(variation.theme?.join("-") || "");
            try {
                try {
                    results.push({
                        status: "fulfilled",
                        value: await runVisualTest({
                            element: variation.element,
                            testid: variation.testid,
                        }),
                    });
                } catch (e) {
                    results.push({
                        status: "rejected",
                        reason: e as { testid: string; error: Error },
                    });
                }
            } catch (e) {
                // eslint-disable-next-line no-console
                console.error(e);
                await sessionFailed(e as Error);
            }
        }
        return results;
    });
};

export { runVisualTests };
