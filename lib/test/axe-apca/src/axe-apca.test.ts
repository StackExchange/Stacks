import { html, fixture, expect } from "@open-wc/testing";
import axe from "axe-core";
import type { AxeResults } from "axe-core";
import registerAxeAPCA from "./axe-apca";

const runAxe = async (el: HTMLElement): Promise<AxeResults> => {
    return new Promise((resolve, reject) => {
        axe.run(el, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

describe("axe-apca", () => {
    describe("bronze conformance level", () => {
        beforeEach(() => {
            registerAxeAPCA("bronze");
        });

        it.only("should check for APCA accessibility contrast violations", async () => {
            const el: HTMLElement = await fixture(
                html`<p
                    style="background: white; color: black; font-size: 12px; font-weight: 400;"
                >
                    Some copy
                </p>`
            );

            const results = await runAxe(el);

            const apcaPasses = results.passes.filter((violation) =>
                violation.id.includes("color-contrast-apca-bronze")
            );

            await expect(apcaPasses.length).to.equal(1);

            const passNode = apcaPasses[0].nodes[0];
            expect(passNode.all[0].message).to.include(
                "Element has sufficient APCA bronze level lightness contrast"
            );
        });

        it("should detect APCA accessibility contrast violations", async () => {
            const el: HTMLElement = await fixture(
                html`<p
                    style="background: white; color: lightgray; font-size: 12px; font-weight: 400;"
                >
                    Some copy
                </p>`
            );

            const results = await runAxe(el);

            const apcaViolations = results.violations.filter((violation) =>
                violation.id.includes("color-contrast-apca-bronze")
            );

            await expect(apcaViolations.length).to.equal(1);

            const violationNode = apcaViolations[0].nodes[0];
            expect(violationNode.failureSummary).to.include(
                "Element has insufficient APCA bronze level contrast"
            );
        });

        it("should check nested nodes", async () => {
            const el: HTMLElement = await fixture(
                html`<div style="background: black;">
                    <h2>Some title</h2>
                    <p>Some copy</p>
                    <button style="background: black;">Some button</button>
                </div>`
            );

            const results = await runAxe(el);

            const apcaViolations = results.violations.filter((violation) =>
                violation.id.includes("color-contrast-apca-bronze")
            );

            await expect(apcaViolations[0].nodes.length).to.equal(3);
        });
    });

    describe("silver conformance level", () => {
        beforeEach(() => {
            registerAxeAPCA("silver");
        });

        it("should check for APCA accessibility contrast violations", async () => {
            const el: HTMLElement = await fixture(
                html`<p
                    style="background: white; color: black; font-size: 14px; font-weight: 400;"
                >
                    Some copy
                </p>`
            );

            const results = await runAxe(el);

            const apcaPasses = results.passes.filter((violation) =>
                violation.id.includes("color-contrast-apca-silver")
            );

            await expect(apcaPasses.length).to.equal(1);

            const passNode = apcaPasses[0].nodes[0];
            expect(passNode.all[0].message).to.include(
                "Element has sufficient APCA silver level lightness contrast"
            );
        });

        it("should detect APCA accessibility contrast violations", async () => {
            const el: HTMLElement = await fixture(
                html`<p
                    style="background: white; color: black; font-size: 12px; font-weight: 400;"
                >
                    Some copy
                </p>`
            );

            const results = await runAxe(el);

            const apcaViolations = results.violations.filter((violation) =>
                violation.id.includes("color-contrast-apca-silver")
            );

            await expect(apcaViolations.length).to.equal(1);

            const violationNode = apcaViolations[0].nodes[0];
            expect(violationNode.failureSummary).to.include(
                "Element has insufficient APCA silver level contrast"
            );
        });

        it("should check nested nodes", async () => {
            const el: HTMLElement = await fixture(
                html`<div style="background: black;">
                    <h2>Some title</h2>
                    <p>Some copy</p>
                    <button style="background: black;">Some button</button>
                </div>`
            );

            const results = await runAxe(el);

            const apcaViolations = results.violations.filter((violation) =>
                violation.id.includes("color-contrast-apca-silver")
            );

            await expect(apcaViolations[0].nodes.length).to.equal(3);
        });
    });
});
