const { default: Icons, Spots } = require("@stackoverflow/stacks-icons");

module.exports = {
  configFunction(eleventyConfig) {
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
  }
}
