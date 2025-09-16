const generatePagination = (
    page: number,
    totalPages: number
): (number | string)[] => {
    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const result: (number | string)[] = [];

    // Add the first page
    result.push(1);

    // Determine the start and end of the range around the current page
    let start = Math.max(2, page - 2);
    let end = Math.min(totalPages - 1, page + 2);
    if (start === 2) end = 5;
    if (end === totalPages - 1) start = totalPages - 4;

    // Add ellipsis if the start of the range is far from the first page
    if (start > 2) {
        result.push("…");
    }

    // Add the range of pages around the current page
    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    // Add ellipsis if the end of the range is far from the last page
    if (end < totalPages - 1) {
        result.push("…");
    }

    // Add the last page
    result.push(totalPages);

    return result;
};

export { generatePagination };
