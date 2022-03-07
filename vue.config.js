let glob = require("glob-all");
let path = require("path");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/practical-vue-component/" : "/",
  configureWebpack: {
    plugins: []
  }
};
