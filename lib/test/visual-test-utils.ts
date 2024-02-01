import { html, fixture } from "@open-wc/testing";
import { visualDiff } from "@web/test-runner-visual-regression";
import {
    sessionFinished,
    sessionFailed,
    sessionStarted,
    getConfig,
} from "@web/test-runner-core/browser/session.js";
import { screen } from "@testing-library/dom";
import {
    generateTestVariations,
    type TestVariationArgs,
    type TestVariation,
} from "./test-utils";
import Semaphore from "./semaphore";

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

const runVisualTest = async (
    {
        element,
        testid,
    }: {
        element: ReturnType<typeof html>;
        testid: string;
    },
    semaphore: Semaphore
) => {
    await semaphore.acquire();
    await fixture(element);
    const el = screen.getByTestId(testid);

    try {
        await visualDiff(el, testid);
        return {
            testid,
        };
    } catch (e) {
        await Promise.reject({
            testid,
            error: e,
        });
    } finally {
        el.remove();
        semaphore.release();
    }
};

const runVisualTests = (args: VisualTestArgs) => {
    const testVariations = generateTestVariations(args);

    const testVariationsByMode = testVariations.reduce(
        (acc, test) => {
            // TODO: refactor to test.mode
            const mode = test.theme?.join("-") || "";
            acc[mode] = acc[mode] || [];
            acc[mode].push(test);
            return acc;
        },
        {} as Record<string, TestVariation[]>
    );

    worker.schedule(async () => {
        const results: TestResult[] = [];
        for (const mode of Object.keys(testVariationsByMode)) {
            const semaphore = new Semaphore(1);
            changeMode(mode);
            try {
                results.push(
                    ...(await Promise.allSettled(
                        testVariationsByMode[mode].map((t) =>
                            runVisualTest(t, semaphore)
                        )
                    ))
                );
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
