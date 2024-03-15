const { Icons } = require("@stackoverflow/stacks-icons");

const generateHeaderHTML = (tag, text) => {
  var slug = text.replace(/\s+/g, '-').toLowerCase();
  var linkIcon = Icons.IconLink;

  return `
    <div class="d-flex jc-space-between ai-end pe-none stacks-header">
      <${tag} class="flex--item fl-grow1 stacks-${tag}" id="${slug}">
        <span class="pe-auto">${text}</span>
      </${tag}>
      <a class="d-flex flex__center mbn6 s-btn s-btn__muted pe-auto" href="#${slug}">
        <span class="v-visible-sr">Section titled ${text}</span>
        ${linkIcon}
      </a>
    </div>
  `;
};

const header = {
  generateHeaderHTML: generateHeaderHTML,
  configFunction: function(eleventyConfig) {
    // Header shortcode
    eleventyConfig.addLiquidShortcode("header", generateHeaderHTML);
  }
};

module.exports = header;
