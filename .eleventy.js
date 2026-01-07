const pluginRss = require("@11ty/eleventy-plugin-rss");
const rimraf = require("rimraf");

module.exports = function (eleventyConfig) {
  rimraf.windows.sync("public/");
  eleventyConfig.addPassthroughCopy("./src/_includes/css");
  eleventyConfig.addPassthroughCopy("./src/_includes/img");
  eleventyConfig.addPassthroughCopy("./src/_includes/fonts");
  eleventyConfig.addPassthroughCopy("./src/_includes/js");
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};