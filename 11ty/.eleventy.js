module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');

  // Header shortcode
  eleventyConfig.addLiquidShortcode("header", function(tag, text) {
    var slug = text.replace(/\s+/g, '-').toLowerCase();

    var output = ''
    output += '<div class="grid jc-space-between ai-end pe-none stacks-header">';
    output +=   '<' + tag + ' class="grid--cell fl1 stacks-' + tag + '" id="#'+ slug +'">';
    output +=     '<span class="pe-auto">' + text + '</span>';
    output +=   '</' + tag + '>';
    output +=   '<a class="grid grid__center mbn6 s-btn s-btn__muted pe-auto" href="#'+ slug +'">';
    output +=     '<svg aria-hidden="true" class="svg-icon iconLink m0" width="18" height="18" viewBox="0 0 18 18"><path d="M7.22 11.83a6 6 0 0 0 1.62.85l.61-1.8a4.1 4.1 0 1 1 4.04-.8l1.26 1.42a6 6 0 1 0-7.53.33z"></path><path d="M10.65 6.23a6 6 0 0 0-1.6-.87L8.4 7.15a4.1 4.1 0 1 1-4.05.73L3.12 6.43a6 6 0 1 0 7.53-.2z"></path></svg>';
    output +=   '</a>';
    output += '</div>';

    return output;
  });

  eleventyConfig.addPassthroughCopy('assets');
  return {
    passthroughFileCopy: true
  }
}