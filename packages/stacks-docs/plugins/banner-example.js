const { Icons } = require("@stackoverflow/stacks-icons");

module.exports = {
    configFunction(eleventyConfig) {
      eleventyConfig.addLiquidShortcode("bannerExample", function(type, important, classes) {
        var typeIcon = Icons.IconAlert;
        var btnIcon = Icons.MoreV;

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
              case "activity":
                return "s-banner__activity";
              case "featured":
                return "s-banner__featured";
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

        return `<aside class="s-banner d-flex is-pinned ps-relative ${classes} ${getTypeClass()}" role="presentation" aria-hidden="false" style="z-index: 1;">
            <span class="s-banner--icon">${typeIcon}</span>
            <span>
                <strong>Stacks is currently frozen in read-only mode.</strong> Contact the team to restore access.
            </span>
            <div class="d-flex ml-auto">
              <button class="s-link s-banner--btn">${btnIcon}</button>
            </div>
    </aside>`;
    });
  }
}
