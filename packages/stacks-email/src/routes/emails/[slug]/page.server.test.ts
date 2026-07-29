import { describe, expect, it } from "vitest";

import { load } from "./+page.server";

describe("email gallery data", () => {
    it("provides target-specific MJML", async () => {
        const data = await load({
            params: { slug: "transactional" },
            url: new URL(
                "https://email.stackoverflow.design/emails/transactional?target=dotnet"
            ),
        } as Parameters<typeof load>[0]);

        if (!data) {
            throw new Error("Expected gallery page data.");
        }

        expect(data.target).toBe("dotnet");
        expect(data.compiledByTarget.preview.renderedMjml).toContain("Jane");
        expect(data.compiledByTarget.dotnet.renderedMjml).toContain(
            "@Model.FirstName"
        );
        expect(data.compiledByTarget.braze.renderedMjml).toContain(
            "{{${first_name}}}"
        );
        expect(data.compiledByTarget.dotnet.highlightedMjml).not.toBe(
            data.compiledByTarget.preview.highlightedMjml
        );
    });
});
