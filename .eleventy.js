module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css")
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'))
  eleventyConfig.addShortcode('navlist', require('./lib/shortcodes/navlist.js'));

  return {
    dir: {
      input: "src",
      output: "public",
    }
  }
}