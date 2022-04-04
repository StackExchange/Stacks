const hljs = require("highlight.js");
const MarkdownIt = require("markdown-it");
const fs = require("fs");

module.exports = {
  configFunction(eleventyConfig) {
    // create our shared markdownit instance
    const markdownIt = MarkdownIt("commonmark", {
      html: true,
      // have markdownit use hljs for syntax highlighting
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return '<pre class="language-' + lang + ' s-code-block"><code class="language-' + lang + ' s-code-block">' +
                hljs.highlight(str, {language: lang}).value +
                '</code></pre>';
        }

        return ''; // use external default escaping
      }
    });

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

    /**
     * Renders markdown strings to html:
     * {{ "**foo** _bar_" | markdown }}
     */
    eleventyConfig.addLiquidFilter("markdown", function (content) {
      return markdownIt.renderInline(content);
    });

    /**
     * Reads and renders markdown files:
     * {% markdown '/path/to/foo.md' %}
     */
    eleventyConfig.addShortcode("markdown", function (file) {
        let data = fs.readFileSync(`.${file}`);
        return markdownIt.render(data.toString());
    });
  }
}
