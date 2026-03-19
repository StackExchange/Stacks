import type { ClassValue } from "svelte/elements";

/**
 * Infers ClassValue from a Storybook control string: JSON array/object → parsed; otherwise string.
 * Use in story templates so the class control accepts plain strings or JSON (e.g. ["wmx2"] or {"wmx2":true}).
 */
export function parseClassValue(
    input: string | undefined
): ClassValue | undefined {
    const s = typeof input === "string" ? input.trim() : "";
    if (!s) return undefined;
    if (s.startsWith("[") && s.endsWith("]")) {
        try {
            return JSON.parse(s) as string[];
        } catch {
            return s;
        }
    }
    if (s.startsWith("{") && s.endsWith("}")) {
        try {
            return JSON.parse(s) as Record<string, boolean>;
        } catch {
            return s;
        }
    }
    return s;
}
