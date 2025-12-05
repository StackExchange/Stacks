/**
 * Formats a number by abbreviating it with k (thousands) or m (millions) suffix.
 * The result will be at most 4 characters long.
 * 
 * @param num - The number to format
 * @returns The formatted number as a string
 * 
 * @example
 * formatNumber(123) // "123"
 * formatNumber(1234) // "1.2k"
 * formatNumber(9999) // "10k"
 * formatNumber(12345) // "12k"
 * formatNumber(1234567) // "1.2m"
 * formatNumber(12345678) // "12m"
 */
export function formatNumber(num: number): string {
    if (num < 1000) {
        return num.toString();
    }
    
    if (num < 1000000) {
        const k = num / 1000;
        const rounded = parseFloat(k.toFixed(1));
        // If the rounded result would be >= 10k, don't use decimal
        if (rounded >= 10) {
            return Math.round(k) + "k";
        }
        return rounded + "k";
    }
    
    const m = num / 1000000;
    const rounded = parseFloat(m.toFixed(1));
    // If the rounded result would be >= 10m, don't use decimal
    if (rounded >= 10) {
        return Math.round(m) + "m";
    }
    return rounded + "m";
}
