import dayjs from "dayjs";
import en from "dayjs/locale/en.js";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(relativeTime);
const localeName = "stacks-utils";
dayjs.locale(
    {
        ...en,
        name: localeName,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "%d seconds ago",
            m: "1 minute ago",
            mm: "%d minutes ago",
            h: "1 hour ago",
            hh: "%d hours ago",
            d: "yesterday",
            dd: "%d days ago",
        },
    },
    undefined,
    true
);

/**
 * Utility class for formatting date and time values into various formats.
 */
export class DateTimeFormatter {
    /**
     * Formats a UTC time string into a human-readable relative or absolute time format.
     *
     * @param utcTime - A UTC time string (e.g., "2026-01-15T15:45:30Z")
     * @returns A formatted time string:
     *   - Within 2 days: relative time (e.g., "2 hours ago", "yesterday")
     *   - Same year: short date with time (e.g., "Jan 15 at 15:45")
     *   - Different year: full date with time (e.g., "Jan 15, 2025 at 15:45")
     */
    public static formatTime(utcTime: string): string {
        const dtNow = new Date();
        const dtTime = new Date(utcTime);
        const durationInSeconds = Math.floor(
            (dtNow.getTime() - dtTime.getTime()) / 1000
        );

        const secondsInMinute = 60;
        const secondsInHour = 60 * secondsInMinute;
        const secondsInDay = 24 * secondsInHour;

        const options: Intl.DateTimeFormatOptions = {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        };

        const rules = [
            {
                condition: (diff: number) => diff <= 2 * secondsInDay,
                format: (theTime: Date) => {
                    return dayjs(theTime).locale(localeName).fromNow(true);
                },
            },
            {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                condition: (diff: number) =>
                    dtNow.getFullYear() === dtTime.getFullYear(),
                format: (theTime: Date) => {
                    return new Intl.DateTimeFormat("en-US", options)
                        .format(theTime)
                        .replace(/,([^,]*)$/, " at$1");
                },
            },
        ];

        let formattedTime = new Intl.DateTimeFormat("en-US", {
            ...options,
            year: "numeric",
        })
            .format(dtTime)
            .replace(/,([^,]*)$/, " at$1");

        for (const rule of rules) {
            if (rule.condition(durationInSeconds)) {
                formattedTime = rule.format(dtTime);
                break;
            }
        }

        return formattedTime;
    }
}

//Convenience function
export const { formatTime } = DateTimeFormatter;
