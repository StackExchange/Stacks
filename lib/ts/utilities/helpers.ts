/**
 * A no-op function that serves the sole purpose of convincing TypeScript that a
 * given object is of the specified type.
 *
 * @see https://github.com/microsoft/TypeScript/issues/10421
 */
export function assumeType<T>(x: unknown): asserts x is T {
    return;
}
