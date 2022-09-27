
const { Icons } = require("@stackoverflow/stacks-icons");

module.exports = {
  configFunction(eleventyConfig) {
    // Header shortcode
    eleventyConfig.addLiquidShortcode("header", function(tag, text) {
      var slug = text.replace(/\s+/g, '-').toLowerCase();
      var linkIcon = Icons.IconLink;

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
  }
}
