import { describe, it, expect } from "vitest";
import { NumberFormatter, formatCount } from "./NumberFormatter";

describe("NumberFormatter.formatCount", () => {
    describe("standard format (less than 10,000)", () => {
        it("should format small numbers without abbreviation", () => {
            expect(NumberFormatter.formatCount(0)).toBe("0");
            expect(NumberFormatter.formatCount(42)).toBe("42");
            expect(NumberFormatter.formatCount(123)).toBe("123");
            expect(NumberFormatter.formatCount(999)).toBe("999");
        });

        it("should format numbers with commas for thousands", () => {
            expect(NumberFormatter.formatCount(1000)).toBe("1,000");
            expect(NumberFormatter.formatCount(1234)).toBe("1,234");
            expect(NumberFormatter.formatCount(5678)).toBe("5,678");
            expect(NumberFormatter.formatCount(9999)).toBe("9,999");
        });
    });

    describe("compact format (10,000 or more)", () => {
        it("should format tens of thousands with k suffix", () => {
            expect(NumberFormatter.formatCount(10000)).toBe("10k");
            expect(NumberFormatter.formatCount(12345)).toBe("12.3k");
            expect(NumberFormatter.formatCount(99999)).toBe("100k");
        });

        it("should format hundreds of thousands with k suffix", () => {
            expect(NumberFormatter.formatCount(100000)).toBe("100k");
            expect(NumberFormatter.formatCount(123456)).toBe("123.5k");
            expect(NumberFormatter.formatCount(999999)).toBe("1m");
        });

        it("should format millions with m suffix", () => {
            expect(NumberFormatter.formatCount(1000000)).toBe("1m");
            expect(NumberFormatter.formatCount(1234567)).toBe("1.2m");
            expect(NumberFormatter.formatCount(5678901)).toBe("5.7m");
            expect(NumberFormatter.formatCount(9999999)).toBe("10m");
        });

        it("should format tens of millions with m suffix", () => {
            expect(NumberFormatter.formatCount(10000000)).toBe("10m");
            expect(NumberFormatter.formatCount(12345678)).toBe("12.3m");
            expect(NumberFormatter.formatCount(99999999)).toBe("100m");
        });
    });

    describe("negative numbers", () => {
        it("should format negative numbers in standard format", () => {
            expect(NumberFormatter.formatCount(-42)).toBe("-42");
            expect(NumberFormatter.formatCount(-999)).toBe("-999");
            expect(NumberFormatter.formatCount(-1234)).toBe("-1,234");
            expect(NumberFormatter.formatCount(-9999)).toBe("-9,999");
        });

        it("should format negative numbers in compact format", () => {
            expect(NumberFormatter.formatCount(-10000)).toBe("-10k");
            expect(NumberFormatter.formatCount(-12345)).toBe("-12.3k");
            expect(NumberFormatter.formatCount(-1234567)).toBe("-1.2m");
        });
    });

    describe("convenience function export", () => {
        it("should work with the exported formatCount function", () => {
            expect(formatCount(1234)).toBe("1,234");
            expect(formatCount(12345)).toBe("12.3k");
        });

        it("should be the same as calling NumberFormatter.formatCount", () => {
            const testNumber = 50000;
            const result1 = formatCount(testNumber);
            const result2 = NumberFormatter.formatCount(testNumber);
            expect(result1).toBe(result2);
        });
    });
});
