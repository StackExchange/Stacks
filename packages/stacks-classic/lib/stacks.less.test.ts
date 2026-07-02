import { describe, it, expect } from "vitest";
import { renderLess } from "./test/less-test-utils";

describe("stacks complete bundle", () => {
    it("should output all stacks styles", async () => {
        const css = await renderLess(`
            @import "./lib/stacks.less";
        `);

        expect(css).toMatchSnapshot();
    });
});
