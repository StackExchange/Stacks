import { describe, expect, it } from "vitest";

import { normalizeAssetBaseUrl, resolveAssetUrls } from "./assets";
import { assetBaseUrlSchema } from "./api/request-schemas";

describe("asset base URLs", () => {
    it("normalizes valid HTTP URLs", () => {
        expect(normalizeAssetBaseUrl("https://cdn.example.com/assets/")).toBe(
            "https://cdn.example.com/assets"
        );
        expect(normalizeAssetBaseUrl("")).toBe("");
    });

    it.each([
        "javascript:alert(1)",
        "https://user:password@cdn.example.com",
        "https://cdn.example.com?asset=1",
        "https://cdn.example.com#assets",
        "not a URL",
    ])("rejects an unsafe or ambiguous URL: %s", (value) => {
        expect(assetBaseUrlSchema.safeParse(value).success).toBe(false);
    });

    it("encodes markup-breaking characters", () => {
        const result = assetBaseUrlSchema.parse(
            'https://cdn.example.com/" onerror="alert(1)'
        );

        expect(result).toBeDefined();
        if (result === undefined) {
            throw new Error("Expected a normalized asset base URL.");
        }

        expect(result).not.toContain('"');
        expect(resolveAssetUrls('<img src="/email/logo.png">', result)).toBe(
            '<img src="https://cdn.example.com/%22%20onerror=%22alert(1)/email/logo.png">'
        );
    });

    it("does not interpret replacement tokens in valid URLs", () => {
        expect(
            resolveAssetUrls(
                '<img src="/email/logo.png">',
                "https://cdn.example.com/$&"
            )
        ).toBe('<img src="https://cdn.example.com/$&/email/logo.png">');
    });
});
