const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = (config) => {
  config.addPlugin(syntaxHighlight);
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy({"src/assets": "assets"})
  config.addPlugin(require('@11ty/eleventy-navigation'));
  config.setTemplateFormats(["jpg", "png", "webp", "md", "njk"]);
  config.setBrowserSyncConfig({
    files: ["dist/**/*"],
    open: true,
  });
  config.setDataDeepMerge(true);
  // future blog configuration re:pagination
  /* 
    config.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->"
  });
  */
  config.setBrowserSyncConfig({
		files: './dist/css/**/*.css'
	});

  return {
    dir: {
      input: "src",
      output: "dist",
    }
  }
}