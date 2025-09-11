const { Icons, Spots } = require("@stackoverflow/stacks-icons");
const fs = require("fs/promises");

function modifySvg(content, type, name, classes, dimension) {
  var defaultClasses = `svg-${type} ${type}${name}`;

  if (!content) {
    return `<span class="fc-danger">Invalid ${type}: ${name}</span>`;
  }

  // If we have classes, add them
  if (classes != null) {
    content = content.replace(defaultClasses, defaultClasses + " " + classes);
  }

  // If we need to change the size, do that too
  if (dimension != null) {
    content = content.replace('width="18" height="18"', 'width="' + dimension + '" height="' + dimension + '"');
  }

  return content;
}

module.exports = {
  configFunction(eleventyConfig) {
    // Icon shortcode
    eleventyConfig.addLiquidShortcode("icon", function(name, classes, dimension) {
      var svg = Icons["Icon" + name];
      return modifySvg(svg, "icon", name, classes, dimension);
    });

    // Spot shortcode
    eleventyConfig.addLiquidShortcode("spot", function(name, classes, dimension) {
      var svg = Spots["Spot" + name];
      return modifySvg(svg, "spot", name, classes, dimension);
    });

    // embed svgs in the assets folder
    eleventyConfig.addLiquidShortcode("embed", async function(name, classes) {
      const file = await fs.readFile(`assets/img/icons/${name}.svg`, "utf8");
      return modifySvg(file, "icon", name, classes, null);
    });
  }
}
