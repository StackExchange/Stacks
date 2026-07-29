const HTTP_PROTOCOLS = new Set(["http:", "https:"]);

export const normalizeAssetBaseUrl = (value: string): string => {
    if (value === "") {
        return value;
    }

    const url = new URL(value);

    if (!HTTP_PROTOCOLS.has(url.protocol)) {
        throw new Error("Asset base URL must use http or https.");
    }

    if (url.username || url.password || url.search || url.hash) {
        throw new Error(
            "Asset base URL cannot contain credentials, a query, or a fragment."
        );
    }

    return url.toString().replace(/\/+$/, "");
};

// Root-relative image assets are authored as `/email/...`. Anchoring to a
// quote or `(` leaves absolute links containing `/email/` untouched.
const assetPathPattern = /(["'(])\/email\//g;

export const resolveAssetUrls = (
    markup: string,
    assetBaseUrl: string
): string =>
    assetBaseUrl
        ? markup.replace(
              assetPathPattern,
              (_match, prefix: string) =>
                  `${prefix}${assetBaseUrl}/email/`
          )
        : markup;
