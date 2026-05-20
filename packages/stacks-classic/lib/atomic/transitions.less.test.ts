import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: transitions", () => {
    it("should output all atomic transitions classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/transitions.less";
        `);

        expect(css).toMatchSnapshot();
    });
});
