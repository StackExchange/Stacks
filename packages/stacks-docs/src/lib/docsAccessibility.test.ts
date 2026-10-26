import { readFile } from "node:fs/promises";
import { parse, preprocess } from "svelte/compiler";
import { describe, expect, it } from "vitest";
import config from "../../svelte.config.js";

type Element = {
    type: string;
    name: string;
    attributes: {
        name?: string;
        value?: true | { type: string; data?: string }[];
    }[];
};

/** Inspect the markup produced by the docs' real Markdown preprocessors. */
async function elementsIn(path: string): Promise<Element[]> {
    const filename = new URL(`../docs/public/${path}`, import.meta.url);
    const source = await readFile(filename, "utf8");
    const processed = await preprocess(source, config.preprocess, {
        filename: filename.pathname,
    });
    const ast = parse(processed.code);
    const elements: Element[] = [];

    function visit(value: unknown): void {
        if (!value || typeof value !== "object") return;
        if (
            "type" in value &&
            value.type === "Element" &&
            "attributes" in value
        ) {
            elements.push(value as Element);
        }
        for (const child of Object.values(value)) {
            if (Array.isArray(child)) child.forEach(visit);
            else if (child && typeof child === "object") visit(child);
        }
    }

    visit(ast.html);
    return elements;
}

function attribute(element: Element, name: string): string | undefined {
    const value = element.attributes.find((item) => item.name === name)?.value;
    return Array.isArray(value)
        ? value.map((part) => part.data ?? "").join("")
        : undefined;
}

describe("documentation accessibility markup", () => {
    it.each([
        "brand/logo/index.md",
        "brand/color/index.md",
        "brand/typography/index.md",
        "brand/stack-system/index.md",
    ])("gives informative images text alternatives in %s", async (path) => {
        const images = (await elementsIn(path)).filter(
            (el) => el.name === "img"
        );
        expect(images.length).toBeGreaterThan(0);
        for (const image of images) {
            expect(attribute(image, "alt")?.trim()).toBeTruthy();
        }
    });

    it.each(["brand/stack-system/index.md", "brand/motion.md"])(
        "names embedded video frames in %s",
        async (path) => {
            const frames = (await elementsIn(path)).filter(
                (el) => el.name === "iframe"
            );
            expect(frames.length).toBeGreaterThan(0);
            for (const frame of frames) {
                expect(attribute(frame, "title")?.trim()).toBeTruthy();
            }
        }
    );

    it("names every rendered select, including size examples", async () => {
        const elements = await elementsIn("system/forms/select.md");
        const selects = elements.filter((el) => el.name === "select");
        const labels = elements
            .filter((el) => el.name === "label")
            .map((el) => attribute(el, "for"));
        expect(selects.length).toBeGreaterThan(3);
        for (const select of selects) {
            const id = attribute(select, "id");
            expect(
                Boolean(attribute(select, "aria-label")) ||
                    Boolean(id && labels.includes(id))
            ).toBe(true);
        }
    });

    it("does not put prohibited aria-label attributes on native labels", async () => {
        const labels = (
            await elementsIn("system/components/toggle-switch.md")
        ).filter((el) => el.name === "label");
        expect(labels.length).toBeGreaterThan(0);
        for (const label of labels) {
            expect(attribute(label, "aria-label")).toBeUndefined();
        }
    });

    it("names focus-demo checkboxes without hiding their semantics", async () => {
        const elements = await elementsIn("system/accessibility/intro.md");
        const toggles = elements.filter(
            (el) => el.name === "input" && attribute(el, "type") === "checkbox"
        );
        expect(toggles).toHaveLength(2);
        for (const toggle of toggles) {
            expect(attribute(toggle, "role")).toBeUndefined();
            const labelledby = attribute(toggle, "aria-labelledby");
            expect(labelledby).toBeTruthy();
            expect(
                elements.some((el) => attribute(el, "id") === labelledby)
            ).toBe(true);
        }
    });

    it("marks only the two intentionally low-contrast examples", async () => {
        const examples = (
            await elementsIn("system/accessibility/intro.md")
        ).filter(
            (el) => attribute(el, "data-a11y-intentional-contrast") === "true"
        );
        expect(examples).toHaveLength(2);
        expect(examples.map((el) => el.name)).toEqual(["button", "div"]);
        expect(attribute(examples[0], "class")).toContain(
            "bg-theme-secondary-200"
        );
        expect(attribute(examples[1], "class")).toContain("fc-green-300");
    });
});
