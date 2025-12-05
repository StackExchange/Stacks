import { expect } from "@open-wc/testing";
import { formatNumber } from "./format";

describe("formatNumber", () => {
    it("should return the number as-is for numbers < 1000", () => {
        expect(formatNumber(0)).to.equal("0");
        expect(formatNumber(1)).to.equal("1");
        expect(formatNumber(999)).to.equal("999");
    });

    it("should format numbers >= 1000 and < 10000 with one decimal and 'k'", () => {
        expect(formatNumber(1000)).to.equal("1k");
        expect(formatNumber(1234)).to.equal("1.2k");
        expect(formatNumber(5678)).to.equal("5.7k");
        expect(formatNumber(9900)).to.equal("9.9k");
        expect(formatNumber(9999)).to.equal("10k"); // rounds to 10
    });

    it("should format numbers >= 10000 and < 100000 without decimal (max 4 chars)", () => {
        expect(formatNumber(10000)).to.equal("10k");
        expect(formatNumber(12345)).to.equal("12k");
        expect(formatNumber(56789)).to.equal("57k");
        expect(formatNumber(99999)).to.equal("100k");
    });

    it("should format numbers >= 100000 and < 1000000 without decimal", () => {
        expect(formatNumber(100000)).to.equal("100k");
        expect(formatNumber(123456)).to.equal("123k");
        expect(formatNumber(999999)).to.equal("1000k");
    });

    it("should format numbers >= 1000000 and < 10000000 with one decimal and 'm'", () => {
        expect(formatNumber(1000000)).to.equal("1m");
        expect(formatNumber(1234567)).to.equal("1.2m");
        expect(formatNumber(5678901)).to.equal("5.7m");
        expect(formatNumber(9900000)).to.equal("9.9m");
        expect(formatNumber(9999999)).to.equal("10m"); // rounds to 10
    });

    it("should format numbers >= 10000000 without decimal", () => {
        expect(formatNumber(10000000)).to.equal("10m");
        expect(formatNumber(12345678)).to.equal("12m");
        expect(formatNumber(56789012)).to.equal("57m");
        expect(formatNumber(99999999)).to.equal("100m");
        expect(formatNumber(100000000)).to.equal("100m");
        expect(formatNumber(123456789)).to.equal("123m");
        expect(formatNumber(999999999)).to.equal("1000m");
    });

    it("should ensure result is at most 4 characters", () => {
        // 3 chars or less
        expect(formatNumber(999)).to.equal("999");
        expect(formatNumber(1000)).to.equal("1k");
        expect(formatNumber(1500)).to.equal("1.5k");
        
        // Exactly 4 chars
        expect(formatNumber(9999)).to.equal("10k");
        expect(formatNumber(10000)).to.equal("10k");
        expect(formatNumber(99999)).to.equal("100k");
        expect(formatNumber(100000)).to.equal("100k");
        expect(formatNumber(999999)).to.equal("1000k");
        expect(formatNumber(9999999)).to.equal("10m");
        expect(formatNumber(10000000)).to.equal("10m");
    });
});
