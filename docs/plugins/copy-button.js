const { default: Icons } = require("@stackoverflow/stacks-icons");

module.exports = {
  configFunction(eleventyConfig) {
    eleventyConfig.addPairedShortcode("copybutton", function(content) {
      var tooltipId = "tooltip-" + Math.floor(Math.random() * 1000);

      var output = `
<div class="stacks-clipboard-content ps-relative" data-controller="clipboard">
  <button
    class="stacks-copy-btn s-btn s-btn__muted s-btn__icon ps-absolute p4 t8 r8"
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
  </div>
  <div data-clipboard-target="source">
  ${content}
  </div>
</div>
`;

      return output;
    });
}
}