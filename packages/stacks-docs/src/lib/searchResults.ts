export function limitSearchResults<T>(results: T[], limit = 8) {
    return {
        results: results.slice(0, limit),
        total: results.length,
    };
}
