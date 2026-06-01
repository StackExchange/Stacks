const markerStart = (name: string) => `<!-- START ${name} -->`;
const markerEnd = (name: string) => `<!-- END ${name} -->`;

const escapeRegExp = (value: string) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const buildPairTagPattern = (tagName: string) =>
    new RegExp(
        `(<${tagName}\\b[^>]*>[\\s\\S]*?<\\/${tagName}>)`,
        "i"
    );

const buildSelfClosingTagPattern = (tagName: string) =>
    new RegExp(`(<${tagName}\\b[^>]*/>)`, "i");

const buildMarkerPattern = (name: string) =>
    new RegExp(
        `${escapeRegExp(markerStart(name))}[\\s\\S]*?${escapeRegExp(
            markerEnd(name)
        )}`,
        "i"
    );

export const applyTemplateProps = (
    source: string,
    props: Record<string, string>
) =>
    Object.entries(props).reduce(
        (next, [key, value]) =>
            next.replaceAll(`{{${key}}}`, String(value ?? "")),
        source
    );

export const wrapComponentWithMarkers = (mjml: string, name: string) => `
<mj-raw>${markerStart(name)}</mj-raw>
${mjml}
<mj-raw>${markerEnd(name)}</mj-raw>
`;

export const wrapTagWithMarkers = (
    mjml: string,
    name: string,
    tagName: string
) => {
    const pairPattern = buildPairTagPattern(tagName);
    const selfClosingPattern = buildSelfClosingTagPattern(tagName);

    if (pairPattern.test(mjml)) {
        return mjml.replace(
            pairPattern,
            `<mj-raw>${markerStart(name)}</mj-raw>\n$1\n<mj-raw>${markerEnd(
                name
            )}</mj-raw>`
        );
    }

    if (selfClosingPattern.test(mjml)) {
        return mjml.replace(
            selfClosingPattern,
            `<mj-raw>${markerStart(name)}</mj-raw>\n$1\n<mj-raw>${markerEnd(
                name
            )}</mj-raw>`
        );
    }

    return wrapComponentWithMarkers(mjml, name);
};

export const extractBetweenMarkers = (source: string, name: string) => {
    const pattern = buildMarkerPattern(name);
    const match = source.match(pattern);

    if (!match) {
        return null;
    }

    return match[0]
        .replace(markerStart(name), "")
        .replace(markerEnd(name), "")
        .trim();
};

export const extractComponentHtml = (html: string, name: string) =>
    extractBetweenMarkers(html, name);

export const extractTagMarkup = (source: string, tagName: string) => {
    const pairPattern = buildPairTagPattern(tagName);
    const selfClosingPattern = buildSelfClosingTagPattern(tagName);
    const match = source.match(pairPattern) ?? source.match(selfClosingPattern);

    return match?.[0]?.trim() ?? null;
};
