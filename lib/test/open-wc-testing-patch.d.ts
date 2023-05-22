// patch for @open-wc/testing types
// TODO: remove when this PR gets merged:
// https://github.com/open-wc/open-wc/pull/2652

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../node_modules/@open-wc/testing/register-chai-plugins.d.ts" />

export { html } from "@open-wc/testing-helpers";
export { unsafeStatic } from "@open-wc/testing-helpers";
export { triggerBlurFor } from "@open-wc/testing-helpers";
export { triggerFocusFor } from "@open-wc/testing-helpers";
export { oneEvent } from "@open-wc/testing-helpers";
export { isIE } from "@open-wc/testing-helpers";
export { defineCE } from "@open-wc/testing-helpers";
export { aTimeout } from "@open-wc/testing-helpers";
export { nextFrame } from "@open-wc/testing-helpers";
export { litFixture } from "@open-wc/testing-helpers";
export { litFixtureSync } from "@open-wc/testing-helpers";
export { fixture } from "@open-wc/testing-helpers";
export { fixtureSync } from "@open-wc/testing-helpers";
export { fixtureCleanup } from "@open-wc/testing-helpers";
export { elementUpdated } from "@open-wc/testing-helpers";
export { waitUntil } from "@open-wc/testing-helpers";

export * as chai from "chai";
export { expect, assert, should } from "chai";
