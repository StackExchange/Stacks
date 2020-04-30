const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginTOC = require("eleventy-plugin-nesting-toc");

module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  eleventyConfig.addLayoutAlias('page-nomenu', 'layouts/page-nomenu.html');

  // Icon shortcode
  eleventyConfig.addLiquidShortcode("icon", function(name, classes, dimension) {
    var fs = require("fs");
    var path = "_includes/svg-icons/" + name + ".svg";
    var svg = fs.readFileSync(path).toString("utf-8");
    var defaultClasses = "svg-icon icon" + name;

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
    var fs = require("fs");
    var path = "_includes/svg-spots/" + name + ".svg";
    var svg = fs.readFileSync(path).toString("utf-8");
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
    var fs = require("fs");
    var linkIcon = fs.readFileSync("_includes/svg-icons/Link.svg").toString("utf-8");

    var output = '';
    output += '<div class="grid jc-space-between ai-end pe-none stacks-header">';
    output +=   '<' + tag + ' class="grid--cell fl1 stacks-' + tag + '" id="'+ slug +'">';
    output +=     '<span class="pe-auto">' + text + '</span>';
    output +=   '</' + tag + '>';
    output +=   '<a class="grid grid__center mbn6 s-btn s-btn__muted pe-auto" href="#'+ slug +'">';
    output +=     linkIcon;
    output +=   '</a>';
    output += '</div>';

    return output;
  });

  // Add syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Add submenu generation
  eleventyConfig.addPlugin(pluginTOC, {tags: ['h2', 'h3']});

  // Copy these files over to _site
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('email/templates/code');
  eleventyConfig.addPassthroughCopy('email/templates/examples');
}