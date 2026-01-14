/**
 * Utility class for formatting numbers into various formats.
 */
export class NumberFormatter {
    private static largeNumberFormat = new Intl.NumberFormat("en-US", {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 1,
        });
    
    private static standardNumberFormat = new Intl.NumberFormat("en-US", {
            notation: "standard",
        });

    /**
     * Formats a count/number into a human-readable string with compact notation for large numbers.
     *
     * @param count - The number to format
     * @param compactThreshold - (Optional) The number at which to switch from standard to compact format
     * @returns A formatted string:
     *   - Less than 10,000: standard format with commas (e.g., "1,234", "999")
     *   - 10,000 or more: compact format with lowercase suffixes (e.g., "10k", "1.2m")
     */
    public static formatCount(count: number, compactThreshold: number = 10000): string {
        for (const formatter of NumberFormatter.getFormatters(compactThreshold)) {
            if (formatter.condition(count)) {
                return formatter.format(count);
            }
        }
        return count.toString(); // should never reach here
    }

    /**
     * Returns formatters that switch between standard and compact notation.
     * @param compactThreshold - The number at which to switch from standard to compact format
     */
    private static getFormatters(compactThreshold: number){
        return [
            {
                condition: (rep: number) => rep < compactThreshold,
                format: (rep: number) => NumberFormatter.standardNumberFormat.format(rep),
            },
            {
                condition: (rep: number) => rep >= compactThreshold,
                format: (rep: number) =>
                    NumberFormatter.largeNumberFormat
                        .format(rep)
                        // default is 'K' for thousands and 'M' for millions, we want lowercase
                        .toLowerCase(),
            },
        ];
    }
}

//Convenience function
export const { formatCount } = NumberFormatter;
