const { default: Icons } = require("@stackoverflow/stacks-icons");

module.exports = {
    configFunction(eleventyConfig) {
      eleventyConfig.addLiquidShortcode("copybutton", function(name) {
        var tooltipId = "tooltip-" + (name || Math.floor(Math.random() * 1000));

        var output = `<button
          class="s-btn s-btn__muted s-btn__icon ps-absolute t8 r8"
          data-action="clipboard#copy"
          data-s-tooltip-placement="top"
          data-controller="s-tooltip"
          aria-describedby="${tooltipId}">
            <span class="d-none" data-show-on-copy>${Icons["Checkmark"]}</span>
            <span data-hide-on-copy>${Icons["Copy"]}</span>
        </button>
        <div class="s-popover s-popover__tooltip"
          id="${tooltipId}"
          role="tooltip"
          aria-hidden="true">
            <div class="s-popover--arrow"></div>
            <span class="d-none" data-show-on-copy>Copied</span>
            <span data-hide-on-copy>Copy</span>
        </div>`;
    
        return output;
      });
  }
}
