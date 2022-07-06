const syntaxHighlight = require("eleventy-plugin-highlightjs");

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

module.exports = {
  configFunction(eleventyConfig) {
    // Add syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight, {
      className: "s-code-block",
      preAttributes: {
        tabindex: "0",
      },
      init: function ({ hljs }) {
          // TODO custom plugin taken from Prod - should probably be an npm package?
          hljs.addPlugin(new HljsInsertLineNums());
      },
    });
  }
}
