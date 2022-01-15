const axios = require("axios");

module.exports = async function() {
  const result = await axios.get("https://api.github.com/users/vargasraquel/repos")

  return result.data
};

// const Cache = require("@11ty/eleventy-cache-assets");

// module.exports = async function() {
//   let url = "https://api.github.com/users/vargasraquel/repos";

//   /* This returns a promise */
//   return Cache(url, {
//     duration: "2h", // save for 2 hours
//     type: "json"    // we’ll parse JSON for you
//   });
// };