
const { Icons } = require("@stackoverflow/stacks-icons-legacy");

module.exports = {
  configFunction(eleventyConfig) {
    // Header shortcode
    eleventyConfig.addLiquidShortcode("header", function(tag, text) {
      var slug = text.replace(/\s+/g, '-').toLowerCase();
      var linkIcon = Icons.IconLink;

      var output = '';
      output += '<div class="d-flex jc-space-between ai-end mb12">';
      output +=   '<' + tag + ' class="fl-grow1 stacks-' + tag + '" id="'+ slug +'">';
      output +=     text;
      output +=   '</' + tag + '>';
      output +=   '<a class="s-btn s-btn__clear" href="#'+ slug +'">';
      output +=     '<span class="v-visible-sr">Section titled ' + text + '</span>';
      output +=     linkIcon;
      output +=   '</a>';
      output += '</div>';

      return output;
    });
  }
}
