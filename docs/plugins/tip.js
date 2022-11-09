const { Spots } = require("@stackoverflow/stacks-icons");

module.exports = {
    configFunction(eleventyConfig) {
      eleventyConfig.addPairedShortcode("tip", function(content, type, classes, interiorClasses) {
        var spot = "";

        if (type == "warning") {
          spot = Spots.SpotAlert;
          type = "s-notice__warning";
        } else {
          spot = Spots.SpotAlertCircle;
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
        output +=   '<div class="d-flex g16 ' + interiorClasses + '">';
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
  }
}
