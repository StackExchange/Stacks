const largeNumberFormat = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
});

const standardNumberFormat = new Intl.NumberFormat("en-US", {
    notation: "standard",
});

const formatters = [
    {
        condition: (rep: number) => rep < 10000,
        format: (rep: number) => standardNumberFormat.format(rep),
    },
    {
        condition: (rep: number) => rep >= 10000,
        format: (rep: number) =>
            largeNumberFormat
                .format(rep)
                // default is 'K' for thousands and 'M' for millions, we want lowercase
                .toLowerCase(),
    },
];

/**
 * Utility class for formatting numbers into various formats.
 */
export class NumberFormatter {
    /**
     * Formats a count/number into a human-readable string with compact notation for large numbers.
     *
     * @param count - The number to format
     * @returns A formatted string:
     *   - Less than 10,000: standard format with commas (e.g., "1,234", "999")
     *   - 10,000 or more: compact format with lowercase suffixes (e.g., "10k", "1.2m")
     */
    public static formatCount(count: number): string {
        for (const formatter of formatters) {
            if (formatter.condition(count)) {
                return formatter.format(count);
            }
        }
        return count.toString(); // should never reach here
    }
}

//Convenience function
export const { formatCount } = NumberFormatter;
