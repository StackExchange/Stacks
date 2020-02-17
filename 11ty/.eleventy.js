module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');

  eleventyConfig.addPassthroughCopy('assets')
  return {
    passthroughFileCopy: true
  }
}