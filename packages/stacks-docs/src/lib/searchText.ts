import TurndownService from "turndown";

const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
});

export function normalizeSearchText(text: string): string {
    return text.replace(/\s+/g, " ").trim();
}

export function getSearchText(html: string): string {
    return normalizeSearchText(turndownService.turndown(html));
}
