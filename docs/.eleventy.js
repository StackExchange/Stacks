const pluginTOC = require("eleventy-plugin-nesting-toc");
const { version } = require("../package.json");

const headerPlugin = require("./plugins/header");
const highlightPlugin = require("./plugins/highlight");
const iconPlugin = require("./plugins/icons");
const bannerExamplePlugin = require("./plugins/banner-example");
const tipPlugin = require("./plugins/tip");
const markdownPlugin = require("./plugins/markdown");

module.exports = function(eleventyConfig) {
  eleventyConfig.setQuietMode(true); // Reduce the console output
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');

  eleventyConfig.addPlugin(bannerExamplePlugin);
  eleventyConfig.addPlugin(iconPlugin);
  eleventyConfig.addPlugin(headerPlugin);
  eleventyConfig.addPlugin(tipPlugin);

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