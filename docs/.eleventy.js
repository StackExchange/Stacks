const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginTOC = require("eleventy-plugin-nesting-toc");
const markdownShortcode = require("eleventy-plugin-markdown-shortcode");
const { default: Icons, Spots } = require("@stackoverflow/stacks-icons");
const { version } = require("../package.json");

module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  eleventyConfig.addLayoutAlias('page-nomenu', 'layouts/page-nomenu.html');

  // Icon shortcode
  eleventyConfig.addLiquidShortcode("icon", function(name, classes, dimension) {
    var svg = Icons[name];
    var defaultClasses = "svg-icon icon" + name;

    if (!svg) {
      return `<span class="fc-danger">Invalid icon: ${name}</span>`;
    }

    // If we have classes, add them
    if (classes != null) {
      svg = svg.replace(defaultClasses, defaultClasses + " " + classes);
    }

    // If we need to change the size, do that too
    if (dimension != null) {
      svg = svg.replace('width="18" height="18"', 'width="' + dimension + '" height="' + dimension + '"');
    }

    return svg;
  });

  // Spot shortcode
  eleventyConfig.addLiquidShortcode("spot", function(name, classes, dimension) {
    var svg = Spots[name];

    if (!svg) {
      return `<span class="fc-danger">Invalid spot: ${name}</span>`;
    }

    var defaultClasses = "svg-spot spot" + name;

    // If we have classes, add them
    if (classes != null) {
      svg = svg.replace(defaultClasses, defaultClasses + " " + classes);
    }

    // If we need to change the size, do that too
    if (dimension != null) {
      svg = svg.replace('width="18" height="18"', 'width="' + dimension + '" height="' + dimension + '"');
    }

    return svg;
  });

  // Header shortcode
  eleventyConfig.addLiquidShortcode("header", function(tag, text) {
    var slug = text.replace(/\s+/g, '-').toLowerCase();
    var linkIcon = Icons["Link"];

    var output = '';
    output += '<div class="d-flex jc-space-between ai-end pe-none stacks-header">';
    output +=   '<' + tag + ' class="flex--cell fl1 stacks-' + tag + '" id="'+ slug +'">';
    output +=     '<span class="pe-auto">' + text + '</span>';
    output +=   '</' + tag + '>';
    output +=   '<a class="d-flex flex__center mbn6 s-btn s-btn__muted pe-auto" href="#'+ slug +'">';
    output +=     linkIcon;
    output +=   '</a>';
    output += '</div>';

    return output;
  });

  // Version shortcode
  eleventyConfig.addLiquidShortcode("version", function() {
    return {version}.version;
  });

  // Add syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Add markdown shortcode
  eleventyConfig.addPlugin(markdownShortcode, {
    html: true
  });

  // Add submenu generation
  eleventyConfig.addPlugin(pluginTOC, {tags: ['h2', 'h3']});

  // Copy these files over to _site
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('email/templates/code');
  eleventyConfig.addPassthroughCopy('email/templates/examples');
}