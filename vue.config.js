const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false, //关闭代码检测
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
};
