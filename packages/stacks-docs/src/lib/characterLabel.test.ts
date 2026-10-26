import { describe, expect, it } from "vitest";
import { getCharacterLabel } from "./characterLabel";

describe("glyph button accessible names", () => {
    it.each([
        [" ", 0x20, "Space (U+0020)"],
        ["\u00a0", 0xa0, "Non-breaking space (U+00A0)"],
        ["\u2028", 0x2028, "Line separator (U+2028)"],
        ["\u2029", 0x2029, "Paragraph separator (U+2029)"],
        ["A", 0x41, "A (U+0041)"],
        ["&", 0x26, "& (U+0026)"],
        ["\u2003", 0x2003, "Character (U+2003)"],
    ])(
        "names %j without relying on whitespace text",
        (character, code, name) => {
            expect(getCharacterLabel(character, code)).toBe(name);
        }
    );
});
