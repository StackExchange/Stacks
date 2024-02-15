import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: misc", () => {
    it("should output all atomic css classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/misc.less";
        `);

        expect(css).toMatchSnapshot();
    });
});
