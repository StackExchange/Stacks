/** Name font glyphs, including characters that have no readable button text. */
export function getCharacterLabel(character: string, code: number): string {
    const whitespaceNames: Record<number, string> = {
        0x20: "Space",
        0xa0: "Non-breaking space",
        0x2028: "Line separator",
        0x2029: "Paragraph separator",
    };
    const name = whitespaceNames[code] ?? (character.trim() || "Character");
    const unicode = code.toString(16).toUpperCase().padStart(4, "0");

    return `${name} (U+${unicode})`;
}
