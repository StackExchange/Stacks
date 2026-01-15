const { Icons } = require("@stackoverflow/stacks-icons");

module.exports = {
    configFunction(eleventyConfig) {
      eleventyConfig.addPairedShortcode("tip", function(content, type, classes) {
        var icon = "";

        if (type == "warning") {
          icon = Icons.IconAlert;
          type = "s-notice__warning";
        } else {
          icon = Icons.IconInfo;
          type = "s-notice__info";
        }

        if (classes == null) {
          classes = "mb24";
        }

        var output = '';
        output += '<div class="s-notice s-anchors s-anchors__inherit s-anchors__underlined ' + type + ' ' + classes + '">';
        output +=     '<span class="s-notice--icon">';
        output +=       icon;
        output +=     '</span>';
        output +=     '<span>';
        output +=       content
        output +=     '</span>';
        output += '</div>';

        return output;
    });
  }
}
