
const { Icons } = require("@stackoverflow/stacks-icons-legacy");

module.exports = {
  configFunction(eleventyConfig) {
    // Header shortcode
    eleventyConfig.addLiquidShortcode("header", function(tag, text) {
      var slug = text.replace(/\s+/g, '-').toLowerCase();
      var linkIcon = Icons.IconLink;

      var baseHeadingClasses = "fl-grow1 mb0 lh-sm";
      var headingClasses = "fs-display1 mb8";
      if (tag === "h2") {
        headingClasses = " fs-headline1";
      } else if (tag === "h3") {
        headingClasses = " fs-subheading fc-black-500";
      } else if (tag === "h4") {
        headingClasses = " fs-body3 fc-black-400";
      }
      var headingTag = '<' + tag + ' class="' + baseHeadingClasses + ' ' + headingClasses + '" id="'+ slug +'">';

      var output = '';
      output += '<div class="d-flex jc-space-between ai-end mb12">';
      output +=   headingTag;
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
