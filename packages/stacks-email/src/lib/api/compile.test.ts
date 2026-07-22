import { describe, expect, it } from "vitest";

import { compileEmailRenderable } from "./compile";
import { compileEmailComponent } from "./components";
import { compileEmailTemplate } from "./templates";
import { getEmailCatalog } from "./catalog";
import { targetNames } from "../tokens";

describe("email compilation", () => {
    it("applies component props", () => {
        const result = compileEmailComponent({
            slug: "button",
            target: "preview",
            props: {
                text: "Delete account",
                href: "https://example.com/delete",
            },
        });

        expect(result.componentHtml).toContain("Delete account");
        expect(result.componentHtml).toContain("https://example.com/delete");
    });

    it("forwards component props through the renderable API", () => {
        const result = compileEmailRenderable({
            kind: "component",
            slug: "button",
            target: "preview",
            props: { text: "Custom label" },
        });

        expect(result.componentHtml).toContain("Custom label");
        expect(result.componentHtml).not.toContain("Learn more");
    });

    it("compiles target-specific MJML", () => {
        const preview = compileEmailTemplate({
            slug: "transactional",
            target: "preview",
        });
        const dotnet = compileEmailTemplate({
            slug: "transactional",
            target: "dotnet",
        });
        const braze = compileEmailTemplate({
            slug: "transactional",
            target: "braze",
        });

        expect(preview.renderedMjml).toContain("Jane");
        expect(dotnet.renderedMjml).toContain("@Model.FirstName");
        expect(braze.renderedMjml).toContain("{{${first_name}}}");
        expect(dotnet.renderedMjml).not.toBe(preview.renderedMjml);
        expect(braze.renderedMjml).not.toBe(preview.renderedMjml);
    });

    it("uses a normalized custom asset host", () => {
        const result = compileEmailTemplate({
            slug: "transactional-long",
            target: "preview",
            assetBaseUrl: "https://cdn.example.com/assets/",
        });

        expect(result.html).toContain(
            "https://cdn.example.com/assets/email/spots/SpotLock.png"
        );
        expect(result.html).not.toContain('src="/email/');
    });

    it("compiles the entire catalog for every target without MJML errors", () => {
        const catalog = getEmailCatalog();

        for (const target of targetNames) {
            for (const component of catalog.components) {
                const result = compileEmailComponent({
                    slug: component.slug,
                    target,
                });

                expect(result.componentHtml, component.slug).not.toBe("");
                expect(result.errors, `${component.slug}:${target}`).toEqual(
                    []
                );
            }

            for (const template of catalog.templates) {
                const result = compileEmailTemplate({
                    slug: template.slug,
                    target,
                });

                expect(result.html, template.slug).not.toBe("");
                expect(result.errors, `${template.slug}:${target}`).toEqual([]);
            }
        }
    });
});
