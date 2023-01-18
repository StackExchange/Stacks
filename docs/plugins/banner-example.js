const { Icons } = require("@stackoverflow/stacks-icons");

module.exports = {
    configFunction(eleventyConfig) {
      eleventyConfig.addLiquidShortcode("bannerExample", function(type, important, classes) {
        var lockIcon = Icons.IconLock;
        var closeIcon = Icons.IconClearSm;

        // add type switch statement
        function getTypeClass() {
            switch (type) {
              case "info":
                return "s-banner__info";
              case "success":
                return "s-banner__success";
              case "warning":
                return "s-banner__warning";
              case "danger":
                return "s-banner__danger";
              default:
                return "";
          }
        }

        if (classes == null) {
          classes = "";
        }
        if (important) {
          classes += " s-banner__important";
        }

        return `<aside class="s-banner is-pinned ps-relative ${classes} ${getTypeClass()}" role="presentation" aria-hidden="false" style="z-index: 1;">
        <div class="d-flex flex__center jc-space-between s-banner--container">
            <div class="d-flex g8" aria-label="banner message">
                <div>${lockIcon}</div>
                <div class="d-flex ai-center">
                    <p class="m0"><strong>Stacks is currently frozen in read-only mode.</strong> Contact the team to restore access.</p>
                </div>
            </div>
            <div class="ml-auto myn8">
                <span class="s-btn s-banner--btn">${closeIcon}</span>
            </div>
        </div>
    </aside>`;
    });
  }
}
