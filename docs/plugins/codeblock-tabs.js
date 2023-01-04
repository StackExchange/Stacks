module.exports = {
    configFunction(eleventyConfig) {
        // Header shortcode
        eleventyConfig.addLiquidShortcode(
            "codeblock-tabs",
            function (razorUrl) {
                return `<ul class="s-navigation s-navigation__muted mb4">
                    <li><span class="s-navigation--item is-selected">CSS</span></li>
                    <li><a href="${razorUrl}" class="s-navigation--item" target="_blank">Razor</a></li>
                </ul>`;
            }
        );
    },
};
