const hljs = require("highlight.js");
const syntaxHighlight = require("eleventy-plugin-highlightjs");
const pluginTOC = require("eleventy-plugin-nesting-toc");
const markdownShortcode = require("eleventy-plugin-markdown-shortcode");
const { default: Icons, Spots } = require("@stackoverflow/stacks-icons");
const { version } = require("../package.json");

module.exports = function(eleventyConfig) {
  eleventyConfig.setQuietMode(true); // Reduce the console output
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');

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
    output +=   '<' + tag + ' class="flex--item fl-grow1 stacks-' + tag + '" id="'+ slug +'">';
    output +=     '<span class="pe-auto">' + text + '</span>';
    output +=   '</' + tag + '>';
    output +=   '<a class="d-flex flex__center mbn6 s-btn s-btn__muted pe-auto" href="#'+ slug +'">';
    output +=     '<span class="v-visible-sr">Section titled ' + text + '</span>';
    output +=     linkIcon;
    output +=   '</a>';
    output += '</div>';

    return output;
  });

  // Tip shortcode
  eleventyConfig.addPairedShortcode("tip", function(content, type, classes, interiorClasses) {
    var spot = "";

    if (type == "warning") {
      spot = Spots["Alert"];
      type = "s-notice__warning";
    } else {
      spot = Spots["AlertCircle"];
      type = "s-notice__info";
    }

    if (classes == null) {
      classes = "mb48";
    }

    if (interiorClasses == null) {
      interiorClasses = "ai-start";
    }

    var output = '';
    output += '<div class="s-notice bar-md s-anchors s-anchors__inherit s-anchors__underlined ' + type + ' ' + classes + '">';
    output +=   '<div class="d-flex gs16 ' + interiorClasses + '">';
    output +=     '<div class="flex--item">';
    output +=       spot;
    output +=     '</div>';
    output +=     '<div class="flex--item fs-body2 lh-lg">';
    output +=       content
    output +=     '</div>';
    output +=   '</div>';
    output += '</div>';

    return output;
  });

  // Version shortcode
  eleventyConfig.addLiquidShortcode("version", function() {
    return {version}.version;
  });


  // highlightjs line-numbering support
  // add `linenums` or `linenums:startNumber` to the start of your code for detection
  class HljsInsertLineNums {
    constructor() {
        this.shouldInsert = false;
        this.startNumber = 1;
    }

    "before:highlight"(data) {
        var match = /^linenums(:\d+)?/.exec(data.code);
        if (!match) {
            return;
        }
        var startNumber = +(match[1] || "").slice(1) || 1;

        this.shouldInsert = true;
        this.startNumber = startNumber;
        data.code = data.code.replace(/^linenums(:\d+)?/, "");
    }

    "after:highlight"(result) {
        if (!this.shouldInsert) {
            return;
        }

        var startNumber = this.startNumber;

        var content = result.value;
        var lines = content.split(/\r?\n/);

        var output = "";
        for (var i = 0; i < lines.length; i++) {
            output += "<div>" + (i + startNumber) + "</div>";
        }

        var newContent =
            '<code class="s-code-block--line-numbers">' +
            output +
            "</code>" +
            content;
        result.value = newContent;

        this.shouldInsert = false;
      }
  }

  // Add syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight, {
      className: "s-code-block",
      init: function ({ hljs }) {
          // TODO custom plugin taken from Prod - should probably be an npm package?
          hljs.addPlugin(new HljsInsertLineNums());
      },
  });

  // Add markdown shortcode
  eleventyConfig.addPlugin(markdownShortcode, {
    html: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return '<pre class="language-' + lang + ' s-code-block"><code class="language-' + lang + ' s-code-block">' +
               hljs.highlight(str, {language: lang}).value +
               '</code></pre>';
      }

      return ''; // use external default escaping
    }
  });

  // Add submenu generation
  eleventyConfig.addPlugin(pluginTOC, {tags: ['h2', 'h3'], wrapper: 'nav aria-label="Table of contents"'});

  // Copy these files over to _site
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('email/templates/code');
  eleventyConfig.addPassthroughCopy('email/templates/examples');
}