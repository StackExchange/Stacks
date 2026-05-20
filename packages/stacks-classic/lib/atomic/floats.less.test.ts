import { describe, it, expect } from "vitest";
import { renderLess } from "../test/less-test-utils";

describe("atomic: floats", () => {
    it("should output all atomic floats classes", async () => {
        const css = await renderLess(`
            @import "./lib/atomic/floats.less";
        `);

        expect(css).toMatchSnapshot();
    });
});
