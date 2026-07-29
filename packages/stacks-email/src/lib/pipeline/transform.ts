const tokenPattern = /\[\[([A-Z0-9_]+)\]\]/g;

export const transformTokens = (
    input: string,
    replacements: Record<string, string>
) =>
    input.replace(tokenPattern, (match, token: string) => {
        if (token in replacements) {
            return replacements[token];
        }
        return match;
    });
