const pluginTOC = require("eleventy-plugin-nesting-toc");
const { version } = require("../package.json");

const headerPlugin = require("./plugins/header");
const highlightPlugin = require("./plugins/highlight");
const iconPlugin = require("./plugins/icons");
const tipPlugin = require("./plugins/tip");
const markdownPlugin = require("./plugins/markdown");

module.exports = function(eleventyConfig) {
  eleventyConfig.setQuietMode(true); // Reduce the console output
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');

  eleventyConfig.addPlugin(iconPlugin);
  eleventyConfig.addPlugin(headerPlugin);
  eleventyConfig.addPlugin(tipPlugin);

  // Copy button shortcode
  eleventyConfig.addLiquidShortcode("copybutton", function(name) {
    var tooltipId = "tooltip-" + (name || Math.floor(Math.random() * 1000));

    var output = `<button
      class="s-btn s-btn__muted s-btn__icon ps-absolute t8 r8"
      data-action="clipboard#copy"
      data-s-tooltip-placement="top"
      data-controller="s-tooltip"
      aria-describedby="${tooltipId}">
        <span class="d-none" data-show-on-copy>${Icons["Checkmark"]}</span>
        <span data-hide-on-copy>${Icons["Copy"]}</span>
    </button>
    <div class="s-popover s-popover__tooltip"
      id="${tooltipId}"
      role="tooltip"
      aria-hidden="true">
        <div class="s-popover--arrow"></div>
        <span class="d-none" data-show-on-copy>Copied</span>
        <span data-hide-on-copy>Copy</span>
    </div>`;

    return output;
  });

  // Version shortcode
  eleventyConfig.addLiquidShortcode("version", function() {
    return {version}.version;
  });

  eleventyConfig.addPlugin(highlightPlugin);

  eleventyConfig.addPlugin(markdownPlugin);

  // Add submenu generation
  eleventyConfig.addPlugin(pluginTOC, {tags: ['h2', 'h3'], wrapper: 'nav aria-label="Table of contents"'});

  // Copy these files over to _site
  eleventyConfig.addPassthroughCopy('assets/dist');
  eleventyConfig.addPassthroughCopy('assets/img');
  eleventyConfig.addPassthroughCopy('email/templates/code');
  eleventyConfig.addPassthroughCopy('email/templates/examples');

  // Ignore liquid parsing on these files
  eleventyConfig.ignores.add('email/templates/code');
  eleventyConfig.ignores.add('email/templates/examples');
}