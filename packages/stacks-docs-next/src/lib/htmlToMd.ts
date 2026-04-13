// Borrowed from
// https://github.com/CleverCloud/eleventy-plugin-llms-txt/blob/main/src/index.js#L16

export default (
    content: string,
    normalizeWhitespace: boolean = true,
    stripHorizontalRules: boolean = true
) => {
    if (!content) return "";

    // Remove <style> tags and their content
    let processedContent = content.replace(
        /<style[^>]*>[\s\S]*?<\/style>/gi,
        ""
    );

    // Remove <script> tags and their content
    processedContent = processedContent.replace(
        /<script[^>]*>[\s\S]*?<\/script>/gi,
        ""
    );

    // Strip HTML tags
    processedContent = processedContent.replace(/<[^>]*>/g, " ");

    // Remove horizontal rules if configured
    if (stripHorizontalRules) {
        // Replace '---' with a space to avoid breaking content flow
        processedContent = processedContent.replace(/---/g, " ");
    }

    // Normalize whitespace if configured
    if (normalizeWhitespace) {
        processedContent = processedContent.replace(/\s+/g, " ").trim();
    } else {
        // Just trim leading/trailing whitespace but preserve internal formatting
        processedContent = processedContent.trim();
    }

    return processedContent;
};
