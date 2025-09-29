import { expect } from "@open-wc/testing";
import { generatePagination } from "./pagination-generator";

describe("generatePagination", () => {
    // prettier-ignore
    it("should generate pagination with ellipsis correctly", () => {
        expect(generatePagination(1, 10)).to.deep.equal([1, 2, 3, 4, 5, "…", 10]);
        expect(generatePagination(2, 10)).to.deep.equal([1, 2, 3, 4, 5, "…", 10]);
        expect(generatePagination(3, 10)).to.deep.equal([1, 2, 3, 4, 5, "…", 10]);
        expect(generatePagination(4, 10)).to.deep.equal([1, 2, 3, 4, 5, "…", 10]);
        expect(generatePagination(5, 10)).to.deep.equal([1, "…", 3, 4, 5, 6, 7, "…", 10]);
        expect(generatePagination(6, 10)).to.deep.equal([1, "…", 4, 5, 6, 7, 8, "…", 10]);
        expect(generatePagination(7, 10)).to.deep.equal([1, "…", 6, 7, 8, 9, 10]);
        expect(generatePagination(8, 10)).to.deep.equal([1, "…", 6, 7, 8, 9, 10]);
        expect(generatePagination(9, 10)).to.deep.equal([1, "…", 6, 7, 8, 9, 10]);
        expect(generatePagination(10, 10)).to.deep.equal([1, "…", 6, 7, 8, 9, 10]);
    });

    it("should handle edge cases correctly", () => {
        expect(generatePagination(1, 1)).to.deep.equal([1]);
        expect(generatePagination(2, 2)).to.deep.equal([1, 2]);
        expect(generatePagination(1, 3)).to.deep.equal([1, 2, 3]);
        expect(generatePagination(2, 3)).to.deep.equal([1, 2, 3]);
    });

    it("should handle small number of total pages correctly", () => {
        expect(generatePagination(1, 5)).to.deep.equal([1, 2, 3, 4, 5]);
        expect(generatePagination(3, 5)).to.deep.equal([1, 2, 3, 4, 5]);
        expect(generatePagination(5, 5)).to.deep.equal([1, 2, 3, 4, 5]);
    });
});
