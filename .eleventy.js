const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/_includes/css");
  eleventyConfig.addPassthroughCopy("./src/_includes/img");
  eleventyConfig.addPassthroughCopy("./src/_includes/fonts");
  eleventyConfig.addPassthroughCopy("./src/_includes/js");
  eleventyConfig.addPlugin(pluginRss);

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};