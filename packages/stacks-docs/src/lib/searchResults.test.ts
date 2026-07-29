import { describe, expect, it } from "vitest";
import { limitSearchResults } from "./searchResults";

describe("limitSearchResults", () => {
    it("retains the total count when limiting displayed results", () => {
        const resultSet = limitSearchResults(Array.from({ length: 12 }), 8);

        expect(resultSet.results).toHaveLength(8);
        expect(resultSet.total).toBe(12);
    });
});
