import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: interactivity", () => {
    it("should output all atomic interactivity classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/interactivity.less";
        `);

        expect(css).toMatchSnapshot();
    });
});
