const { generateHeaderHTML } = require("./header");
const MarkdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
    const markdownIt = new MarkdownIt();

    // Add paired shortcode for stacks-section
    eleventyConfig.addPairedShortcode("stacks-markdown", function(content) {
        // Convert markdown content to HTML
        let htmlContent = markdownIt.render(content);

        // Replace Markdown headers with generated HTML headers
        htmlContent = htmlContent.replace(/<h(\d)>(.+?)<\/h(\d)>/g, function(match, tag, text) {
            return generateHeaderHTML(`h${tag}`, text); // Generate HTML header using the tag and text
        });

        // Add .stacks-copy to paragraph elements
        htmlContent = htmlContent.replace(/<p>(.+?)<\/p>/g, "<p class=\"stacks-copy\">$1</p>");
        // Add .stacks-code to code element
        htmlContent = htmlContent.replace(/<code>(.+?)<\/code>/g, "<code class=\"stacks-code\">$1</code>");

        // Return HTML with section element and stacks-section class
        return htmlContent;
    });
};
