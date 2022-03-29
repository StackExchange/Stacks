const hljs = require("highlight.js");
const markdownIt = require("markdown-it")("commonmark");
const markdownShortcode = require("eleventy-plugin-markdown-shortcode");

module.exports = {
  configFunction(eleventyConfig) {
    // customize markdown-it rendering to add our classes
    markdownIt.use(function (md) {
      // mapping of tag: classes
      const customClasses = {
        "code": "stacks-code"
      }

      const addClasses = function (tokens) {
        tokens.forEach(function (token) {
          if (token.tag in customClasses) {
            token.attrJoin("class", customClasses[token.tag]);
          }

          if (token.children) {
            addClasses(token.children);
          }
        });
      };

      md.core.ruler.push("add-custom-classes", function (state) {
        addClasses(state.tokens);
      });
    });

    eleventyConfig.addLiquidFilter("markdown", function (content) {
      return markdownIt.renderInline(content);
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
  }
}