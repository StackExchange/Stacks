import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { DateTimeFormatter, formatTime } from "./DateTimeFormatter";

dayjs.extend(relativeTime);

function formatAbsoluteTime(time: string, includeYear = false): string {
    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    };

    if (includeYear) {
        options.year = "numeric";
    }

    return new Intl.DateTimeFormat("en-US", options)
        .format(new Date(time))
        .replace(/,([^,]*)$/, " at$1");
}

describe("DateTimeFormatter.formatTime", () => {
    beforeEach(() => {
        // Mock the current time to Jan 15, 2026 at noon
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2026-01-15T12:00:00Z"));
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    describe("relative time format (within 2 days)", () => {
        it("should format time from 2 hours ago", () => {
            const twoHoursAgo = new Date("2026-01-15T10:00:00Z").toISOString();
            const result = DateTimeFormatter.formatTime(twoHoursAgo);
            expect(result).toBe("2 hours ago");
        });

        it("should format time from 1 hour ago", () => {
            const oneHourAgo = new Date("2026-01-15T11:00:00Z").toISOString();
            const result = DateTimeFormatter.formatTime(oneHourAgo);
            expect(result).toBe("1 hour ago");
        });

        it("should format time from yesterday", () => {
            const yesterday = new Date("2026-01-14T12:00:00Z").toISOString();
            const result = DateTimeFormatter.formatTime(yesterday);
            expect(result).toBe("yesterday");
        });

        it("should format time from minutes ago", () => {
            const minutesAgo = new Date("2026-01-15T11:30:00Z").toISOString();
            const result = DateTimeFormatter.formatTime(minutesAgo);
            expect(result).toBe("30 minutes ago");
        });

        it("should use relative time at exactly the two-day boundary", () => {
            const twoDaysAgo = new Date("2026-01-13T12:00:00Z").toISOString();
            const result = DateTimeFormatter.formatTime(twoDaysAgo);
            expect(result).toBe("2 days ago");
        });
    });

    describe("same year format (beyond 2 days)", () => {
        it("should format date with time for same year", () => {
            const threeDaysAgo = new Date("2026-01-12T15:45:00Z").toISOString();
            const result = DateTimeFormatter.formatTime(threeDaysAgo);
            expect(result).toBe(formatAbsoluteTime(threeDaysAgo));
        });

        it("should use an absolute date beyond the two-day boundary", () => {
            const beyondTwoDays = new Date(
                "2026-01-13T11:59:59Z"
            ).toISOString();
            const result = DateTimeFormatter.formatTime(beyondTwoDays);
            expect(result).toBe(formatAbsoluteTime(beyondTwoDays));
        });
    });

    describe("different year format", () => {
        it("should format date with year for different year", () => {
            const lastYear = new Date("2025-12-15T15:45:00Z").toISOString();
            const result = DateTimeFormatter.formatTime(lastYear);
            expect(result).toBe(formatAbsoluteTime(lastYear, true));
        });
    });

    describe("convenience function export", () => {
        it("should work with the exported formatTime function", () => {
            const twoHoursAgo = new Date("2026-01-15T10:00:00Z").toISOString();
            const result = formatTime(twoHoursAgo);
            expect(result).toBe("2 hours ago");
        });

        it("should be the same as calling DateTimeFormatter.formatTime", () => {
            const testTime = new Date("2026-01-15T10:00:00Z").toISOString();
            const result1 = formatTime(testTime);
            const result2 = DateTimeFormatter.formatTime(testTime);
            expect(result1).toBe(result2);
        });
    });

    it("should not modify the consumer's default Day.js locale", () => {
        expect(dayjs().subtract(1, "hour").fromNow()).toBe("an hour ago");
    });
});
