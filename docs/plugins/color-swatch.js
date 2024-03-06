const generateColorSwatchHTML = function(color, size = "32", classes = "") {
    return `
        <span class="bg-${color} h${size} w${size} d-inline-block bar-sm ${classes}">
            <span class="v-visible-sr">${color}</span>
        </span>
    `;
};

module.exports = {
    configFunction(eleventyConfig) {
        eleventyConfig.addLiquidShortcode("color-swatch", generateColorSwatchHTML);
    }
};
