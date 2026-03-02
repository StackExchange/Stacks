import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: object-fit", () => {
    it("should output all atomic object-fit classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/object-fit.less";
        `);

        expect(css).toMatchSnapshot();
    });
});
