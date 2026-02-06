const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const llmsTxtPlugin = require("eleventy-plugin-llms-txt");
const { version } = require("../stacks-classic/package.json");

const headerPlugin = require("./plugins/header");
const highlightPlugin = require("./plugins/highlight");
const iconPlugin = require("./plugins/icons");
const bannerExamplePlugin = require("./plugins/banner-example");
const tipPlugin = require("./plugins/tip");
const markdownPlugin = require("./plugins/markdown");

const dataDir = path.join(__dirname, '_data');

// Re-expose JSON from _data/atomic/ and _data/components/ as top-level keys so
// templates keep using the same names (e.g. atomics, padding, buttons).
function registerSubfolderData(eleventyConfig, subdir) {
  const dir = path.join(dataDir, subdir);
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .forEach((file) => {
      const key = path.basename(file, '.json');
      const filePath = path.join(dir, file);
      eleventyConfig.addGlobalData(key, () => require(filePath));
    });
}

module.exports = function(eleventyConfig) {
  eleventyConfig.setQuietMode(true); // Reduce the console output
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');

  registerSubfolderData(eleventyConfig, 'atomic');
  registerSubfolderData(eleventyConfig, 'components');

  eleventyConfig.addPlugin(bannerExamplePlugin);
  eleventyConfig.addPlugin(iconPlugin);
  eleventyConfig.addPlugin(headerPlugin);
  eleventyConfig.addPlugin(tipPlugin);
  eleventyConfig.addPlugin(llmsTxtPlugin, {
    siteUrl: 'https://stackoverflow.design',
    collections: ['base', 'components', 'develop', 'foundation'],
    additionalMetadata: ['description'],
    normalizeWhitespace: true,
  });

  // Version shortcode
  eleventyConfig.addLiquidShortcode("version", function() {
    return {version}.version;
  });

  eleventyConfig.addPlugin(highlightPlugin);

  eleventyConfig.addPlugin(markdownPlugin);

  // Create page table of contents data
  eleventyConfig.addLiquidFilter("extractHeadings", function(content) {
    const $ = cheerio.load(content);
    const headings = [];
    
    $('h2, h3').each((i, el) => {
      headings.push({
        level: parseInt(el.tagName[1]),
        text: $(el).text(),
        id: $(el).attr('id')
      });
    });
    
    return headings;
  });

  // Copy these files over to _site
  eleventyConfig.addPassthroughCopy('assets/dist');
  eleventyConfig.addPassthroughCopy('assets/img');
  eleventyConfig.addPassthroughCopy('email/templates/code');
  eleventyConfig.addPassthroughCopy('email/templates/examples');

  // Ignore liquid parsing on these files
  eleventyConfig.ignores.add('email/templates/code');
  eleventyConfig.ignores.add('email/templates/examples');
}
